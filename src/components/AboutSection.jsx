    import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../routes';
import UIUX2 from "../assets/UIUX2.mp4";
import MortionGrandma from "../assets/3dMortionGrandma.mp4";
import Home1 from "../assets/Home1.mp4";



    function AboutSection() {
    const navigate = useNavigate();

useEffect(() => {
  const container = document.querySelector(".about-container");
  const trigger = document.querySelector(".about-features");

  const handleScroll = () => {
    const rect = trigger.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.6) {
      container.classList.add("dark-mode");
    } else {
      container.classList.remove("dark-mode");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

      return (
        <div className="about-container">
          {/* MARQUEE TEXT */}
          <div className="marquee-wrapper">
            <div className="marquee">
              <span>INSIDE THE HIVE INSIDE THE HIVE INSIDE THE HIVE </span>
              <span>INSIDE THE HIVE INSIDE THE HIVE INSIDE THE HIVE </span>
            </div>
          </div>

          {/* MAIN HEADING */}
          <h1 className="about-heading">
            
            {/* THE <span className="highlight">PIXELS</span> BEHIND */}
          </h1>

          {/* SUBTEXT */}
          <p className="about-subtext">
            Most marketing doesn’t fail at the strategy. It fails at the build. 
          </p>

          {/* ─── SCROLL SECTION ─── */}
    <div className="about-extra-section">
      
      <div className="about-extra-top">
        <div className="about-left">
          <span className="about-tag">(ABOUT)</span>
          <h2 className="about-big-text">
            WHAT <br />
            We Are <br />
            Building?
          </h2>
        </div>

        <div className="about-right">
          <h3>Every engagement moves through <br /> the same philosophy:</h3>
        </div>
      </div>

      <div className="about-extra-bottom">
        <p>
         Grandmas Hive is a modern marketing studio built around execution. 
         Part creative studio. Part production company. Part growth partner. 
          One team responsible for strategy, production and delivery. 
        </p>
      </div>

      {/* ─── FEATURES SECTION ─── */}
    <div className="about-features">

      <div className="feature-item">
        <span className="feature-number">1</span>
        <p>Understand the objective. </p>
      </div>

      <div className="feature-item">
        <span className="feature-number">2</span>
        <p>Build the foundation. </p>
      </div>

      <div className="feature-item">
        <span className="feature-number">3</span>
        <p>Create the assets, Put them into the world.</p>
      </div>

    </div>
     <div className="offering-content our-offering-content">
   
        <h1>OUR <br />OFFERING</h1>

        <div className="offering-grid">
          <p className="offering-intro">
            We design experiences and build the tech behind them.
          </p>

          <div className="offering-cols">
            <div className="offering-col">
              <h3>Digital Strategy</h3>
              <p>
                Information Architecture<br/>
                Zone Maps & Wireframes<br/>
                Content Architecture<br/>
                User Journeys<br/>
                Product Validation
              </p>
            </div>

            <div className="offering-col">
              <h3>Digital Design</h3>
              <p>
                UX Flows<br/>
                Design Toolkits<br/>
                Web & App Design<br/>
                Motion & Interaction<br/>
                Design Systems
              </p>
            </div>

            <div className="offering-col">
              <h3>Development</h3>
              <p>
                Product Architecture<br/>
                Front + Back-end Development<br/>
                Dev Infrastructure<br/>
                CI/CD Pipelines<br/>
                QA Automation & Visual Testing
              </p>
            </div>
          </div>
        </div>
      </div>
      <section id="team-section" class="team">
  <div class="team-left">
    <p>(PEOPLE)</p>
    <h1>THE TEAM</h1>
    
  </div>

  <div class="team-right">
    <h2>
      Your inside track to an <br/>
      outside perspective.
    </h2>
  </div>
 
</section>
    </div>
 


    
 <div className="work-section">
  
  <div className="work-container">
    
    {/* Card 1 */}
    <div className="work-item">
      <div className="work-card">
        <video src={UIUX2} autoPlay loop muted playsInline />
        <div className="work-overlay">UI UX DESIGN</div>
      </div>
      <div className="work-content">
        <div className="work-title">UI UX DESIGN</div>
        <div className="work-subtitle">Intuitive digital experiences crafted with user-centered design</div>
        <div className="work-subtitle">Marketing Website & Ecommerce</div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="work-item">
      <div className="work-card">
        <video src={MortionGrandma} autoPlay loop muted playsInline />
        <div className="work-overlay">3D MOTION ART</div>
      </div>
      <div className="work-content">
        <div className="work-title">3D MOTION ART</div>
        <div className="work-subtitle">Immersive visual storytelling through dynamic 3D motion design</div>
        <div className="work-subtitle">Marketing Website</div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="work-item">
      <div className="work-card">
        <video src={Home1} autoPlay loop muted playsInline />
        <div className="work-overlay">DIGITAL STRATEGY</div>
      </div>
      <div className="work-content">
        <div className="work-title">DIGITAL STRATEGY</div>
        <div className="work-subtitle">Strategic digital solutions built to elevate brand growth</div>
        <div className="work-subtitle">Marketing Website</div>
      </div>
    </div>

  </div>
</div>
<div className="cta-section">
  <div className="cta-inner">
    
    <h2 className="cta-small">
      Are you ready <br /> to take action?
    </h2>
       
    <a href="/c9r2y5k" style={{ textDecoration: "none" }}>
  <h1 className="cta-big">
    LET’S CHAT.
  </h1>
</a>

  </div>
</div>



        
          {/* STYLES */}
          <style>{`
          *{
          scrollbar-width: none; /* Firefox */
          }


/* SECTION */
.cta-section {
  width: 100%;
  background: #f3f3f3;
  padding: 120px 80px;
  box-sizing: border-box;
  margin-top:-150px;
}

/* INNER WRAPPER */
.cta-inner {
  max-width: 1400px;
}

/* SMALL TEXT */
.cta-small {
  font-size: clamp(48px, 5vw, 80px);
  font-weight: 500;
  line-height: 1.1;
  margin: 0 0 40px 0;
  color: #111;
}

/* BIG TEXT */
.cta-big {
  font-size: clamp(120px, 10vw, 260px);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -3px;
  margin: 0;
  color: #000;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .cta-section {
    padding: 80px 20px;
  }

  
  .cta-big {
    font-size: 80px;
  }
}
          /* SECTION WRAPPER */
.work-section {
  width: 100%;
  margin-top: 120px;
 
}
  

/* FULL WIDTH CONTAINER */
.work-container {
  display: flex;
  gap: 24px;
  width: 100%;
  padding: 60px 80px;
  margin-top: -620px;
  box-sizing: border-box;
}

/* ITEM */
.work-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* CARD */
.work-card {
  width: 100%;
  height: 320px;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  background: #000;
  cursor: pointer;
  transition: border-radius 0.4s ease;
}

.work-card:hover {
  border-radius: 30px;
}

/* MEDIA */
.work-card video,
.work-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease;
}

.work-card:hover video,
.work-card:hover img {
  transform: scale(1.08);
  filter: brightness(0.7);
}

/* OVERLAY TEXT */
.work-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 24px;
  background: linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1), transparent);
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  opacity: 0.85;
  transition: opacity 0.5s ease;
}

.work-card:hover .work-overlay {
  opacity: 1;
}

/* TEXT */
.work-content {
  margin-top: 16px;
}

.work-title {
  font-size: 20px;
  font-weight: 800;
}

.work-subtitle {
  font-size: 15px;
  color: #555;
  margin-top: 4px;
}

/* DARK MODE SUPPORT */
.about-container.dark-mode .work-title,
.about-container.dark-mode .work-subtitle {
  color: #fff;
}

/* TABLET */
@media (max-width: 1024px) {
  .work-container {
    padding: 40px 40px;
    gap: 20px;
    margin-top: -400px;
  }
  .work-card {
    height: 260px;
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .work-container {
    flex-direction: column;
    padding: 40px 20px;
    margin-top: 0;
    gap: 30px;
    width: 100%;
  }
  .work-card {
    height: 220px;
  }
  .work-title {
    font-size: 18px;
  }
  .work-subtitle {
    font-size: 13px;
  }
    
}

          
            .about-container {
              width: 100%;
              min-height: 100vh;
              background: #ffffff;
              display: flex;
              flex-direction: column;
            align-items: stretch;   /* ✅ instead of center */
      text-align: left;       
              padding: 120px 20px 60px; /* space for navbar */
              box-sizing: border-box;
            }

            .our-offering-content h1 {
      font-size: clamp(60px, 5vw, 140px);
      font-weight: 900;
      line-height: 1;
      margin-bottom: 40px;
      margin-left: 60px;
    }

            /* ─── MARQUEE ─── */
            .marquee-wrapper {
              width: 100%;
              overflow: hidden;
              position: absolute;
              top: 80%;
              left: 0;
              transform: translateY(-50%);
              z-index: 0;
            }


          /* 🔥 DARK MODE ON WHOLE SCREEN */
    .about-container.dark-mode {
      background: #000;
      color: #fff;
      transition: background 0.6s ease;
    }

    /* All child sections go black */
    .about-container.dark-mode .offering-content,
    .about-container.dark-mode .work-section,
    .about-container.dark-mode .cta-section,
    .about-container.dark-mode .team {
      background: #000 !important;
    }

    .about-container.dark-mode .offering-cols {
      border-top-color: rgba(255,255,255,0.12) !important;
    }

    .about-container.dark-mode .offering-col {
      border-right-color: rgba(255,255,255,0.12) !important;
    }

    .about-container.dark-mode .cta-small,
    .about-container.dark-mode .cta-big {
      color: #fff !important;
    }

    /* TEXT COLOR CHANGE */
    .about-container.dark-mode p,
    .about-container.dark-mode h1,
    .about-container.dark-mode h2,
    .about-container.dark-mode h3,
    .about-container.dark-mode span,
    .about-container.dark-mode .offering-intro,
    .about-container.dark-mode .offering-col h3,
    .about-container.dark-mode .offering-col p {
      color: #fff !important;
    }

    /* optional smooth transition */
    .about-container,
    .about-container * {
      transition: background 0.6s ease, color 0.6s ease;
    }




    /* SECTION */
    .offering-section {
      position: relative;
      margin-top: 360px;
      width: 100%;
    /* extra scroll space */
      background: #ffffff
      overflow: hidden;
    }

    /* 🔥 BLACK OVERLAY (grows upward) */
    .offering-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background: #fff;
      z-index: 1;
      transition: height 0.1s linear;
    }

    /* CONTENT */
    .offering-content {
      position: relative;
      z-index: 2;
      width: 100vw;
      margin-left: calc(-20px);
      padding: 100px 60px;
      box-sizing: border-box;
      max-width: none;
      transition: color 0.3s ease;
    }

    /* TEXT TURNS WHITE WHEN BLACK PASSES */
    .offering-section .offering-overlay {
      pointer-events: none;
    }

    .offering-section {
      color: #000;
    }

    /* GRID */
    .offering-grid {
      display: flex;
      flex-direction: column;
      gap: 60px;
      margin-top: 160px;
      
      width: 100%;
    }

    .offering-intro {
      font-size: clamp(28px, 3vw, 52px);
      font-weight: 500;
      line-height: 1.2;
      text-align: center;
      color: #000;
      margin: 0;
      padding: 0 60px;
    }

    .offering-cols {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      margin-left: 0px;
      gap: 0;
    }

    .offering-col {
      padding: 40px 60px;
    }

    .offering-col:last-child {
      border-right: none;
    }

    .offering-col h3 {
      font-size: clamp(18px, 1.8vw, 28px);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 16px;
      color: #000;
    }

    .offering-col p {
      font-size: clamp(14px, 1.2vw, 18px);
      line-height: 1.9;
      color: #000;
      margin: 0;
    }

            .marquee {
      display: flex;
      width: max-content;
      white-space: nowrap;
      animation: scroll 20s linear infinite;
      will-change: transform; /* smooth */
    }

    .marquee span {
      font-size: 120px;
      font-weight: 900;
      color: #000;
      margin-right: 80px;
      font-family: 'Arial Black', sans-serif;
    }

            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            /* ─── HEADING ─── */
            .about-heading {
              font-size: clamp(60px, 10vw, 140px);
              font-weight: 900;
              color: #000;
              letter-spacing: -2px;
              margin: 0;
              z-index: 2;
              line-height: 1;
            }

            .highlight {
              position: relative;
            }

        .about-subtext {
      max-width: 1100px;
      width: 100%;
      font-size: clamp(32px, 3vw, 56px);
      margin: 70px auto 0;   /* ✅ auto centers horizontally */
      text-align: center;    /* ✅ center text */
      color: #111;
      line-height: 1.3;
      z-index: 2;
      font-weight: 500;
    }
            /* ─── RESPONSIVE ─── */
            @media (max-width: 768px) {
              .marquee span {
                font-size: 60px;
                display: none;
                
              }

              .about-subtext {
                font-size: 20px;
                margin-bottom:-120px;
              }
            }
          /* ─── EXTRA ABOUT SECTION ─── */
    .about-extra-section {
      width: 100%;
      margin-top: 550px;
      
      box-sizing: border-box;
    }

    /* top layout */
    .about-extra-top {
      display: flex;
        justify-content: flex-start; /
      align-items: flex-start;
    }

    /* left big heading */
    .about-left {
      max-width: 50%;
    }

    .about-tag {
      font-size: 28px;
      display: block;
      margin-bottom: 20px;
      color: #333;
    }

    .about-big-text {
      font-size: clamp(60px, 7vw, 140px);
      font-weight: 900;
      line-height: 0.9;
      letter-spacing: -2px;


    }

    /* right text */
    .about-right {
      max-width: 40%;
      display: flex;
      margin-top:280px;
      margin-left:200px;
      height: 100%;
    }

    .about-right h3 {
      font-size: clamp(28px, 3vw, 48px);
      font-weight: 500;
      line-height: 1.2;
    }

    /* bottom paragraph */
    .about-extra-bottom {
      margin-top: 120px;
      width: 100%;        /* ✅ full width */
      max-width: none;    /* ✅ remove restriction */
    }

    .about-extra-bottom p {
      font-size: clamp(24px, 2.5vw, 40px);
      line-height: 1.4;
    }

    /* ─── RESPONSIVE ─── */
    // @media (max-width: 768px) {
    //   .about-extra-top {
    //     flex-direction: column;
    //     gap: 40px;
    //   }

    //   .about-left,
    //   .about-right {
    //     max-width: 100%;
    //   }

    //   .about-extra-bottom p {
    //     font-size: 20px;
    //   }
    // }
    /* ─── FEATURES SECTION ─── */
    /* DEFAULT (LIGHT) */
    .about-features {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 60px;
      margin-top: 120px;
      padding: 100px 60px;
      box-sizing: border-box;
      background: #ffffff;
      transition: background 0.6s ease;
    }


    
    /* DARK MODE ON SCROLL */
    .about-features.dark {
      background: #000;
    }

    /* TEXT COLORS */
    .about-features.dark .feature-number,
    .about-features.dark p {
      color: #fff;
    }

    /* smooth transition */
    .feature-number,
    .feature-item p {
      transition: color 0.6s ease;
    }

    /* each block */
    .feature-item {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* big number */
    .feature-number {
      font-size: 120px;
      font-weight: 900;
      color: #666; /* light grey like your image */
      line-height: 1;
    }

    /* text */
    .feature-item {
      display: flex;
      flex-direction: column;
      align-items: center;   /* ✅ center horizontally */
      text-align: center;    /* ✅ center text */
      gap: 20px;
    }

    .feature-item p {
      font-size: clamp(28px, 2vw, 48px); /* ✅ bigger + responsive */
      line-height: 1.3;
      color: #111;
      max-width: 600px;
      text-align: center;
    }

    /* SECTION BASE */
    .color-switch-section {
      width: 100%;
      min-height: 100vh;
      background: #ffffff;
      transition: background 0.6s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* INNER GRID */
    .color-switch-inner {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 60px;
      padding: 100px 60px;
    }

    /* DARK MODE (when scrolling middle) */
    .color-switch-section.dark {
      background: #000;
    }

    /* TEXT COLOR CHANGE */
    .color-switch-section.dark .feature-number,
    .color-switch-section.dark p {
      color: #fff;
    }

    /* DEFAULT LIGHT */
    .feature-number {
      color: #666;
      transition: color 0.6s ease;
    }

    .feature-item p {
      color: #111;
      transition: color 0.6s ease;
    }

    .offering-section.light-text .offering-content {
      color: #000;
    }

.about-container.dark-mode .about-features {
  background: #000 !important;
}


/* TEAM SECTION */
.team {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  background: #fffffff
 
}

/* LEFT */
.team-left p {
  font-size: 24px;
  letter-spacing: 2px;
   margin-top:-300px;
}

.team-left h1 {
  font-size: 90px;
  font-weight: 900;
  margin: 0;
  
}

/* DOT */


/* RIGHT */
.team-right h2 {
  font-size: 60px;
  font-weight: 400;
  line-height: 1.2;
   margin-top:-280px;
  max-width: 600px;
}

/* FULL BLACK OVERLAY */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: 0.4s;
  pointer-events: none;
  z-index: 999;
}

.overlay.active {
  opacity: 1;
}
    /* ================= MOBILE VIEW FIX ================= */
@media (max-width: 768px) {

  /* Main container */
  .about-container {
    padding: 80px 20px 40px;
    text-align: left;
  }

  /* Marquee */
 .marquee-wrapper {
  top: 300px;
}

  .marquee span {
    font-size: 42px;
    margin-right: 30px;
  }

  /* Intro text */
  .about-subtext {
    font-size: 18px;
    margin-top: 10px;
    text-align: left;
  }

  /* remove huge gap */
  .about-extra-section {
    margin-top: 180px;
  }

  /* top section stack */
  .about-extra-top {
    flex-direction: column;
    gap: 30px;
  }

  .about-left,
  .about-right {
    max-width: 100%;
    margin: 0;
  }

  .about-tag {
    font-size: 18px;
  }

  .about-big-text {
    font-size: 42px;
    line-height: 1;
  }

  .about-right h3 {
    font-size: 24px;
  }

  .about-extra-bottom {
    margin-top: 50px;
  }

  .about-extra-bottom p {
    font-size: 18px;
  }

  /* Features vertical */
  .about-features {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 50px 20px;
  }

  .feature-number {
    font-size: 60px;
  }

  .feature-item p {
    font-size: 20px;
  }

  /* Offering section vertical */
.our-offering-content h1 {
  font-size: 38px;
  margin-left: 20px;
}

.offering-content {
  width: 100vw;
  margin-left: -20px;
  padding: 40px 0;
}

.offering-grid {
  gap: 32px;
  margin-top: 40px;
}

.offering-intro {
  font-size: 20px;
  text-align: left;
  padding: 0 20px;
}

.offering-cols {
  grid-template-columns: 1fr;
}

.offering-col {
  padding: 24px 20px;
  border-right: none;
  border-bottom: 1px solid rgba(0,0,0,0.12);
}

.offering-col:last-child {
  border-bottom: none;
}

.offering-col h3 {
  font-size: 18px;
}

.offering-col p {
  font-size: 15px;
}

  


  /* Team section vertical */
  .team {
    flex-direction: column;
    padding: 50px 20px;
    min-height: auto;
    align-items: flex-start;
  }

  .team-left p,
  .team-right h2 {
    margin-top: 0;
  }

  .team-left h1 {
    font-size: 42px;
  }

  .team-right h2 {
    font-size: 24px;
    margin-top: 20px;
  }

  /* Work cards vertical - handled above */

  /* CTA */
  .cta-section {
    margin-top: 0;
    padding: 1px 2px;
  }

  .cta-small {
    font-size: 15px;
    COLOR:#f3f3f3;
  }

  .cta-big {

    font-size: 56px;
  }
}
    
    `}</style>

    
        </div>
      );


    }
    export default AboutSection;