import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../../routes';
import "../serviceMobile.css";
import service2 from "../../../assets/service2.mp4";
function Name() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: window.innerHeight * 0.5, behavior: "smooth" });
  }, []);

  return (
    <div style={{ overflowX: "hidden", position: "relative" }}>
      <style>{`
.video-section {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  background: #ffffff;
  position: relative;
  z-index: 10;
}

html, body {
  overflow-x: hidden;
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}

.scene {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: visible;
}

.marquee-wrapper {
  position: absolute;
  left: 0;
  bottom: -15%;
  width: 100vw;
  height: auto;
  overflow: hidden;
  z-index: 100;
  pointer-events: none;
  padding: 30px 0;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll 15s linear infinite;
  gap: 0;
}

.marquee-text {
  font-size: 8vw;
  font-weight: 900;
  white-space: nowrap;
  padding-right: 8vw;
  color: black;
  line-height: 1.2;
  text-transform: uppercase;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.top-section {
  display: flex;
  width: 100%;
}

.accordion-item:last-child {
  border-bottom: 1px solid #e5e5e5;
}

.left {
  width: 65%;
}

.left h1 {
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.1;
  color: #000;
  padding-top: 150px;
  padding-left: 140px;
  letter-spacing: -1px;
}

.visit {
  margin-top: 40px;
  margin-left: 90px;
  font-size: 24px;
  font-weight: 900;
  padding-left: 50px;
  text-transform: uppercase;
  cursor: pointer;
}

.visit:hover {
  text-decoration: underline;
}

.right {
  width: 30%;
  padding-top: 150px;
  padding-left: 100px;
}

.block {
  margin-bottom: 50px;
}

.block h3 {
  font-size: 29px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}

.block p {
  font-size: 18px;
  margin-top: 8px;
  color: #555;
}

@media (max-width: 900px) {
  .top-section {
    flex-direction: column;
    padding-left: 10px;
  }

  .left,
  .right {
    width: 100%;
    padding: 0;
    margin: 10px;
  }

  .left h1 {
    font-size: 32px;
    padding: 0;
    padding-left: 20px;
    margin-left: 2px;
    line-height: 1.2;
    margin-top: 30px;
  }

  .visit {
    font-size: 18px;
    padding: 0;
    padding-left: 20px;
    margin-top: 20px;
    margin-left: 0;
  }

  .right {
    margin-top:   0px;
    padding-left: 0;
  }

  .block {  
    margin-bottom: 95px;
  }

  .block h3 {
    font-size: 16px;
  }

  .block p {
    font-size: 14px;
  }

  .video-section {
    height: 70vh;
  }

  .video-section .w-\\[500px\\] {
    width: 100% !important;
    height: 200px !important;
  }
}
      `}
      
      </style>

      {/* Video Section */}
      <div className="scene">
      <div className="video-section">
        <div className="w-[500px] h-[200px] overflow-hidden rounded-xl shadow-lg bg-black relative">
          <video
  src={service2}
  autoPlay
  loop
  muted
  playsInline
  style={{
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "absolute",
    top: 0,
    left: 0,
  }}
/>
        </div>

        {/* 🔥 OVERLAY MARQUEE */}
         <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="marquee-text">
              DESIGN AND DEVELOPMENT THAT SCALES DESIGN AND DEVELOPMENT THAT SCALES DESIGN AND DEVELOPMENT THAT SCALES
            </div>
           
          </div>
        </div>
      </div>
      
    </div>
     <div className="top-section">
    
            {/* LEFT */}
            <div className="left">
              <h1>
               We create digital products, websites, and platforms that balance user experience, performance, and long-term growth. Design and development work together from day one, ensuring every decision serves both the user and the technology behind it.
              </h1>
    
    
              <div className="visit" onClick={() => navigate(ROUTES.CONTACT)}>Let's Chat →</div>
            </div>
    
            {/* RIGHT */}
            <div className="right">
              <div className="block">
                <h3>Industry</h3>
                <p>Design / Technology</p>
              </div>
    
              <div className="block">
                <h3>Services</h3>
                <p>Digital Design
UX Flows
Design Toolkits
Web & App Design
Motion & Interaction
Design Systems</p>
              </div>
    
              <div className="block">
                <h3>Year</h3>
                <p>2026</p>
              </div>
            </div>
    
          </div>
    </div>
  );
}

export default Name;