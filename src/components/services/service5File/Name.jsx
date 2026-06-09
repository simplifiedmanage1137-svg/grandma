import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../../routes';
import "../serviceMobile.css";
function Name() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
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
  background: #fff;
  position: relative;
  z-index: 10;
}

html,
body {
  overflow-x: hidden;
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}

.scene {
  position: relative;
  width: 100%;
  overflow: visible;
}

/* KEEPING MARQUEE POSITION AS IT IS */
.marquee-wrapper {
  position: absolute;
  left: 0;
  top: 100%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 100;
  overflow: visible;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll 10s linear infinite;
}

.marquee-text {
  font-size: 8vw;
  font-weight: 900;
  white-space: nowrap;
  padding-right: 5vw;
  color: #000;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* TOP SECTION */

.top-section {
  display: flex;
  width: 100%;
  background: #fff;
}

.left {
  width: 65%;
}

.left h1 {
  margin-top: 50px;
  padding-top: 100px;
  padding-left: 140px;

  font-size: 40px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #000;
}

.visit {
  margin-top: 40px;
  margin-left: 90px;
  padding-left: 50px;

  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
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
  margin: 0;
  font-size: 29px;
  font-weight: 900;
  text-transform: uppercase;
}

.block p {
  margin-top: 8px;
  font-size: 18px;
  color: #555;
  white-space: pre-line;
}
/* TABLET */


/* SMALL MOBILE */

@media (max-width: 900px) {
  .top-section {
    flex-direction: column;
    padding: 0 15px;
  }

  .left,
  .right {
    width: 100%;
    padding: 0;
  }

  .left h1 {
    margin-top: 30px;
    padding: 0;

    font-size: 32px;
    line-height: 1.2;
  }

  .visit {
    margin: 20px 0 0;
    padding: 0;
    font-size: 18px;
  }

  .right {
    margin-top: 30px;
  }

  .block {
    margin-bottom: 30px;
  }

  .block h3 {
    font-size: 16px;
  }

  .block p {
    font-size: 14px;
    line-height: 1.6;
  }

  .marquee-text {
    font-size: 12vw;
  }

  .video-section {
    height: 70vh;
  }
}

@media (max-width: 480px) {
  .left h1 {
    font-size: 24px;
  }

  .visit {
    font-size: 16px;
  }

  .block h3 {
    font-size: 15px;
  }

  .block p {
    font-size: 13px;
  }
}
}
      `}</style>

      <div className="scene">
        <div className="video-section">
          <div className="w-[500px] h-[200px] overflow-hidden rounded-xl shadow-lg bg-black relative">
            <video
              src="https://framerusercontent.com/assets/U9KwtWA1mRYmzzea0QNnivyXUzk.mp4"
              autoPlay loop muted playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
            />
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              <div className="marquee-text">STRATEGY BEFORE EXECUTION STRATEGY BEFORE EXECUTION STRATEGY BEFORE EXECUTION STRATEGY BEFORE EXECUTION</div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-section">
        <div className="left">
          <h1>We help businesses define what they're building, who it's for, and how it gets to market.</h1>
          <div className="visit" onClick={() => navigate(ROUTES.CONTACT)}>Let's Chat →</div>
        </div>
        <div className="right">
          <div className="block"><h3>Industry</h3><p>Strategy / Marketing</p></div>
          <div className="block"><h3>Services</h3><p>Digital Strategy
Information Architecture
Zone Maps & Wireframes
Content Architecture
User Journeys
Product Validation</p></div>
          <div className="block"><h3>Year</h3><p>2025</p></div>
        </div>
      </div>
    </div>
  );
}

export default Name;
