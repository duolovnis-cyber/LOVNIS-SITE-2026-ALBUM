import React from 'react';
import { BAND_INFO } from '../data/lovnisData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t-2 border-black text-neutral-800 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <span className="text-4xl font-archivo text-black tracking-tight uppercase block">
              {BAND_INFO.name}
            </span>
            <p className="font-oswald text-sm font-bold tracking-widest text-[#E51B24] uppercase">
              {BAND_INFO.tagline}
            </p>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-md">
              Brazilian psych-rock, Tropicália and 1960s garage/surf music based in Berlin. Debut album recorded with Amanda Longo releasing in September 2026.
            </p>
            <p className="text-xs font-mono-space text-neutral-500 uppercase font-bold">
              IN MEMORY OF AMANDA LONGO
            </p>
          </div>

          {/* Navigation Links (readable sizes) */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-oswald text-sm font-bold uppercase tracking-widest text-[#E51B24] block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-sm sm:text-base font-oswald tracking-wider uppercase text-neutral-700">
              <li>
                <a href="#hero" className="hover:text-[#E51B24] transition-colors">
                  HOME
                </a>
              </li>
              <li>
                <a href="#bio" className="hover:text-[#E51B24] transition-colors">
                  BIO
                </a>
              </li>
              <li>
                <a href="#music" className="hover:text-[#E51B24] transition-colors">
                  MUSIC VIDEOS &amp; LINKS
                </a>
              </li>
              <li>
                <a href="#vinyl-sleeve" className="hover:text-[#E51B24] transition-colors">
                  12&quot; VINYL LP
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-[#E51B24] transition-colors">
                  PRESS HIGHLIGHTS
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E51B24] transition-colors">
                  GALLERY
                </a>
              </li>
              <li>
                <a href="#connect" className="hover:text-[#E51B24] transition-colors">
                  CONNECT &amp; RIDER
                </a>
              </li>
            </ul>
          </div>

          {/* Official Channels from PDF */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-oswald text-sm font-bold uppercase tracking-widest text-[#E51B24] block">
              OFFICIAL LINKS
            </span>
            <ul className="space-y-2.5 text-sm sm:text-base font-oswald tracking-wider uppercase text-neutral-700">
              <li>
                <a
                  href={BAND_INFO.contacts.riderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E51B24] hover:underline font-bold"
                >
                  STAGE RIDER (PDF) &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://duolovnis.wixsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E51B24] transition-colors"
                >
                  EPK / WEBSITE
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/c/LOVNISDUO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E51B24] transition-colors"
                >
                  YOUTUBE CHANNEL
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/search/LOVNIS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E51B24] transition-colors"
                >
                  SPOTIFY
                </a>
              </li>
              <li>
                <a
                  href="https://lovnis.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E51B24] transition-colors"
                >
                  BANDCAMP
                </a>
              </li>
              <li>
                <a
                  href="https://soundcloud.com/lovnis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E51B24] transition-colors"
                >
                  SOUNDCLOUD
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-oswald tracking-wider uppercase text-neutral-600 font-semibold">
          <p>
            © {new Date().getFullYear()} LOVNIS · INDEPENDENT PRODUCTION · BERLIN
          </p>

          <button
            onClick={scrollToTop}
            className="text-black hover:text-[#E51B24] transition-colors tracking-widest font-bold"
          >
            TOP &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
};
