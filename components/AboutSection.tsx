
import React, { useEffect, useRef, useState } from 'react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          <div className="w-full lg:w-1/2 relative group">
            <div className={`image-zoom-reveal ${isVisible ? 'revealed' : ''} overflow-hidden`}>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#c5a059] opacity-40 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1000" 
                alt="CYRA Design Philosophy" 
                className={`w-full h-auto transition-all duration-[2.5s] ${isVisible ? 'grayscale-0' : 'grayscale-100'}`}
              />
            </div>
          </div>

          <div className={`w-full lg:w-1/2 reveal-hidden ${isVisible ? 'reveal-visible' : ''} space-y-8`}>
            <div>
              <h2 className="text-[#c5a059] text-xs tracking-[0.6em] uppercase mb-4 font-bold flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#c5a059]"></span>
                The Essence of Luxury
              </h2>
              <h3 className="text-4xl md:text-7xl font-serif mb-8 leading-[1.1] text-black">
                Redefining Modern <br/>
                <span className="text-black/20">Aesthetics.</span>
              </h3>
            </div>
            
            <p className="text-black/50 text-xl leading-relaxed max-w-xl font-light">
              At CYRA Luxury Homes, we believe that true architectural beauty is born from the harmony between structure and surroundings. We create spaces that breathe, inspire, and endure.
            </p>
            
            <div className="pt-6">
              <button className="group relative overflow-hidden px-12 py-5 border border-[#c5a059] text-black tracking-[0.3em] uppercase text-[10px] font-bold">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Explore The Vision</span>
                <div className="absolute inset-0 bg-[#c5a059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
