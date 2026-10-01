import React, { useState } from 'react';
import {
  LP_TRACKS_SIDE_ONE,
  LP_TRACKS_SIDE_TWO,
  SPECIAL_GUESTS,
  ALBUM_CREDITS,
  LINER_NOTES,
  BAND_MEMBERS_CREDITS,
} from '../data/lovnisData';
import { TrackItem } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';

interface VinylSleeveProps {
  onOpenVideo?: (videoId: string) => void;
}

export const VinylSleeve: React.FC<VinylSleeveProps> = () => {
  const [activeTrack, setActiveTrack] = useState<TrackItem | null>(null);

  return (
    <section id="vinyl-sleeve" className="bg-white text-neutral-900 py-20 sm:py-28 px-6 sm:px-12 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ============================================================ */}
        {/* SECTION HEADER: Black Title, Red Subtitle, Ample Whitespace */}
        {/* ============================================================ */}
        <div className="border-b-2 border-black pb-8">
          <span className="text-sm sm:text-base font-oswald tracking-widest text-[#E51B24] uppercase font-bold block mb-2">
            PHYSICAL 12&quot; VINYL &amp; ALBUM LINER NOTES
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-archivo tracking-tight text-black uppercase leading-none">
              LOVNIS Debut LP
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm sm:text-base font-mono-space text-neutral-600">
              <span className="font-bold text-black bg-neutral-100 px-3 py-1 border border-neutral-300 uppercase">
                13 Tracks · 33⅓ RPM
              </span>
              <span className="text-[#E51B24] font-bold">
                Release: September 2026
              </span>
            </div>
          </div>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl leading-relaxed">
            The complete tracklist, recording credits, and liner notes for the debut full-length record, recorded in Berlin with co-founder Amanda Longo.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 1. TRACKLIST: SIDE ONE & SIDE TWO - Spacious News Layout     */}
        {/* ============================================================ */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-3 border-b-2 border-black">
            <h3 className="text-2xl sm:text-4xl font-archivo text-black uppercase tracking-tight">
              Tracklist
            </h3>
            <span className="text-sm sm:text-base font-oswald text-[#E51B24] uppercase font-bold tracking-wider">
              SIDE ONE &amp; SIDE TWO
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* SIDE ONE */}
            <div className="bg-[#FAFAFA] border-2 border-neutral-300 p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b-2 border-black">
                <div>
                  <span className="text-xs sm:text-sm font-oswald text-[#E51B24] uppercase font-bold tracking-widest block">
                    SIDE ONE · 6 TRACKS
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-archivo text-black uppercase mt-1">
                    LADO A
                  </h4>
                </div>
                <span className="text-xs sm:text-sm font-mono-space bg-black text-white px-2.5 py-1 font-bold">
                  33⅓ RPM
                </span>
              </div>

              <div className="divide-y divide-neutral-200">
                {LP_TRACKS_SIDE_ONE.map((track) => (
                  <div
                    key={track.number}
                    onClick={() => setActiveTrack(activeTrack?.title === track.title ? null : track)}
                    className="py-4 hover:bg-white px-3 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-3 min-w-0">
                        <span className="font-mono-space font-bold text-sm sm:text-base text-[#E51B24] shrink-0">
                          {String(track.number).padStart(2, '0')}
                        </span>
                        <span className="font-archivo text-base sm:text-lg text-black uppercase tracking-wide group-hover:text-[#E51B24] transition-colors truncate font-semibold">
                          {track.title}
                        </span>
                      </div>
                      <span className="font-mono-space text-sm sm:text-base text-neutral-500 shrink-0 font-medium">
                        {track.duration}
                      </span>
                    </div>

                    {track.notes && (
                      <p className="mt-1.5 ml-8 text-xs sm:text-sm text-neutral-600 leading-normal">
                        {track.notes}
                      </p>
                    )}

                    {track.guests && (
                      <p className="mt-1 ml-8 text-xs sm:text-sm text-[#E51B24] font-medium">
                        ★ {track.guests}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* SIDE TWO */}
            <div className="bg-[#FAFAFA] border-2 border-neutral-300 p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b-2 border-black">
                <div>
                  <span className="text-xs sm:text-sm font-oswald text-[#E51B24] uppercase font-bold tracking-widest block">
                    SIDE TWO · 7 TRACKS
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-archivo text-black uppercase mt-1">
                    LADO B
                  </h4>
                </div>
                <span className="text-xs sm:text-sm font-mono-space bg-black text-white px-2.5 py-1 font-bold">
                  33⅓ RPM
                </span>
              </div>

              <div className="divide-y divide-neutral-200">
                {LP_TRACKS_SIDE_TWO.map((track) => (
                  <div
                    key={track.number}
                    onClick={() => setActiveTrack(activeTrack?.title === track.title ? null : track)}
                    className="py-4 hover:bg-white px-3 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-3 min-w-0">
                        <span className="font-mono-space font-bold text-sm sm:text-base text-[#E51B24] shrink-0">
                          {String(track.number).padStart(2, '0')}
                        </span>
                        <span className="font-archivo text-base sm:text-lg text-black uppercase tracking-wide group-hover:text-[#E51B24] transition-colors truncate font-semibold">
                          {track.title}
                        </span>
                      </div>
                      <span className="font-mono-space text-sm sm:text-base text-neutral-500 shrink-0 font-medium">
                        {track.duration}
                      </span>
                    </div>

                    {track.notes && (
                      <p className="mt-1.5 ml-8 text-xs sm:text-sm text-neutral-600 leading-normal">
                        {track.notes}
                      </p>
                    )}

                    {track.guests && (
                      <p className="mt-1 ml-8 text-xs sm:text-sm text-[#E51B24] font-medium">
                        ★ {track.guests}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. BAND MEMBERS & INSTRUMENTATION - Airy 4-Column Cards      */}
        {/* ============================================================ */}
        <div className="space-y-8 pt-8 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-3 border-b-2 border-black gap-2">
            <div>
              <span className="text-sm sm:text-base font-oswald text-[#E51B24] uppercase font-bold tracking-wider block mb-1">
                LINEUP &amp; RECORDING SESSIONS
              </span>
              <h3 className="text-2xl sm:text-4xl font-archivo text-black uppercase tracking-tight">
                Band Members
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-mono-space text-neutral-600 uppercase">
              BERLIN RECORDINGS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BAND_MEMBERS_CREDITS.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-neutral-300 p-5 flex flex-col justify-between shadow-xs hover:border-black transition-colors"
              >
                <div>
                  <div className="mb-4 bg-neutral-100 border border-neutral-200 overflow-hidden">
                    <ImagePlaceholder
                      label="PORTRAIT"
                      sublabel={member.name}
                      aspect="aspect-[4/5]"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-archivo text-lg sm:text-xl text-black uppercase font-bold">
                      {member.name}
                    </h4>
                  </div>

                  {member.aka && (
                    <span className="text-xs sm:text-sm font-mono-space text-[#E51B24] font-bold block mt-1">
                      {member.aka}
                    </span>
                  )}

                  <p className="text-sm sm:text-base text-neutral-700 mt-2 leading-relaxed">
                    {member.role}
                  </p>
                </div>

                {member.years && (
                  <div className="mt-4 pt-3 border-t border-neutral-200">
                    <span className="text-xs sm:text-sm font-mono-space text-white bg-[#E51B24] px-2.5 py-1 font-bold inline-block uppercase tracking-wider">
                      {member.years}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. SPECIAL GUESTS & ALBUM PRODUCTION CREDITS                 */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-neutral-200">
          {/* Special Guests */}
          <div className="lg:col-span-7 bg-[#FAFAFA] border-2 border-neutral-300 p-6 sm:p-8 space-y-4">
            <span className="text-xs sm:text-sm font-oswald text-[#E51B24] uppercase font-bold tracking-widest block">
              COLLABORATORS
            </span>
            <h4 className="text-xl sm:text-2xl font-archivo text-black uppercase border-b-2 border-black pb-2">
              Special Guests
            </h4>
            <div className="space-y-3 pt-2">
              {SPECIAL_GUESTS.map((item, idx) => (
                <div key={idx} className="text-sm sm:text-base text-neutral-800 leading-relaxed">
                  <strong className="font-archivo uppercase text-black font-semibold mr-1">
                    {item.track}:
                  </strong>
                  <span>{item.guest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical / Album Credits */}
          <div className="lg:col-span-5 bg-[#FAFAFA] border-2 border-neutral-300 p-6 sm:p-8 space-y-4">
            <span className="text-xs sm:text-sm font-oswald text-[#E51B24] uppercase font-bold tracking-widest block">
              PRODUCTION &amp; ART
            </span>
            <h4 className="text-xl sm:text-2xl font-archivo text-black uppercase border-b-2 border-black pb-2">
              Album Credits
            </h4>
            <div className="space-y-2.5 pt-2 text-sm sm:text-base text-neutral-800 font-sans leading-relaxed">
              <p>
                <strong className="text-black font-semibold block">Production:</strong>
                {ALBUM_CREDITS.producedAndRecorded}
              </p>
              <p>
                <strong className="text-black font-semibold block">Mixing:</strong>
                {ALBUM_CREDITS.mixedBy}
              </p>
              <p>
                <strong className="text-black font-semibold block">Artwork &amp; Design:</strong>
                {ALBUM_CREDITS.coverArtwork} · {ALBUM_CREDITS.albumDesign}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 pt-2 border-t border-neutral-200">
                {ALBUM_CREDITS.photographers}
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. LINER NOTES & TRIBUTE (MURILO SÁ) - Magazine Essay Layout */}
        {/* ============================================================ */}
        <div className="bg-[#FAFAFA] border-2 border-black p-8 sm:p-12 lg:p-16 space-y-8 shadow-sm">
          <div className="border-b-2 border-black pb-6">
            <span className="text-sm sm:text-base font-oswald text-[#E51B24] uppercase font-bold tracking-widest block mb-2">
              ALBUM ESSAY &amp; MANIFESTO
            </span>
            <h3 className="text-2xl sm:text-4xl font-archivo text-black uppercase tracking-tight">
              {LINER_NOTES.dedication}
            </h3>
            <span className="text-xs sm:text-sm font-mono-space text-neutral-600 block mt-2">
              BERLIN, GERMANY · 2024
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-base sm:text-lg text-neutral-800 leading-relaxed font-sans">
            <div className="space-y-4">
              <p className="whitespace-pre-line">
                {LINER_NOTES.columns[0]}
              </p>
            </div>

            <div className="space-y-4">
              <p className="whitespace-pre-line">
                {LINER_NOTES.columns[1]}
              </p>
            </div>

            <div className="space-y-4 flex flex-col justify-between">
              <p className="whitespace-pre-line">
                {LINER_NOTES.columns[2]}
              </p>

              <div className="pt-6 border-t-2 border-black mt-6">
                <span className="text-2xl sm:text-3xl font-caveat text-black block">
                  {LINER_NOTES.authorSignature}
                </span>
                <span className="text-sm font-mono-space text-neutral-600 block mt-1">
                  Murilo Sá · Berlin
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
