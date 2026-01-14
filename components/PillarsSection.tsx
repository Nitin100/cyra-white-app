
import React, { useEffect, useRef, useState } from 'react';

const Pillars: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      title: 'Precision Build',
      desc: 'CYRA demands absolute precision in every foundation. We select only the most resilient materials to ensure that every residence stands as a testament to engineering excellence.',
      image: '/media/cyra-property-image-1.png'
    },
    {
      title: 'Iconic Design',
      desc: 'CYRA architecture transcends conventional boundaries. Our designs are bespoke sculptures that prioritize natural light, expansive layouts, and seamless indoor-outdoor living.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Elite Quality',
      desc: 'Our commitment to excellence is unwavering. Every CYRA home undergoes rigorous aesthetic and structural audits to meet the highest global standards of luxury.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white py-32 border-y border-black/5">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-24 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-[#c5a059] mb-4 font-bold">Our Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-black">The Pillars of CYRA</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={`group cursor-pointer reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="overflow-hidden mb-10 h-[450px] relative rounded-sm shadow-sm">
                <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-all duration-700"></div>
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2s] ease-out"
                />
                <div className="absolute top-8 left-8 z-20">
                  <span className="text-4xl font-serif text-white italic drop-shadow-lg group-hover:text-[#c5a059] transition-colors duration-500">0{idx + 1}</span>
                </div>
              </div>
              <h4 className="text-2xl font-serif mb-6 text-black group-hover:text-[#c5a059] transition-colors duration-500 flex items-center gap-4">
                {pillar.title}
                <div className="h-[1px] w-0 bg-[#c5a059] group-hover:w-12 transition-all duration-500"></div>
              </h4>
              <p className="text-black/50 leading-relaxed text-sm font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
