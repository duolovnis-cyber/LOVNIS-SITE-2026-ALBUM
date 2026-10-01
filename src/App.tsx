import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VinylSleeve } from './components/VinylSleeve';
import { BioSection } from './components/BioSection';
import { MusicSection } from './components/MusicSection';
import { PressSection } from './components/PressSection';
import { GallerySection } from './components/GallerySection';
import { ConnectSection } from './components/ConnectSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { MUSIC_VIDEOS, LIVE_VIDEOS } from './data/lovnisData';
import { VideoItem } from './types';

export default function App() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const handleOpenVideoById = (videoId: string) => {
    const allVideos = [...MUSIC_VIDEOS, ...LIVE_VIDEOS];
    const found = allVideos.find((v) => v.id === videoId);
    if (found) {
      setActiveVideo(found);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#E51B24] selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 3-Panel Visual Composition mirroring Reference Image */}
        <Hero onOpenVideo={handleOpenVideoById} />

        {/* The 12" Vinyl Record Back Cover Sleeve Experience */}
        <VinylSleeve onOpenVideo={handleOpenVideoById} />

        {/* Bio, History & Berlin Stages */}
        <BioSection />

        {/* Music Videos, Discography & Streaming */}
        <MusicSection onSelectVideo={(video) => setActiveVideo(video)} />

        {/* Press Highlights & Editorial Clippings */}
        <PressSection />

        {/* Visual Archives & Live Concert Photography */}
        <GallerySection />

        {/* Technical Rider, Stage Map & Booking */}
        <ConnectSection />
      </main>

      {/* Rock Band Footer */}
      <Footer />

      {/* Video Preview Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}
