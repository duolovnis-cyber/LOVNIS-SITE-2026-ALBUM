import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { VideoItem } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      id="video-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80"
      onClick={onClose}
    >
      <div
        id="video-modal-content"
        className="relative w-full max-w-2xl bg-white border-2 border-black shadow-2xl overflow-hidden text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Black Title, Red Subtitle */}
        <div className="flex items-center justify-between px-6 py-5 border-b-2 border-black bg-[#FAFAFA]">
          <div>
            <span className="font-oswald text-sm text-[#E51B24] uppercase tracking-wider block font-bold">
              {video.category === 'music-video' ? 'MUSIC VIDEO' : 'LIVE VIDEO'} · LOVNIS
            </span>
            <h3 className="text-2xl sm:text-3xl font-archivo text-black uppercase tracking-wide mt-0.5">
              {video.title}
            </h3>
          </div>

          <button
            id="close-video-modal-btn"
            onClick={onClose}
            className="p-2 text-black hover:text-[#E51B24] transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Placeholder & Info */}
        <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden flex items-center justify-center">
          <ImagePlaceholder
            label={video.title}
            sublabel="OFFICIAL VIDEO STREAM"
            aspect="aspect-video"
            dark={true}
            className="w-full h-full"
          />

          <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-center p-8 text-white">
            <span className="bg-[#E51B24] text-white px-3 py-1 text-xs font-mono-space font-bold uppercase tracking-wider mb-3">
              LOVNIS · BERLIN
            </span>
            <h4 className="text-2xl sm:text-4xl font-archivo text-white mb-2 uppercase tracking-tight">
              {video.title}
            </h4>
            <p className="text-sm sm:text-base text-neutral-200 mb-6 leading-relaxed max-w-lg">
              {video.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                id="modal-youtube-cta-btn"
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#E51B24] hover:bg-black text-white font-oswald text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
              >
                <span>WATCH ON YOUTUBE</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com/c/LOVNISDUO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border-2 border-white hover:bg-white hover:text-black text-white font-oswald text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors"
              >
                YOUTUBE CHANNEL
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FAFAFA] border-t border-neutral-200 flex items-center justify-between text-xs sm:text-sm font-mono-space text-neutral-600">
          <span>SOURCE: OFFICIAL LOVNIS ARCHIVES</span>
          <button
            onClick={onClose}
            className="font-oswald text-xs sm:text-sm font-bold text-black hover:text-[#E51B24] uppercase tracking-wider"
          >
            CLOSE WINDOW &times;
          </button>
        </div>
      </div>
    </div>
  );
};
