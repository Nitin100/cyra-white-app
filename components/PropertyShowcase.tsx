
import React, { useEffect, useRef, useState } from 'react';

const PropertyShowcaseItem: React.FC<{ prop: any, index: number }> = ({ prop, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={itemRef} className="relative group overflow-hidden border-b border-black/5 bg-white">
      <div className={`w-full h-screen overflow-hidden transition-all duration-[2.5s] ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-115 opacity-0'}`}>
        <img 
          src={prop.image} 
          alt={prop.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30"></div>
      </div>
      
      <div className={`absolute bottom-0 left-0 w-full p-12 md:p-24 transition-all duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}`}>
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h4 className="text-6xl md:text-9xl font-serif mb-6 tracking-tight text-black">{prop.name}</h4>
            <div className="flex items-center gap-6 mb-8">
              <span className="text-[#c5a059] tracking-[0.6em] uppercase text-xs font-bold">{prop.tagline}</span>
              <div className="h-[1px] flex-grow bg-black/5"></div>
            </div>
            
            <div className="flex flex-wrap gap-8 mb-12">
              {prop.features.map((feat: string, fIdx: number) => (
                <div key={fIdx} className="flex items-center gap-3 text-black/40 group/feat">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] group-hover/feat:scale-150 transition-transform"></div>
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold">{feat}</span>
                </div>
              ))}
            </div>
            
            <button className="relative px-16 py-6 bg-transparent border border-black text-black font-bold tracking-[0.4em] uppercase text-[10px] hover:bg-black hover:text-white transition-all duration-500 overflow-hidden">
               Explore Residence
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyShowcase: React.FC = () => {
  const properties = [
    {
      name: "Pinnacle",
      tagline: "Ultra-Luxury Penthouse",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
      features: ["Private Hangar", "Glass Edge Pool", "24/7 Butler"]
    },
    {
      name: "Lumina",
      tagline: "Island Sanctuary",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1200",
      features: ["Marina Access", "Hydro-Spa", "Private Theater"]
    }
  ];

  return (
    <section className="bg-white">
      <div className="space-y-0">
        {properties.map((prop, idx) => (
          <PropertyShowcaseItem key={idx} prop={prop} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default PropertyShowcase;
