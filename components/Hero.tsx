
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseScale = 1.1;
  const zoomFactor = baseScale + (scrollY * 0.0001); 
  const blurFactor = scrollY * 0.01;
  const opacityFactor = 1 - (scrollY * 0.001);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ 
          transform: `scale(${Math.max(1, zoomFactor)})`,
          filter: `blur(${Math.min(10, blurFactor)}px)`,
          opacity: Math.max(0.4, opacityFactor),
          transition: 'transform 0.1s linear'
        }}
      >
        <img 
          src="/media/banner-1.png" 
          alt="CYRA Luxury Living" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 luxury-gradient-whites"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="overflow-hidden mb-2">
          <h2 className="text-black/60 text-lg tracking-[0.5em] font-medium uppercase animate-[revealText_1s_ease-out_forwards]">
            THE CYRA COLLECTION
          </h2>
        </div>
        
        <div className="overflow-hidden mb-8">
          <h1 className="text-black text-5xl md:text-9xl font-serif leading-tight animate-[revealText_1.2s_ease-out_0.2s_forwards]">
            Elegance in Every <br/><span className="italic text-[#c5a059]">Curve</span>
          </h1>
        </div>
        
        <div className="flex flex-col items-center gap-6 opacity-0 animate-[fadeIn_1.5s_ease-out_1s_forwards]">
          <button className="group flex flex-col items-center gap-4">
            <span className="text-black text-[30px] tracking-[0.5em] font-bold uppercase group-hover:text-[#c5a059] transition-colors">Enter Cyra</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#c5a059] to-transparent group-hover:h-28 transition-all duration-700"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes revealText {
          from { transform: translateY(110%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
