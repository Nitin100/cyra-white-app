
import React, { useEffect, useRef, useState } from 'react';

const NewsSection: React.FC = () => {
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

  const news = [
    {
      title: "CYRA Announces the Launch of Lumina: The Future of Island Living",
      date: "14 Nov 2024",
      image: "https://images.unsplash.com/photo-1549517045-bc93de075e53?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Sustainable Luxury: How CYRA is Revolutionizing Carbon-Neutral Estates",
      date: "24 Oct 2024",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "CYRA Pinnacle Awarded Best Global Architectural Achievement 2024",
      date: "12 Oct 2024",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white py-24 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className={`flex items-end justify-between mb-16 transition-all duration-[1.2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="text-[#c5a059] text-sm tracking-[0.4em] uppercase mb-4 font-bold">The Journal</h2>
            <h3 className="text-4xl font-serif text-black">Global Updates</h3>
          </div>
          <button className="hidden md:block text-sm tracking-[0.2em] uppercase border-b border-[#c5a059] pb-1 hover:text-[#c5a059] transition-colors text-black font-bold">
            Read The Full Journal
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {news.map((item, idx) => (
            <div 
              key={idx} 
              className={`group transition-all duration-[1.5s] ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="overflow-hidden mb-6 aspect-[4/3] rounded-sm shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2s]"
                />
              </div>
              <p className="text-[#c5a059] text-[10px] tracking-widest uppercase mb-3 font-bold">{item.date}</p>
              <h4 className="text-xl font-serif leading-snug text-black group-hover:text-[#c5a059] transition-colors">{item.title}</h4>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <button className="text-sm tracking-[0.2em] uppercase border-b border-[#c5a059] pb-1 text-black font-bold">View All Articles</button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
