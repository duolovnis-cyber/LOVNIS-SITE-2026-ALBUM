import React, { useState } from 'react';
import { ExternalLink, Mail, MessageSquare, Send } from 'lucide-react';
import { BAND_INFO } from '../data/lovnisData';
import { ImagePlaceholder } from './ImagePlaceholder';

export const ConnectSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryOrg, setInquiryOrg] = useState('');
  const [inquiryCity, setInquiryCity] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[LOVNIS Inquiry] ${inquiryOrg || inquiryName || 'Concert / Booking'}`);
    const body = encodeURIComponent(
      `Hello Murilo and LOVNIS,\n\n` +
      `Name: ${inquiryName}\n` +
      `Organization / Venue: ${inquiryOrg}\n` +
      `City: ${inquiryCity}\n\n` +
      `Message:\n${inquiryMessage}\n\nBest regards,\n${inquiryName}`
    );
    window.location.href = `mailto:${BAND_INFO.contacts.email}?subject=${subject}&body=${body}`;
  };

  const photoLabels = [
    { label: 'STAGE SHOT 01', sub: 'SO36 BERLIN' },
    { label: 'STAGE SHOT 02', sub: 'LIDO KREUZBERG' },
    { label: 'STUDIO 03', sub: 'ANALOG SESSION' },
    { label: 'BACKSTAGE 04', sub: 'BERLIN U-BAHN' },
    { label: 'STAGE SHOT 05', sub: 'KANTINE AM BERGHAIN' },
    { label: 'LIVE HAZE 06', sub: 'LOOPHOLE NEUKÖLLN' },
  ];

  return (
    <section id="connect" className="bg-white text-neutral-900 py-20 sm:py-28 px-6 sm:px-12 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header: Black Title, Red Subtitle */}
        <div className="border-b-2 border-black pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-sm sm:text-base font-oswald tracking-widest text-[#E51B24] uppercase font-bold block mb-1">
              STAGE RIDER · BOOKING · MANAGEMENT
            </span>
            <h2
              id="connect-heading"
              className="text-4xl sm:text-6xl font-archivo text-black tracking-tight uppercase"
            >
              Connect with LOVNIS
            </h2>
          </div>
          <span className="text-sm sm:text-base font-mono-space text-neutral-600 uppercase font-semibold">
            BERLIN · WORLDWIDE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ============================================================ */}
          {/* LEFT COLUMN: CONTACT DETAILS DIRECTLY FROM PAGE 5 OF PDF      */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 space-y-8">
            {/* Contact Details Box */}
            <div className="bg-[#FAFAFA] border-2 border-black p-8 sm:p-10 space-y-8 shadow-sm">
              {/* 1. LOVNIS Rider / Stage Map */}
              <div>
                <span className="text-xs sm:text-sm font-oswald tracking-widest text-[#E51B24] uppercase font-bold block mb-1.5">
                  TECHNICAL REQUIREMENTS
                </span>
                <h3 className="text-2xl sm:text-3xl font-archivo text-black uppercase mb-3">
                  LOVNIS Rider / Stage Map
                </h3>
                <a
                  id="pdf-rider-link"
                  href={BAND_INFO.contacts.riderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-mono-space text-[#E51B24] hover:underline font-bold break-all inline-flex items-center gap-2"
                >
                  <span>{BAND_INFO.contacts.riderUrl}</span>
                  <ExternalLink className="w-5 h-5 shrink-0" />
                </a>
              </div>

              {/* 2. E-mail */}
              <div className="pt-6 border-t border-neutral-200">
                <span className="text-xs sm:text-sm font-oswald tracking-widest text-[#E51B24] uppercase font-bold block mb-1.5">
                  DIRECT CONTACT
                </span>
                <h3 className="text-2xl sm:text-3xl font-archivo text-black uppercase mb-3">
                  E-mail
                </h3>
                <a
                  href={`mailto:${BAND_INFO.contacts.email}`}
                  className="text-lg sm:text-xl font-mono-space text-black hover:text-[#E51B24] font-bold flex items-center gap-2.5 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#E51B24]" />
                  <span>{BAND_INFO.contacts.email}</span>
                </a>
              </div>

              {/* 3. Whatsapp / Telegram */}
              <div className="pt-6 border-t border-neutral-200">
                <span className="text-xs sm:text-sm font-oswald tracking-widest text-[#E51B24] uppercase font-bold block mb-1.5">
                  MESSAGING &amp; DIRECT DIAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-archivo text-black uppercase mb-3">
                  Whatsapp / Telegram
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={BAND_INFO.contacts.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-mono-space text-black hover:text-[#E51B24] font-bold flex items-center gap-2.5 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 text-[#E51B24]" />
                    <span>{BAND_INFO.contacts.phone} Murilo</span>
                  </a>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={BAND_INFO.contacts.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-black hover:bg-[#E51B24] text-white text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={BAND_INFO.contacts.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border-2 border-black hover:border-[#E51B24] hover:text-[#E51B24] text-black text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider transition-colors"
                    >
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Direct Message Form */}
            <form
              onSubmit={handleSendEmail}
              className="border-2 border-neutral-300 p-8 sm:p-10 space-y-5 bg-white shadow-xs"
            >
              <h4 className="text-base font-oswald uppercase tracking-widest text-black font-bold border-b-2 border-black pb-3">
                DIRECT INQUIRY FORM
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-oswald uppercase text-neutral-700 font-bold mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Name / Contact"
                    className="w-full bg-neutral-50 border border-neutral-300 p-3 text-base text-black focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-oswald uppercase text-neutral-700 font-bold mb-1.5">
                    Venue / Festival
                  </label>
                  <input
                    type="text"
                    value={inquiryOrg}
                    onChange={(e) => setInquiryOrg(e.target.value)}
                    placeholder="Venue or Festival"
                    className="w-full bg-neutral-50 border border-neutral-300 p-3 text-base text-black focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-oswald uppercase text-neutral-700 font-bold mb-1.5">
                  City / Country
                </label>
                <input
                  type="text"
                  value={inquiryCity}
                  onChange={(e) => setInquiryCity(e.target.value)}
                  placeholder="e.g. Berlin, London, São Paulo"
                  className="w-full bg-neutral-50 border border-neutral-300 p-3 text-base text-black focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-oswald uppercase text-neutral-700 font-bold mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder="Tell us about the proposed concert, festival, or project..."
                  className="w-full bg-neutral-50 border border-neutral-300 p-3 text-base text-black focus:outline-none focus:border-black resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-[#E51B24] text-white py-4 text-sm sm:text-base font-oswald font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2.5"
              >
                <Send className="w-5 h-5" />
                <span>SEND INQUIRY VIA EMAIL</span>
              </button>
            </form>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: 6 PHOTO PLACEHOLDERS (PAGE 5 OF PDF)           */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {photoLabels.map((item, idx) => (
                <div
                  key={idx}
                  className="border-2 border-black bg-white overflow-hidden aspect-[4/3] shadow-xs"
                >
                  <ImagePlaceholder
                    label={item.label}
                    sublabel={item.sub}
                    aspect="aspect-[4/3]"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>

            <div className="p-5 border-2 border-neutral-300 bg-[#FAFAFA] flex items-center justify-between text-xs sm:text-sm font-mono-space text-neutral-600">
              <span>PHOTO ARCHIVES · BERLIN CONCERTS &amp; SESSIONS</span>
              <span className="font-bold text-black uppercase">LOVNIS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
