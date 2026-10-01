import React from 'react';
import { Disc, Play } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface HeroProps {
  onOpenVideo: (videoId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo }) => {
  return (
    <section id="hero" className="bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Direct from Page 1 & 2 of PDF */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subtitle in RED */}
            <span className="text-sm sm:text-base font-oswald font-semibold tracking-widest text-[#E51B24] uppercase mb-2 block">
              Brazilian Psych-Rock · Berlin
            </span>

            {/* Title in BLACK */}
            <h1
              id="hero-title"
              className="text-5xl sm:text-7xl lg:text-8xl font-archivo font-black text-black tracking-tight leading-[0.95] mb-6 uppercase"
            >
              LOVNIS
            </h1>

            {/* Lead Narrative directly from Page 2 of PDF */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6 font-normal">
              A Brazilian band based in Berlin, founded by <strong>Murilo Sá</strong> and <strong>Amanda Longo</strong>, later expanded with drummer <strong>Putti</strong> and bassist <strong>Bernar Gomma</strong>. Brazilian psych-rock, Tropicália and 1960s garage/surf music are among their influences and sound.
            </p>

            {/* Release Notice with RED detail line & RED subtitle */}
            <div className="border-l-4 border-[#E51B24] pl-4 py-1 mb-8">
              <span className="text-xs font-oswald uppercase tracking-widest text-[#E51B24] block font-bold">
                OFFICIAL DEBUT ALBUM
              </span>
              <p className="text-sm sm:text-base text-neutral-800 font-medium mt-0.5">
                Recorded in Berlin with Amanda Longo. Release in <strong>September 2026</strong>.
              </p>
            </div>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                id="hero-vinyl-cta"
                href="#vinyl-sleeve"
                className="inline-flex items-center gap-2.5 bg-black hover:bg-[#E51B24] text-white px-7 py-3.5 text-xs sm:text-sm font-oswald font-bold tracking-widest uppercase transition-colors"
              >
                <Disc className="w-4 h-4" />
                <span>12&quot; VINYL &amp; TRACKLIST</span>
              </a>

              <button
                id="hero-video-cta"
                onClick={() => onOpenVideo('filme-de-terror')}
                className="inline-flex items-center gap-2.5 border-2 border-black hover:border-[#E51B24] hover:text-[#E51B24] text-black px-6 py-3 text-xs sm:text-sm font-oswald font-bold tracking-widest uppercase transition-colors"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>WATCH VIDEOS</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Photo Placeholder */}
          <div className="lg:col-span-6">
            <div className="relative border-2 border-black bg-white p-2 shadow-sm">
              <ImagePlaceholder
                label="OFFICIAL BAND PHOTO"
                sublabel="MURILO SÁ · AMANDA LONGO · PUTTI · BERNAR GOMMA (BERLIN)"
                aspect="aspect-[4/3]"
              />
              <div className="bg-white pt-3 pb-2 px-3 flex items-center justify-between border-t border-neutral-200">
                <div className="text-xs sm:text-sm font-oswald font-bold tracking-wider text-black uppercase">
                  MURILO SÁ · AMANDA LONGO · PUTTI · BERNAR GOMMA
                </div>
                <span className="text-xs font-mono-space text-neutral-500 font-bold">
                  BERLIN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
