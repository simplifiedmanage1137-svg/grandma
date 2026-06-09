import { Resend } from 'resend';
import mongoose from 'mongoose';

// ─── Resend ───────────────────────────────────────────────────────────────────
const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Recipients ───────────────────────────────────────────────────────────────
const recipients = [
  'shaun@b2bindemand.com',
  'saurabh@b2bindemand.com',
  'atique@b2bindemand.com',
  'utathya@b2bindemand.com',
  'sanket@b2bindemand.com',
  'pratik@b2bindemand.com',
];

// ─── MongoDB (reuse connection across warm invocations) ───────────────────────
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}

const contactSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  phone:     { type: String, default: '' },
  company:   { type: String, required: true },
  message:   { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// ─── In-memory rate limiter (per serverless instance) ─────────────────────────
const ipMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const max = 5;
  const entry = ipMap.get(ip) || { count: 0, start: now };
  if (now - entry.start > windowMs) {
    ipMap.set(ip, { count: 1, start: now });
    return false;
  }
  if (entry.count >= max) return true;
  entry.count += 1;
  ipMap.set(ip, entry);
  return false;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

const isSpam = (text) =>
  [/https?:\/\//i, /\b(casino|poker|viagra|cialis|crypto|bitcoin|nft)\b/i, /<[^>]+>/].some((p) =>
    p.test(text)
  );

const formatTimestamp = () =>
  new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  }) + ' IST';

// ─── Email templates ──────────────────────────────────────────────────────────
const notificationHtml = ({ name, email, phone, company, message }) => `
<!DOCTYPE html><html><head><meta charset="utf-8"/>
<style>
  body{font-family:Arial,sans-serif;background:#f4f4f4;margin:0;padding:0}
  .wrap{max-width:600px;margin:40px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)}
  .hdr{background:#000;padding:28px 36px}.hdr h1{color:#dbff00;margin:0;font-size:20px}
  .bdy{padding:28px 36px}.row{margin-bottom:18px}
  .lbl{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#999;margin-bottom:3px}
  .val{font-size:15px;color:#111;word-break:break-word}
  .msg{background:#f9f9f9;border-left:4px solid #dbff00;padding:14px;border-radius:4px;font-size:14px;color:#333;white-space:pre-wrap}
  .ftr{background:#f9f9f9;padding:14px 36px;font-size:11px;color:#aaa;border-top:1px solid #eee}
</style></head><body>
<div class="wrap">
  <div class="hdr"><h1>New Contact — Grandma's Hive</h1></div>
  <div class="bdy">
    <div class="row"><div class="lbl">Name</div><div class="val">${name}</div></div>
    <div class="row"><div class="lbl">Email</div><div class="val">${email}</div></div>
    <div class="row"><div class="lbl">Phone</div><div class="val">${phone || '—'}</div></div>
    <div class="row"><div class="lbl">Company</div><div class="val">${company}</div></div>
    <div class="row"><div class="lbl">Message</div><div class="msg">${message}</div></div>
    <div class="row"><div class="lbl">Submitted</div><div class="val">${formatTimestamp()}</div></div>
  </div>
  <div class="ftr">Sent automatically from grandmashive.com</div>
</div></body></html>`;

const confirmationHtml = (name) => `
<!DOCTYPE html><html><head><meta charset="utf-8"/>
<style>
  body{font-family:Arial,sans-serif;background:#f4f4f4;margin:0;padding:0}
  .wrap{max-width:600px;margin:40px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)}
  .hdr{background:#000;padding:28px 36px}.hdr h1{color:#dbff00;margin:0;font-size:20px}
  .bdy{padding:28px 36px;color:#333;font-size:15px;line-height:1.7}
  .bdy h2{color:#000;font-size:18px;margin-top:0}
  .cta{display:inline-block;margin-top:20px;background:#000;color:#dbff00;padding:10px 24px;border-radius:4px;text-decoration:none;font-weight:700;font-size:13px;letter-spacing:1px}
  .ftr{background:#f9f9f9;padding:14px 36px;font-size:11px;color:#aaa;border-top:1px solid #eee}
</style></head><body>
<div class="wrap">
  <div class="hdr"><h1>🐝 Grandma's Hive</h1></div>
  <div class="bdy">
    <h2>Hey ${name}, we got your message.</h2>
    <p>Thanks for reaching out. Our team will review your submission and get back to you within <strong>1–2 business days</strong>.</p>
    <a class="cta" href="https://www.grandmashive.com">VISIT OUR SITE →</a>
  </div>
  <div class="ftr">© ${new Date().getFullYear()} Grandma's Hive</div>
</div></body></html>`;

// ─── Handler ──────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // CORS headers — allow grandmashive.com and localhost
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });

  // Rate limit by IP
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again in 15 minutes.' });
  }

  const { name, email, phone, company, message } = req.body || {};

  // Validation
  const missing = [];
  if (!name?.trim())    missing.push('name');
  if (!email?.trim())   missing.push('email');
  if (!company?.trim()) missing.push('company');
  if (!message?.trim()) missing.push('message');

  if (missing.length) {
    return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}.` });
  }

  if (!isValidEmail(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (name.trim().length > 100 || company.trim().length > 100) {
    return res.status(400).json({ error: 'Name and company must be under 100 characters.' });
  }

  if (message.trim().length > 2000) {
    return res.status(400).json({ error: 'Message must be under 2000 characters.' });
  }

  if (isSpam(message) || isSpam(name)) {
    return res.status(400).json({ error: 'Your message was flagged as spam.' });
  }

  const sanitized = {
    name:    name.trim(),
    email:   email.trim().toLowerCase(),
    phone:   phone?.trim() || '',
    company: company.trim(),
    message: message.trim(),
  };

  try {
    // Save to MongoDB
    await connectDB();
    await Contact.create(sanitized);

    // Send team notification
    await resend.emails.send({
      from:    'Grandmas Hive <noreply@grandmashive.com>',
      to:      recipients,
      subject: `New Contact: ${sanitized.name} — ${sanitized.company}`,
      html:    notificationHtml(sanitized),
    });

    // Send user confirmation
    await resend.emails.send({
      from:    'Grandmas Hive <noreply@grandmashive.com>',
      to:      [sanitized.email],
      subject: "We got your message — Grandma's Hive",
      html:    confirmationHtml(sanitized.name),
    });

    return res.status(201).json({ success: true, message: 'Message sent successfully.' });

  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
}
