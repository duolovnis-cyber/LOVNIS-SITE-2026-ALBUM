import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { BAND_INFO } from '../data/lovnisData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'BIO', href: '#bio' },
    { name: 'MUSIC & VIDEOS', href: '#music' },
    { name: '12" VINYL LP', href: '#vinyl-sleeve' },
    { name: 'PRESS', href: '#press' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONNECT', href: '#connect' },
  ];

  return (
    <header
      id="main-navigation"
      className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Brand Name & Tagline directly from Page 1 of PDF */}
        <a
          id="nav-logo"
          href="#"
          className="flex items-center gap-3 group select-none"
          aria-label="LOVNIS"
        >
          <span className="text-3xl sm:text-4xl font-archivo uppercase tracking-tight text-black group-hover:text-[#E51B24] transition-colors">
            LOVNIS
          </span>
          <span className="hidden sm:inline-block h-6 w-px bg-[#E51B24] mx-1" />
          <span className="hidden sm:inline-block text-xs sm:text-sm font-oswald text-[#E51B24] font-semibold tracking-wider uppercase">
            Brazilian Psych-Rock · Berlin
          </span>
        </a>

        {/* Desktop Navigation Links - Clear, readable sizes (14px) */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-oswald font-semibold tracking-wider text-neutral-800 hover:text-[#E51B24] transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Clean Stage Rider CTA directly from PDF */}
        <div className="hidden md:flex items-center">
          <a
            id="nav-rider-cta"
            href={BAND_INFO.contacts.riderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-black hover:border-[#E51B24] hover:bg-[#E51B24] hover:text-white text-black px-4 py-2 text-xs font-oswald font-bold tracking-widest uppercase transition-colors"
          >
            <span>STAGE RIDER</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:text-[#E51B24]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-black px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-4 font-oswald text-base font-bold tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-800 hover:text-[#E51B24] transition-colors py-1 border-b border-neutral-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={BAND_INFO.contacts.riderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-black hover:bg-[#E51B24] text-white py-3 text-xs font-oswald font-bold tracking-widest uppercase transition-colors"
            >
              OPEN STAGE RIDER (PDF) &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
