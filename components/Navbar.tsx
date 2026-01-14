
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Background Shadow Overlay for Header Contrast */}
      <div className={`fixed top-0 left-0 w-full h-32 z-[98] pointer-events-none transition-opacity duration-700 header-shadow-overlay ${scrolled || isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>

      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'} ${scrolled ? 'border-b border-black/5' : 'border-b border-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-3">
            
            <div className="flex items-center">
              <div className={`hidden lg:flex items-center gap-8 ${scrolled || isMenuOpen ? 'text-black' : 'text-white'}`}>
                <a href="#" className="nav-link relative text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[#c5a059] transition-colors">Vision</a>
                <a href="#" className="nav-link relative text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[#c5a059] transition-colors">Portfolios</a>
                <a href="#" className="nav-link relative text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[#c5a059] transition-colors">Residences</a>
              </div>
              
              <button 
                className={`lg:hidden p-2 -ml-2 hover:text-[#c5a059] transition-colors ${scrolled || isMenuOpen ? 'text-black' : 'text-white'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>

            <div className={`flex justify-center transition-colors duration-500`}>
              <a href="/" className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-serif tracking-[0.25em] font-bold leading-none text-[#c5a059]">CYRA</span>
                <span className={`text-[8px] md:text-[10px] tracking-[0.5em] font-light mt-1 ${scrolled || isMenuOpen ? 'text-black/40' : 'text-white/60'}`}>ESTATES</span>
              </a>
            </div>

            <div className={`flex items-center justify-end gap-6 ${scrolled || isMenuOpen ? 'text-black' : 'text-white'}`}>
              <div className="hidden lg:flex items-center gap-8 mr-8">
                <a href="#" className="nav-link relative text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[#c5a059] transition-colors">Journal</a>
                <a href="#" className="nav-link relative text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[#c5a059] transition-colors">Inquire</a>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="hover:text-[#c5a059] transition-colors">
                  <i className="fas fa-search text-sm"></i>
                </button>
                <div className={`hidden md:flex items-center gap-2 border-l pl-4 cursor-pointer hover:text-[#c5a059] transition-colors ${scrolled || isMenuOpen ? 'border-black/10' : 'border-white/20'}`}>
                  <i className="fas fa-globe text-[10px]"></i>
                  <span className="text-[10px] font-bold tracking-widest">EN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className={`lg:hidden fixed inset-0 bg-white z-[99] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 px-6 text-black">
          {['Our Vision', 'The Portfolio', 'Luxury Residences', 'Media Journal', 'Careers', 'Inquire Now'].map((item, idx) => (
            <a 
              key={item} 
              href="#" 
              className={`text-2xl md:text-4xl font-serif tracking-widest hover:text-[#c5a059] transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-8 mt-12">
             <a href="#" className="text-black/40 hover:text-black transition-colors"><i className="fab fa-instagram text-xl"></i></a>
             <a href="#" className="text-black/40 hover:text-black transition-colors"><i className="fab fa-facebook-f text-xl"></i></a>
             <a href="#" className="text-black/40 hover:text-black transition-colors"><i className="fab fa-linkedin-in text-xl"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
