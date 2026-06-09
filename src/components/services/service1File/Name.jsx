import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../../routes';
import "../serviceMobile.css";
import ThreeDM from "../../../assets/ThreeDM.mp4";
import service3 from "../../../assets/service3.png";



function Name() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: window.innerHeight * 0.2, behavior: "smooth" });
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
  background: #e5e5e5;
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
          font-size: 30px;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.1;
          color: #000;
          padding-top: 100px;
          padding-left:150px;
          letter-spacing: -1px;
          margin-left:1px;
        }

        

        .visit {
          margin-top: 40px;
          font-size: 24px;
          font-weight: 900;
          padding-left:60px;
          margin-left: 90px;


          text-transform: uppercase;
          cursor: pointer;
        }

        .visit:hover {
          text-decoration: underline;
        }

        .right {
          width: 30%;
          padding-top: 100px;
          padding-left: 100px;
        }

        .block {
          margin-bottom: 50px;
        }

        .block h3 {
          font-size: 20px;
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

  /* overall spacing */
  .scene {
    min-height: auto;
  }

  /* VIDEO SECTION */
 .video-section {
    height: auto;
    min-height: 120vh;
    padding: 0;
    margin-bottom: 2px;
    
    
  }

  /* ✅ FIXED VIDEO HEIGHT */
  .video-box {
    width: 100% !important;
    height: 35vh !important;   /* 🔥 increase here */
   
 
  }

  .video-box video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* MARQUEE */
  .marquee-wrapper {
    top: 100%;
    transform: translateY(-35%);
  }

  .marquee-text {
    font-size: 14vw;
    padding-right: 20px;
    line-height: 0.9;
  }

  /* STACK CONTENT */
  .top-section {
    flex-direction: column;
    padding: 5px 20px 0;
    gap: 40px;
  }

  .left,
  .right {
    width: 100%;
    padding: 0;
  }

  /* LEFT TEXT */
  .left h1 {
    font-size: 18px;
    line-height: 1.25;
    padding: 0;
    margin-left:1px;
    letter-spacing: -0.5px;
  }

  .visit {
    font-size: 16px;
    padding: 0;
    margin-top: 2px;
  }

  /* RIGHT INFO */
  .right {
    margin-top: 10px;
  }

  .block {
    margin-bottom: 22px;
  }

  .block h3 {
    font-size: 15px;
  }

  .block p {
    font-size: 14px;
    margin-top: 6px;
  }
}
      `}
      
      </style>

      {/* Video Section */}
      <div className="scene">
      <div className="video-section">
       <div className="video-box overflow-hidden rounded-xl shadow-lg bg-black relative">
          <img
            src={service3}
            // autoPlay
            // loop
            // muted
            // playsInline
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
             GTM OS GTM OS GTM OS GTM OS GTM OS GTM OS GTM OS GTM OS GTM OS GTM OS GTM OS
            </div>
         
          </div>
        </div>
      </div>
      
    </div>
     <div className="top-section">
    
            {/* LEFT */}
            <div className="left">
              <h1>
               GAANDIVA DELIVERS A POWERFUL CUSTOMER RELATIONSHIP MANAGEMENT PLATFORM THAT HELPS ORGANIZATIONS CENTRALIZE CUSTOMER DATA, IMPROVE SALES PERFORMANCE, AND DRIVE BUSINESS GROWTH.
              </h1>
    
    
              <div className="visit" onClick={() => navigate(ROUTES.CONTACT)}>Let's Chat →</div>
            </div>
    
            {/* RIGHT */}
            <div className="right">
              <div className="block">
                <h3>Industry</h3>
                <p>Delivery Services / Technology</p>
              </div>
    
              <div className="block">
                <h3>Services</h3>
                <p>Development & QA</p>
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