
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PillarsSection from './components/PillarsSection';
import PropertyShowcase from './components/PropertyShowcase';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#c5a059] selection:text-white">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <AboutSection />
        <PillarsSection />
        <PropertyShowcase />
        <NewsSection />
      </main>

      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <button className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform active:scale-95">
          <i className="fab fa-whatsapp text-2xl"></i>
        </button>
        <button className="w-14 h-14 bg-[#c5a059] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform active:scale-95">
          <i className="fas fa-phone text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
