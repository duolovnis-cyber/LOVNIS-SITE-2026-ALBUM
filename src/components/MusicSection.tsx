import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { MUSIC_VIDEOS, LIVE_VIDEOS, SOCIAL_LINKS } from '../data/lovnisData';
import { VideoItem } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';

interface MusicSectionProps {
  onSelectVideo: (video: VideoItem) => void;
}

export const MusicSection: React.FC<MusicSectionProps> = ({ onSelectVideo }) => {
  return (
    <section id="music" className="bg-white text-neutral-900 py-20 sm:py-28 px-6 sm:px-12 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header: Black Title, Red Subtitle */}
        <div className="border-b-2 border-black pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-sm sm:text-base font-oswald tracking-widest text-[#E51B24] uppercase font-bold block mb-1">
              OFFICIAL VIDEOS · SESSIONS · STREAMING
            </span>
            <h2
              id="music-heading"
              className="text-4xl sm:text-6xl font-archivo text-black tracking-tight uppercase"
            >
              Music Videos &amp; Links
            </h2>
          </div>
          <span className="text-sm sm:text-base font-mono-space text-neutral-600 uppercase font-semibold">
            BERLIN ARCHIVES
          </span>
        </div>

        {/* 2-Column Grid as in Page 3 of PDF with Generous Breathing Room */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ============================================================ */}
          {/* LEFT COLUMN: MUSIC VIDEOS & LIVE VIDEOS (lg:col-span-7)       */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 space-y-16">
            {/* Subsection 1: Music Videos */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-3 flex items-center justify-between">
                <h3 className="text-2xl sm:text-3xl font-archivo text-black uppercase tracking-wide">
                  Music Videos
                </h3>
                <span className="text-xs sm:text-sm font-oswald tracking-wider text-[#E51B24] font-bold uppercase">
                  STUDIO TRACKS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {MUSIC_VIDEOS.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => onSelectVideo(video)}
                    className="bg-white border-2 border-neutral-300 hover:border-black transition-colors group cursor-pointer flex flex-col shadow-xs"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                      <ImagePlaceholder
                        label={video.title}
                        sublabel={`MUSIC VIDEO · ${video.year || 'OFFICIAL'}`}
                        aspect="aspect-video"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 flex items-center justify-center transition-colors">
                        <div className="w-12 h-12 bg-black text-white group-hover:bg-[#E51B24] flex items-center justify-center transition-colors shadow-md">
                          <Play className="w-5 h-5 ml-0.5 fill-current" />
                        </div>
                      </div>
                      <span className="absolute top-2.5 left-2.5 bg-black text-white px-2.5 py-0.5 text-xs font-mono-space font-bold uppercase">
                        {video.year}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="text-lg sm:text-xl font-archivo text-black uppercase group-hover:text-[#E51B24] transition-colors mb-2 font-bold">
                          {video.title}
                        </h4>
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                          {video.description}
                        </p>
                      </div>
                      
                      <div className="pt-3 border-t border-neutral-200">
                        <span className="text-xs sm:text-sm font-oswald font-bold tracking-wider text-[#E51B24] uppercase group-hover:text-black transition-colors flex items-center gap-1.5">
                          <span>WATCH ON YOUTUBE</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection 2: Live Videos */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-3 flex items-center justify-between">
                <h3 className="text-2xl sm:text-3xl font-archivo text-black uppercase tracking-wide">
                  Live Videos
                </h3>
                <span className="text-xs sm:text-sm font-oswald tracking-wider text-[#E51B24] font-bold uppercase">
                  BERLIN CONCERTS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {LIVE_VIDEOS.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => onSelectVideo(video)}
                    className="bg-white border-2 border-neutral-300 hover:border-black transition-colors group cursor-pointer flex flex-col shadow-xs"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                      <ImagePlaceholder
                        label={video.title}
                        sublabel="LIVE CONCERT VIDEO"
                        aspect="aspect-video"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 flex items-center justify-center transition-colors">
                        <div className="w-12 h-12 bg-black text-white group-hover:bg-[#E51B24] flex items-center justify-center transition-colors shadow-md">
                          <Play className="w-5 h-5 ml-0.5 fill-current" />
                        </div>
                      </div>
                      <span className="absolute top-2.5 left-2.5 bg-black text-white px-2.5 py-0.5 text-xs font-mono-space font-bold uppercase">
                        LIVE SET
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="text-lg sm:text-xl font-archivo text-black uppercase group-hover:text-[#E51B24] transition-colors mb-2 font-bold">
                          {video.title}
                        </h4>
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                          {video.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-neutral-200">
                        <span className="text-xs sm:text-sm font-oswald font-bold tracking-wider text-[#E51B24] uppercase group-hover:text-black transition-colors flex items-center gap-1.5">
                          <span>WATCH ON YOUTUBE</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: STREAMING & SOCIAL (lg:col-span-5)              */}
          {/* ============================================================ */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAFAFA] border-2 border-black p-8 sm:p-10 space-y-6 shadow-sm">
              <div className="border-b-2 border-black pb-4">
                <span className="text-xs sm:text-sm font-oswald tracking-widest text-[#E51B24] uppercase font-bold block mb-1">
                  OFFICIAL CHANNELS
                </span>
                <h3 className="text-2xl sm:text-3xl font-archivo text-black uppercase tracking-wide">
                  Streaming &amp; Social
                </h3>
              </div>

              <div className="space-y-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-neutral-300 hover:border-black p-5 flex items-center justify-between group transition-colors shadow-xs"
                  >
                    <div>
                      <span className="font-archivo text-lg sm:text-xl uppercase block text-black group-hover:text-[#E51B24] transition-colors font-semibold">
                        {link.name}
                      </span>
                      <span className="text-sm font-mono-space text-neutral-600 block mt-1">
                        {link.handle}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm font-oswald font-bold tracking-wider text-neutral-600 group-hover:text-[#E51B24] uppercase transition-colors">
                      <span className="hidden sm:inline">{link.primaryAction}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
