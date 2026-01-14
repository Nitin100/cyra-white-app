
import React from 'react';

const Footer: React.FC = () => {
  const sections = [
    {
      title: "Residences",
      links: ["Cyra Pinnacle", "Lumina Shores", "The Lumos", "Verve Residences", "Oasis Villas", "Aura Lofts"]
    },
    {
      title: "Collections",
      links: ["Island Estates", "Urban Sanctuaries", "Private Mansions", "Heritage Villas", "Sky Penthouses"]
    },
    {
      title: "Vision",
      links: ["Architecture", "Sustainability", "Innovation", "Craftsmanship", "The Cyra Way"]
    },
    {
      title: "Connect",
      links: ["Contact Us", "Private Inquiry", "Careers", "Media Kit", "Global Presence"]
    }
  ];

  return (
    <footer className="bg-[#fcfcfc] pt-24 pb-12 border-t border-black/5">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {sections.map((sec, idx) => (
            <div key={idx}>
              <h5 className="text-[#c5a059] font-bold tracking-widest uppercase text-xs mb-8">{sec.title}</h5>
              <ul className="space-y-4">
                {sec.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-black/50 text-sm hover:text-black transition-colors font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-col items-center md:items-start">
             <div className="mb-4">
              <span className="text-3xl font-serif tracking-[0.25em] font-bold text-[#c5a059]">CYRA</span>
              <span className="text-[8px] tracking-[0.5em] text-black/40 block -mt-1 text-center font-bold">ESTATES</span>
            </div>
            <p className="text-black/30 text-[10px] tracking-widest uppercase font-bold">© 2024 CYRA ESTATES. ALL RIGHTS RESERVED.</p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-black/30 hover:text-[#c5a059] transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-black/30 hover:text-[#c5a059] transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-black/30 hover:text-[#c5a059] transition-colors"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-black/30 hover:text-[#c5a059] transition-colors"><i className="fab fa-youtube"></i></a>
          </div>

          <div className="flex gap-6 text-[10px] tracking-widest uppercase text-black/30 font-bold">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Living</a>
            <a href="#" className="hover:text-black">Legal</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
