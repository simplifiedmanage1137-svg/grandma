
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../../routes';
import "../serviceMobile.css";
import service3 from "../../../assets/service3.mp4";
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
  overflow: visible; /* allows marquee to extend */
  background: #ffffff;
  position: relative;
  z-index: 10;
}
html, body {
  overflow-x: hidden;
  scrollbar-width: none; /* Firefox */
}

body::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.scene {
  position: relative;

  min-height: 100vh;  /* ✅ better than height */
  width: 100%;

  overflow: visible;
}
.marquee-wrapper {
  position: absolute;
  left: 0;
  top: 100%;              /* video ke bottom pe le jao */
  transform: translateY(-50%);  /* half upar kheecho */
  width: 100%;
  z-index: 100;
  overflow:visible; /* text ke overflow ko allow karo */
}
  .marquee-track {
  display: flex;
  width: max-content;
  animation: scroll 10s linear infinite;
   overflow:visible; /* text ke overflow ko allow karo */

}
  
       .marquee-text {
  font-size: 8vw;
  font-weight: 900;
  white-space: nowrap;
  padding-right: 5vw;
  color: black;
   overflow:visible; /* text ke overflow ko allow karo */

  position: relative;
  z-index: 10;

 
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
          padding-top: 100px;
          padding-left:140px;
          letter-spacing: -1px;
          margin-top: 50px;
        }

        

        .visit {
        
          margin-top: 40px;
          font-size: 24px;
          font-weight: 900;
          padding-left:50px;
            margin-left: 90px;
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

  /* 🔥 STACK LEFT + RIGHT */
  .top-section {
    flex-direction: column;
    padding-left: 10px;
  }

  .left,
  .right {
    width: 100%;
    padding: 0;
  }

  /* 🔥 FIX TEXT SIZE */
  .left h1 {
    font-size: 32px;
    padding: 0;
    line-height: 1.2;
    margin-left:1px;

  }

  .visit {
    font-size: 18px;
    padding: 0;
    margin-top: 20px;
    margin-left: 0;
  }

  /* 🔥 RIGHT SECTION CLEAN STACK */
  .right {
    margin-top: 30px;
    padding-left: 0;
  }

  .block {
    margin-bottom: 25px;
  }

  .block h3 {
    font-size: 16px;
  }

  .block p {
    font-size: 14px;
  }

  /* 🔥 VIDEO FIX */
  .video-section {
    height: 70vh;
  }

  .video-section .w-\\[500px\\] {
    width: 100% !important;
    height: 200px !important;
  }

  /* 🔥 MARQUEE TEXT SIZE */
  .marquee-text {
    font-size: 12vw;
  }

}
      `}
      
      </style>

      {/* Video Section */}
      <div className="scene">
      <div className="video-section">
        <div className="w-[500px] h-[200px] overflow-hidden rounded-xl shadow-lg bg-black relative">
          <video
            src={service3}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
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
            CONTENT BUILT TO MOVE CONTENT BUILT TO MOVE CONTENT BUILT TO MOVE CONTENT BUILT TO MOVE
            </div>
           
          </div>
        </div>
      </div>
      
    </div>
     <div className="top-section">
    
            {/* LEFT */}
            <div className="left">
              <h1>
From podcasts and video to motion graphics and campaign assets, we create the content brands need to communicate consistently and professionally. Planning, production, editing, and delivery — all under one roof.
              </h1>
    
    
              <div className="visit" onClick={() => navigate(ROUTES.CONTACT)}>Let's Chat →</div>
            </div>
    
            {/* RIGHT */}
            <div className="right">
              <div className="block">
                <h3>Industry</h3>
                <p>Content / Media</p>
              </div>
    
              <div className="block">
                <h3>Services</h3>
                <p>Podcast Production
Video Production
Motion Graphics
Content Production
Creative Direction
Asset Management  </p>
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