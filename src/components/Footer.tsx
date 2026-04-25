import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0A0A0A] flex flex-col items-center gap-6 px-10 py-12">
      <div className="text-primary-container font-serif font-bold text-xl">
        Habibi Bites
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {['Privacy Policy', 'Contact Us', 'Location', 'Careers'].map((link) => (
          <a
            key={link}
            href="#"
            className="font-serif text-[10px] uppercase tracking-widest text-white/30 hover:text-primary-container transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="font-serif text-[10px] uppercase tracking-widest text-white/30 mt-4">
        © 2024 Habibi Bites. All rights reserved.
      </div>
    </footer>
  );
};
