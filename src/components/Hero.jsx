import React, { useState, useEffect, useRef } from 'react';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image8 from "../assets/image8.png";
import image10 from "../assets/image10.png";
import grandmahivespng from "../assets/grandmahivespng.png";




const Hero = () => {
  const [imagesTrail, setImagesTrail] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const containerRef = useRef(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const currentIndex = useRef(0);

  const MOVE_THRESHOLD = 50;

  const imageDatabase = [
       
      image1,
      image3,
      // image4,
      // image5,
      image6,
      image8,
      image10,
    // 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=400&fit=crop',
    // 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    // 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=400&fit=crop',
    // 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
    // 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
    // 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400&h=400&fit=crop',
    // 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
  ];
useEffect(() => {
  imageDatabase.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, []);
  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Handle adding trail image
  const addTrailImage = (x, y) => {
    const imageSrc = imageDatabase[currentIndex.current];
    currentIndex.current = (currentIndex.current + 1) % imageDatabase.length;

    const newImage = {
      id: Date.now() + Math.random(),
      src: imageSrc,
      x,
      y,
      rotation: Math.random() * 14 - 7,
    };

    setImagesTrail((prev) => [...prev, newImage]);

    setTimeout(() => {
      setImagesTrail((prev) => prev.filter((img) => img.id !== newImage.id));
    }, 1000);
  };

  // Throttled mouse/touch move handler
  const handleMove = (clientX, clientY) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Check boundaries
    if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

    const dx = x - lastPosition.current.x;
    const dy = y - lastPosition.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < MOVE_THRESHOLD) return;

    lastPosition.current = { x, y };
    addTrailImage(x, y);
  };

  // Mouse event handlers (desktop only)
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      if (!isHovering) return;
      handleMove(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering, isTouchDevice]);

  // Touch event handlers for mobile
  useEffect(() => {
    if (!isTouchDevice) return;

   const handleTouchStart = (e) => {
  const touch = e.touches[0];
  if (!touch) return;

  lastPosition.current = { x: 0, y: 0 };

  // DON'T instantly activate hover state
  // only activate when movement starts
};

 const handleTouchMove = (e) => {
  const touch = e.touches[0];
  if (!touch) return;

  if (!isHovering) {
    setIsHovering(true);
  }

  requestAnimationFrame(() => {
    handleMove(touch.clientX, touch.clientY);
  });
};

    const handleTouchEnd = () => {
      setIsHovering(false);
      setImagesTrail([]);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
      container.addEventListener('touchend', handleTouchEnd);
      container.addEventListener('touchcancel', handleTouchEnd);
      
      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
        container.removeEventListener('touchcancel', handleTouchEnd);
      };
    }
  }, [isTouchDevice, isHovering]);



  return (
    <>
      <div
        className="hero"
        ref={containerRef}
        onMouseEnter={() => !isTouchDevice && setIsHovering(true)}
        onMouseLeave={() => !isTouchDevice && setIsHovering(false)}
      >
       <div className="logo-layer">
  <img
    src={grandmahivespng}
    alt="Grandma's Hive"
    className="hero-logo"
  />
</div>

        <div className="trail-layer">
          {imagesTrail.map((img) => (
            <div
              key={img.id}
              className="trail-img-box"
              style={{
                left: img.x,
                top: img.y,
                transform: `translate(-50%, -50%) rotate(${img.rotation}deg)`
              }}
            >
              <img src={img.src} alt="Portfolio Work" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Marquee overlay - Mobile Only */}
        <div className="hero-marquee-wrapper">
          <div className="hero-marquee-track">
            <div className="hero-marquee-text">MAKE LOVE MAKE LOVE MAKE LOVE MAKE LOVE</div>
            <div className="hero-marquee-text">MAKE LOVE MAKE LOVE MAKE LOVE MAKE LOVE</div>
          </div>
        </div>
      </div>

      {/* Mobile instruction text */}
      {isTouchDevice && (
        <div className="mobile-instruction">
          👆 Touch and drag on the screen above to see images
        </div>
      )}

      <div className="sub-text-section">
        <div className="sub-text-content">
          <p className="description-wave">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  The brands people notice aren't louder.
  They're built better from day one.<br/>&nbsp;&nbsp;
  <br /><br />

  <span className="cta-text">
    
  </span>
</p>
        </div>
      </div>

      <style>{`
@media (max-width: 768px) {
  .description-wave {
    white-space: normal;
    text-indent: 0;
    padding: 0;
    margin: 0;
    text-align: left;
    line-height: 1.6;
  }

  .description-wave br {
    display: none;
  }
}
      .logo-layer {
  position: relative;
  z-index: 50;
  pointer-events: none;
}

.hero-logo {
padding-top:200px;
  width: min(95vw, 1600px);
  height: auto;
  display: block;
}

      .hero {
  touch-action: pan-y pinch-zoom;
}
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          background: #fff; 
          overflow: visible;
          cursor: crosshair;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero {
  overscroll-behavior: auto;
}
        @media (max-width: 768px) {
  .hero {
    height: 100dvh; /* better for mobile */
  }
}

@media (max-width: 768px) {
  .scrolling-text-container-with-bg {
    display: none !important;
  }
}

        /* Touch device adjustments */
        @media (hover: none) and (pointer: coarse) {
          .hero {
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            height: 50dvh; /* use dynamic viewport height on mobile */
          }
        }

        .text-layer {
          position: relative;
          z-index: 50; 
          pointer-events: none;
          text-align: center;
        }

        .hero-title {
         "Lay Grotesk - Trial Medium", "Lay Grotesk - Trial Medium Placeholder", sans-serif;
          font-weight: 900;
          font-size: 14vw;
          line-height: 0.9;
          margin: 0;
          color: #111;
          display: flex;
          justify-content: center;
        }

        .pixels {
          color: transparent;
          -webkit-text-stroke: 1.5px #111;
        }

        /* Mobile instruction text */
        .mobile-instruction {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          z-index: 1000;
          pointer-events: none;
          white-space: nowrap;
        "Lay Grotesk - Trial Medium", "Lay Grotesk - Trial Medium Placeholder", sans-serif;
          animation: fadeOut 3s ease-out forwards;
        }

        @keyframes fadeOut {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 14vw;
          }
        }

        @media (max-width: 480px) {
          .pixels {
            -webkit-text-stroke: 1px #111;
          }
        }

        /* --- WATER WAVE ANIMATION CORE --- */
        .wave-char {
          display: inline-block;
          animation: waterWave 3s ease-in-out infinite;
          animation-delay: calc(var(--idx) * 0.1s);
          transform-origin: center bottom;
        }

        @keyframes waterWave {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(2deg) scaleX(1.05);
          }
          66% {
            transform: translateY(10px) rotate(-2deg) scaleX(0.95);
          }
        }

        @media (max-width: 768px) {
          @keyframes waterWave {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            33% {
              transform: translateY(-8px) rotate(1deg) scaleX(1.03);
            }
            66% {
              transform: translateY(6px) rotate(-1deg) scaleX(0.97);
            }
          }
        }

        .trail-layer {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
        }

        .trail-img-box {
          position: absolute;
          width: 300px;
          height: 200px;
          object-fit: contain;
  background: transparent;
        }

        .trail-img-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
           background: transparent;   
        }

        @keyframes fadePop {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.1); }
        }

        /* Responsive trail images */
        @media (max-width: 768px) {
          .trail-img-box {
            width: 180px;
            height: 120px;
          }
        }

        @media (max-width: 480px) {
          .trail-img-box {
            width: 140px;
            height: 93px;
          }
        }

        /* Description Wave Styles */
        .sub-text-section {
          padding: 10px 10px;
          background: #fff;
          overflow: visible;
        }

        .description-wave {
        "Lay Grotesk - Trial Medium", "Lay Grotesk - Trial Medium Placeholder", sans-serif;
          font-size: 3.5vw;
          line-height: 1.3;
          font-weight: 500;
          color: #222;
          max-width: 100%;

        }
          .description-wavep{
         "Lay Grotesk - Trial Medium", "Lay Grotesk - Trial Medium Placeholder", sans-serif;
          font-size: 2vw;
          line-height: 1.3;
          font-weight: 500;
          color: #222;
          max-width: 100%;
          
          }

        .description-wave .wave-char {
          animation-duration: 5s;
          animation-delay: calc(var(--idx) * 0.05s);
        }

        @media (max-width: 768px) {
          .sub-text-section {
            padding: 60px 30px;
          }
          .description-wave {
            font-size: 24px;
            max-width: 100%;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .description-wave {
            font-size: 3vw;
          }
        }

        /* Important: Ensure touch events work properly */

        @media (hover: none) and (pointer: coarse) {
  .hero {
    touch-action: pan-y; /* allows vertical scroll */
  }
}
        .hero {
        
          user-select: none; /* Prevents text selection on mobile */
          -webkit-user-select: none;
        }
          @media (max-width: 768px) {
  .hero {
    cursor: default; /* or pointer */
  }
}
  

        @media (prefers-reduced-motion: reduce) {
          .wave-char {
            animation: none;
          }
          .trail-img-box {
            animation: fadePop 0.5s ease-out forwards;
          }
        }

        /* Hero Marquee Overlay - Mobile Only */
        .hero-marquee-wrapper {
          display: none;
        }

        @media (max-width: 900px) {
          .hero-marquee-wrapper {
            display: block;
            position: absolute;
            left: 0;
            bottom: -20%;
            width: 100%;
            overflow: hidden;
            z-index: 100;
            pointer-events: none;
          }

          .hero-marquee-track {
            display: none;
            width: max-content;
            animation: heroMarqueeScroll 25s linear infinite;
            will-change: transform;
          }

          .hero-marquee-text {
            font-size: 14vw;
            font-weight: 900;
            white-space: nowrap;
            padding-right: 10vw;
            color: black;
            line-height: 1;
            text-transform: uppercase;
            display: inline-block;
          }

          @keyframes heroMarqueeScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        }
      `}</style>
    </>
  );
};

export default Hero;