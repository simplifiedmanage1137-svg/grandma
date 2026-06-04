import React, { useState } from "react";
// import craftVid from "../assets/craft.mp4";
// import wonderVid from "../assets/wonder.mp4";
import courageVid from "../assets/courage.mp4";
import curiosityVid from "../assets/cursoity.mp4";
import attentionVid from "../assets/attention.mp4";

const clients = [
  { name: "CRAFT",     },
  { name: "WONDER",   },
  { name: "COURAGE",   media: courageVid },
  { name: "CURIOSITY", media: curiosityVid },
  { name: "ATTENTION", media: attentionVid },
];

const ClientsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="clients-section">
      <p className="clients-label"></p>

      <div className="clients-list">
  {clients.map((client, index) => (
    <div
      key={index}
      className="client-item"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <h1 className={`client-text ${hoveredIndex === index ? "active" : ""}`}>
        {client.name}
      </h1>

      {hoveredIndex === index && (
        <div className="hover-media">
          <video src={client.media} autoPlay loop muted playsInline />
        </div>
      )}
    </div>
  ))}
</div>

      <style>{`
        .clients-section {
          background: #fff;
          padding: 120px 0;
          text-align: center;
          position: relative;
        }
          .clients-list {
  position: relative;
}

.client-item {
  position: relative;
  z-index: 3;
}

.client-text {
  position: relative;
  z-index: 3;
}

        .clients-label {
          font-size: 30px;
          margin-bottom: 40px;
        }

        .client-text {
          font-size: clamp(30px, 5vw, 100px);
          font-weight: 900;
          margin: px 0;
          color: #000;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        /* 🔥 Gradient text */
    .client-text.active {
  background: linear-gradient(
    90deg,
    #cbee1d 0%,
    #cbee1d 70%,
    #2f00ff 100%
  );
  background-size: 200% auto;
  background-position: right center;
  background-position: left center;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position 0.5s ease;
}

.client-item:hover .client-text.active {
  background-position: right center;
}
 
        /* 🔥 Floating media */
       .hover-media {
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 280px;

  z-index: 1; /* behind text */
  pointer-events: none;

  opacity: 0.9;
}

        .hover-media img,
        .hover-media video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;