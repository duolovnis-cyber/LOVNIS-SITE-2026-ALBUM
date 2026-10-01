import React from 'react';
import { BAND_INFO } from '../data/lovnisData';
import { ImagePlaceholder } from './ImagePlaceholder';

export const BioSection: React.FC = () => {
  return (
    <section id="bio" className="bg-[#FAFAFA] text-neutral-900 py-20 sm:py-28 px-6 sm:px-12 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header: Black Title, Red Subtitle, Red Accent Line */}
        <div className="border-b-2 border-black pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-sm sm:text-base font-oswald tracking-widest text-[#E51B24] uppercase font-bold block mb-1">
              OFFICIAL BIOGRAPHY · BERLIN
            </span>
            <h2
              id="bio-heading"
              className="text-4xl sm:text-6xl font-archivo text-black tracking-tight uppercase"
            >
              Bio
            </h2>
          </div>
          <span className="text-sm sm:text-base font-oswald tracking-widest text-neutral-600 uppercase font-semibold">
            BRAZILIAN PSYCH-ROCK
          </span>
        </div>

        {/* Narrative & Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story Column - Exact Text from Page 2 of PDF with News Site Reading Flow */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-neutral-800 font-sans">
            <p className="text-xl sm:text-2xl font-medium text-black leading-snug">
              LOVNIS is a Brazilian band based in Berlin, founded by Murilo Sá and Amanda Longo, later expanded with drummer Putti and bassist Bernar Gomma joining the band. Brazilian psych-rock, Tropicália and 1960s garage/surf music are among their influences and sound.
            </p>

            <p className="text-neutral-700 leading-relaxed">
              In Berlin, LOVNIS has played at classic venues such as <strong>SO36</strong>, <strong>Lido</strong>, <strong>Kantine am Berghain</strong> and <strong>Schokoladen</strong>. They have supported international acts such as <strong>The Courettes</strong>, <strong>The Shivas</strong> and <strong>Ana Frango Elétrico</strong>. The band records and produces its material independently, including artwork and videos.
            </p>

            <p className="text-neutral-700 leading-relaxed">
              In August 2024 LOVNIS released <em>&quot;Running Out of Luck&quot;</em>, their first single in English. After the tragic death of co-founder Amanda Longo in a car accident, the band decided to continue with Murilo, Bernar and Putti. The debut album recorded with Amanda will be released on <strong className="text-[#E51B24]">September 2026</strong>.
            </p>

            {/* Stages & Shared Acts */}
            <div className="pt-8 border-t-2 border-[#E51B24] space-y-4">
              <span className="text-sm font-oswald tracking-widest uppercase font-bold text-[#E51B24] block">
                BERLIN STAGES &amp; INTERNATIONAL LINEAGE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white border-2 border-neutral-200 p-5 shadow-xs">
                  <span className="text-xs sm:text-sm font-oswald text-[#E51B24] font-bold block uppercase mb-1.5">
                    VENUES PLAYED
                  </span>
                  <span className="text-base font-sans font-semibold text-black leading-snug block">
                    SO36 · Lido · Kantine am Berghain · Schokoladen
                  </span>
                </div>
                <div className="bg-white border-2 border-neutral-200 p-5 shadow-xs">
                  <span className="text-xs sm:text-sm font-oswald text-[#E51B24] font-bold block uppercase mb-1.5">
                    SUPPORTED ACTS
                  </span>
                  <span className="text-base font-sans font-semibold text-black leading-snug block">
                    The Courettes · The Shivas · Ana Frango Elétrico
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In Memoriam & Debut Album */}
          <div className="lg:col-span-5 space-y-8">
            {/* In Memoriam Card */}
            <div className="bg-white border-2 border-black p-7 sm:p-9 shadow-sm space-y-5">
              <span className="text-xs sm:text-sm font-oswald font-bold tracking-widest text-[#E51B24] uppercase block">
                IN MEMORIAM
              </span>

              <div className="flex gap-5 items-center">
                <div className="w-28 h-28 shrink-0 bg-neutral-100 border border-black overflow-hidden">
                  <ImagePlaceholder
                    label="PHOTO"
                    sublabel="Amanda Longo"
                    aspect="aspect-square"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-archivo text-black uppercase">
                    Amanda Longo
                  </h3>
                  <p className="text-sm font-sans text-neutral-600 mt-1 font-medium">
                    Co-founder, Vocals, Guitars, Art &amp; Concept
                  </p>
                  <span className="text-xs sm:text-sm font-mono-space text-[#E51B24] font-bold block mt-1">
                    (1987 — 2024)
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-neutral-800 italic border-l-4 border-[#E51B24] pl-4 py-1 leading-relaxed">
                &quot;{BAND_INFO.memorial.tributeText}&quot;
              </p>
            </div>

            {/* Debut Album Card */}
            <div className="bg-white border-2 border-black p-7 sm:p-9 shadow-sm space-y-3">
              <span className="text-xs sm:text-sm font-oswald font-bold tracking-widest text-[#E51B24] uppercase block">
                DEBUT LP · SEPTEMBER 2026
              </span>
              <h3 className="text-2xl sm:text-3xl font-archivo uppercase text-black">
                LOVNIS 12&quot; VINYL
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Recorded in Berlin with co-founder Amanda Longo, the debut LP captures LOVNIS with Brazilian psych-rock, Tropicália, and 1960s garage/surf sounds.
              </p>
              <div className="pt-3">
                <a
                  href="#vinyl-sleeve"
                  className="text-sm font-oswald font-bold uppercase tracking-wider text-[#E51B24] hover:text-black transition-colors inline-flex items-center gap-1"
                >
                  <span>EXPLORE TRACKLIST &amp; LINER NOTES</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
