import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { PRESS_HIGHLIGHTS } from '../data/lovnisData';
import { PressItem } from '../types';

export const PressSection: React.FC = () => {
  const [selectedPress, setSelectedPress] = useState<PressItem | null>(null);

  return (
    <section id="press" className="bg-[#FAFAFA] text-neutral-900 py-20 sm:py-28 px-6 sm:px-12 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header: Black Title, Red Subtitle */}
        <div className="border-b-2 border-black pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-sm sm:text-base font-oswald tracking-widest text-[#E51B24] uppercase font-bold block mb-1">
              CLIPPINGS &amp; PRESS REVIEWS
            </span>
            <h2
              id="press-heading"
              className="text-4xl sm:text-6xl font-archivo text-black tracking-tight uppercase"
            >
              Press highlights:
            </h2>
          </div>
          <span className="text-sm sm:text-base font-oswald tracking-widest text-neutral-600 uppercase font-semibold">
            ROLLING STONE · POP FANTASMA · SCREAM &amp; YELL · TMDQA! · MUSIC NON STOP
          </span>
        </div>

        {/* Featured Excerpt Banner */}
        <div className="bg-white border-2 border-black p-8 sm:p-10 shadow-sm space-y-3">
          <p className="text-xl sm:text-3xl font-sans font-medium text-black leading-relaxed italic">
            &quot;Afrojazz, rock, Tropicália e samba psicodélico: a seleção dos lançamentos mais instigantes conectando Berlim e o Brasil.&quot;
          </p>
          <span className="text-sm sm:text-base font-oswald tracking-widest uppercase text-[#E51B24] font-bold block pt-2">
            MUSIC NON STOP · DESTAQUES DA SEMANA
          </span>
        </div>

        {/* Press Highlights Grid (5 items from Page 4 of PDF) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRESS_HIGHLIGHTS.map((press) => (
            <div
              key={press.id}
              onClick={() => setSelectedPress(press)}
              className="bg-white border-2 border-neutral-300 hover:border-black p-7 flex flex-col justify-between cursor-pointer transition-colors group shadow-xs space-y-5"
            >
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-oswald tracking-widest uppercase mb-3">
                  <span className="text-[#E51B24] font-bold text-base">{press.outlet}</span>
                  <span className="text-neutral-500 font-semibold">{press.tag}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-archivo text-black uppercase mb-3 leading-snug group-hover:text-[#E51B24] transition-colors font-bold">
                  {press.headline}
                </h3>

                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed italic">
                  &quot;{press.snippet}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs sm:text-sm font-oswald font-bold tracking-widest text-neutral-600 group-hover:text-[#E51B24] uppercase transition-colors">
                <span>READ EXCERPT</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Excerpt Modal */}
      {selectedPress && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-black max-w-2xl w-full p-8 sm:p-10 text-black relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedPress(null)}
              className="absolute top-5 right-5 text-black hover:text-[#E51B24] p-2"
              aria-label="Close modal"
            >
              <X className="w-7 h-7" />
            </button>

            <span className="font-oswald text-sm tracking-widest text-[#E51B24] uppercase font-bold block">
              {selectedPress.outlet} · {selectedPress.tag}
            </span>

            <h3 className="text-2xl sm:text-4xl font-archivo uppercase text-black leading-tight">
              {selectedPress.headline}
            </h3>

            <p className="text-lg sm:text-xl leading-relaxed text-neutral-800 italic border-l-4 border-[#E51B24] pl-5 py-2">
              &quot;{selectedPress.fullQuote || selectedPress.snippet}&quot;
            </p>

            <div className="pt-6 border-t border-neutral-300 flex items-center justify-between">
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent('LOVNIS ' + selectedPress.outlet + ' ' + selectedPress.headline)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-oswald text-sm font-bold tracking-widest text-[#E51B24] hover:text-black uppercase flex items-center gap-2"
              >
                <span>SEARCH FULL ARTICLE</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setSelectedPress(null)}
                className="font-oswald text-sm font-bold tracking-widest text-neutral-600 hover:text-black uppercase"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
