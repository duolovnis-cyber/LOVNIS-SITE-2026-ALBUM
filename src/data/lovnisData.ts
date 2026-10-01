import { VideoItem, PressItem, SocialLink, GalleryPhoto, TrackItem } from '../types';

export const LP_TRACKS_SIDE_ONE: TrackItem[] = [
  { number: 1, title: 'ENEMIGA', duration: '2:00', side: 'ONE', notes: 'Explosive opener blending fuzz guitar riffs and dual vocals.' },
  { number: 2, title: 'RISCO', duration: '2:58', side: 'ONE', notes: 'Hypnotic Brazilian garage groove and heavy bass drive.' },
  { number: 3, title: 'MURO DE BERLIM', duration: '2:42', side: 'ONE', notes: 'Written in Berlin, reflecting on cold concrete and counterculture fire.' },
  { number: 4, title: 'SWEET NOTHIN\'S', duration: '2:18', side: 'ONE', guests: 'Lap steel guitar by Pedro Petracco, Bass and tremolo guitar by Thiago Melvin', notes: 'Surfy slide and shimmering vintage tremolo.' },
  { number: 5, title: 'VÍTIMA', duration: '2:56', side: 'ONE', notes: 'Raw psych-rock with Amanda Longo lead vocals and distorted guitars.' },
  { number: 6, title: 'RECADO', duration: '3:20', side: 'ONE', guests: 'Flute by Kira Krempova', notes: 'Tropicália-infused ballad with acoustic textures and evocative woodwinds.' },
];

export const LP_TRACKS_SIDE_TWO: TrackItem[] = [
  { number: 1, title: 'RUNNING OUTTA LUCK', duration: '2:20', side: 'TWO', notes: 'First English single. High-octane garage psych anthem.' },
  { number: 2, title: 'CIDADE FANTASMA', duration: '2:55', side: 'TWO', notes: 'Ghost city reveries across deserted Berlin and Brazilian streets.' },
  { number: 3, title: 'MOLAMBO', duration: '2:51', side: 'TWO', notes: 'Dirty fuzz guitar interplay and syncopated powerhouse drums.' },
  { number: 4, title: 'COMO O DIABO TE AMA', duration: '3:01', side: 'TWO', guests: 'Lead Guitar by Gabriel Guedes, Acoustic guitar and backings by Lucian Satan', notes: 'Fierce psych-rock duet with scorching lead guitar solos.' },
  { number: 5, title: 'MACHT NIX', duration: '2:37', side: 'TWO', notes: 'Berlin slang garage punk burst with infectious nonchalance.' },
  { number: 6, title: 'ANGELA', duration: '3:59', side: 'TWO', guests: 'Harmonica by Ivanoé Braga', notes: 'Bluesy psychedelic lament with wailing harmonica tones.' },
  { number: 7, title: 'AO HOMEM QUE DORME NO CHÃO', duration: '2:30', side: 'TWO', guests: 'Brazilian ten-string guitar by Eristhal Luz', notes: 'Deeply emotional acoustic tribute featuring viola caipira.' },
];

export const SPECIAL_GUESTS = [
  { track: 'RECADO', guest: 'Flute by Kira Krempova' },
  { track: 'ANGELA', guest: 'Harmonica by Ivanoé Braga' },
  { track: 'COMO O DIABO TE AMA', guest: 'Lead Guitar by Gabriel Guedes, Acoustic guitar and backings by Lucian Satan' },
  { track: 'SWEET NOTHIN\'S', guest: 'Lap steel guitar by Pedro Petracco, Bass and tremolo guitar by Thiago Melvin' },
  { track: 'AO HOMEM QUE DORME NO CHÃO', guest: 'Brazilian ten-string guitar by Eristhal Luz' },
];

export const ALBUM_CREDITS = {
  producedAndRecorded: 'Produced and Recorded by Murilo Sá and LOVNIS',
  mixedBy: 'Mixed by Murilo Sá, Bernar Gomma, Amanda Longo, Putti',
  coverArtwork: 'Cover Artwork by Murilo Sá',
  albumDesign: 'Album Design by Murilo and Bernar',
  photographers: 'Photos by Thania Rodriguez, Bruna Marques, Philippe Baptista, Dafne Photographie, Chris Gegembauer, AMICOPADULA, Silvio Pelegrin and Robert Lingott',
};

export const LINER_NOTES = {
  dedication: 'In memory of Amanda Longo a.k.a. Suzan Flag (1987-2024)',
  columns: [
    `This self-titled debut is the manifesto of what Amanda and I started as a duo in 2020, Brazil. Separated for two years by the turns of life, we built a master plan to reunite for good. We married, said hello to never and moved to Berlin with two suitcases, a Höfner bass, a Teisco guitar and brand new songs.\n\nDuring those early years we lived in eight temporary flats, spreading our collages, old mobile studio, pictures and paintings all over each place. Cut-ups on the wall, lit candles, lyrics, full ashtrays, empty bottles, whisky and gin.\n\nFor the whole lockdown we slept by day and wrote songs all night. Eyeball on eyeball. There was no goal, but to please ourselves and lock the world outside.\n\nWith concerts allowed again, we started playing live as a duo with a cassette machine. Luckily we found Putti (or he found us), our perfectly matched, big-hearted drum powerhouse. The group was complete when`,
    `Amanda brought Bernar into the band: He came running into the crowd with his red fuzz guitar like a madman. As a four-piece band we played all the concerts of Amanda's last year in Berlin.\n\nLove was the reason this project started. It is the essence of this record and what kept us going together as a group to finish the album.\n\nAfter Amanda left us in November '24, Putti, Bernar and I were left with most of the tracks featuring her voice, bass and guitars recorded. Some months later we sat down. We agreed to continue. What followed was the hardest work we ever did:\n\nA necessary act of love for her and our music, a way to turn our grief into something meaningful. Endless mixing sessions with her voice, however without her unique laugh, jokes or her pushing back on a mix - simply heartbreaking. Eventually, we found joy and gave a new coat of paint to the tragic canvas.`,
    `This collection of songs is our polaroid. It is the sonic journey of our last five years. It stands as the raw final act of Amanda's artistic life, her rolling-stone spirit and the love and music shared by all of us.\n\nWe move into the future, carrying her forever in our hearts and finding new ways to keep alive the fire we started.\n\nFor Amanda, who lived as an artist.\nListen from start to finish.\nThis is the story of our lives.`,
  ],
  authorSignature: 'Murilo Sá',
};

export const BAND_MEMBERS_CREDITS = [
  {
    name: 'AMANDA LONGO',
    role: 'Lead/backing vocals, electric guitar and bass guitar',
    years: '1987 – 2024',
    aka: 'Suzan Flag',
    placeholderLabel: 'AMANDA LONGO',
  },
  {
    name: 'MURILO SÁ',
    role: 'Lead/backing vocals, electric/acoustic guitar, bass, piano/keys, percussion and drums',
    aka: 'Founder & Producer',
    placeholderLabel: 'MURILO SÁ',
  },
  {
    name: 'BERNAR GOMMA',
    role: 'Bass guitar and electric guitar',
    aka: 'Fuzz Guitarist',
    placeholderLabel: 'BERNAR GOMMA',
  },
  {
    name: 'PUTTI',
    role: 'Drums, percussion and backing vocals',
    aka: 'Drum Powerhouse',
    placeholderLabel: 'PUTTI',
  },
];

export const BAND_INFO = {
  name: 'LOVNIS',
  tagline: 'Brazilian Psych-Rock · Berlin',
  origin: 'Berlin, Germany',
  roots: 'Brazil',
  coFounders: ['Murilo Sá', 'Amanda Longo (in memoriam)'],
  activeMembers: [
    { name: 'Murilo Sá', role: 'Vocals, Guitars, Bass, Keys & Production', origin: 'Salvador / Berlin' },
    { name: 'Bernar Gomma', role: 'Bass & Electric Guitar', origin: 'Rio de Janeiro / Berlin' },
    { name: 'Putti', role: 'Drums & Percussion', origin: 'São Paulo / Berlin' },
  ],
  memorial: {
    name: 'Amanda Longo',
    aka: 'Suzan Flag (1987 – 2024)',
    role: 'Co-founder, Vocals, Guitars, Art & Concept',
    tributeText:
      'Amanda co-founded LOVNIS and infused the project with fearless energy, visual artistry, and soulful songwriting. Following her tragic loss in November 2024, the band honors her indelible spirit by bringing their self-titled debut album—fully recorded together—to life in September 2026.',
  },
  genres: [
    'Brazilian Psych-Rock',
    'Tropicália',
    '1960s Garage & Surf',
    'Jovem Guarda',
    'Lo-Fi Rock',
  ],
  venues: [
    { name: 'SO36', city: 'Berlin Kreuzberg', note: 'Iconic punk & counterculture landmark' },
    { name: 'Lido', city: 'Berlin Kreuzberg', note: 'Historic cinema-turned indie concert hall' },
    { name: 'Kantine am Berghain', city: 'Berlin Friedrichshain', note: 'Experimental rock stage' },
    { name: 'Schokoladen', city: 'Berlin Mitte', note: 'Underground cultural bastion' },
  ],
  supportedActs: [
    { name: 'The Courettes', desc: 'Explosive retro garage-rock duo (DK/BR)' },
    { name: 'The Shivas', desc: 'Psych surf rock icons from Portland, OR' },
    { name: 'Ana Frango Elétrico', desc: 'Latin Grammy-nominated Brazilian avant-pop artist' },
  ],
  contacts: {
    riderUrl:
      'https://drive.google.com/file/d/1H2p3gbtmX17lbkp8WawXuKGKsSdwf8pC/view?usp=drive_link',
    email: 'duolovnis@gmail.com',
    phone: '+49 17625876173',
    phoneName: 'Murilo',
    whatsappUrl: 'https://wa.me/4917625876173?text=Hello%20Murilo%2C%20contacting%20regarding%20LOVNIS%20booking',
    telegramUrl: 'https://t.me/+4917625876173',
    epkUrl: 'https://duolovnis.wixsite.com',
  },
  debutAlbum: {
    title: 'LOVNIS (Self-Titled Debut Album)',
    releaseDate: 'September 2026',
    status: 'Official Debut LP',
    description:
      'Recorded in Berlin with co-founder Amanda Longo, the 13-track debut LP captures LOVNIS at their purest: fuzzy guitars, hypnotic Brazilian grooves, garage surf hooks, and heartfelt psychedelic poetry.',
  },
};

export const MUSIC_VIDEOS: VideoItem[] = [
  {
    id: 'filme-de-terror',
    title: 'Filme de Terror',
    category: 'music-video',
    year: '2021',
    youtubeQuery: 'LOVNIS Filme de Terror',
    youtubeUrl: 'https://www.youtube.com/results?search_query=LOVNIS+Filme+de+Terror',
    description: 'A homage to 1920s silent horror cinema and German expressionism, paired with fuzzy Tropicalia psych-rock riffs.',
  },
  {
    id: 'tudo-isso-eu-ja-sei',
    title: 'Tudo Isso Eu Já Sei',
    category: 'music-video',
    year: '2020',
    youtubeQuery: 'LOVNIS Tudo Isso Eu Ja Sei',
    youtubeUrl: 'https://www.youtube.com/results?search_query=LOVNIS+Tudo+Isso+Eu+Ja+Sei',
    description: 'Vibrant kaleidoscope visuals paired with 1960s Brazilian garage-surf tones, dual vocals and infectious hooks.',
  },
  {
    id: '2020',
    title: '2020',
    category: 'music-video',
    year: '2020',
    youtubeQuery: 'LOVNIS 2020',
    youtubeUrl: 'https://www.youtube.com/results?search_query=LOVNIS+2020',
    description: 'A visceral, raw reflection on isolation, creative urgency, and artistic resistance during turbulent times.',
  },
  {
    id: 'running-out-of-luck',
    title: 'Running Out of Luck',
    category: 'music-video',
    year: '2024',
    youtubeQuery: 'LOVNIS Running Out of Luck',
    youtubeUrl: 'https://www.youtube.com/results?search_query=LOVNIS+Running+Out+of+Luck',
    description: 'First single recorded in English (August 2024). A brooding, high-octane garage psych anthem.',
  },
];

export const LIVE_VIDEOS: VideoItem[] = [
  {
    id: 'live-lido-berlin',
    title: 'Live at Lido Berlin',
    category: 'live',
    youtubeQuery: 'LOVNIS Live at Lido Berlin',
    youtubeUrl: 'https://www.youtube.com/results?search_query=LOVNIS+Live+at+Lido+Berlin',
    description: 'Electrifying live set supporting international acts at the legendary Kreuzberg rock hall Lido.',
  },
  {
    id: 'live-loophole',
    title: 'Live at Loophole',
    category: 'live',
    youtubeQuery: 'LOVNIS Live at Loophole Berlin',
    youtubeUrl: 'https://www.youtube.com/results?search_query=LOVNIS+Live+at+Loophole+Berlin',
    description: 'Sweaty, intimate Neukölln underground basement show captured with analog warmth and raw intensity.',
  },
];

export const PRESS_HIGHLIGHTS: PressItem[] = [
  {
    id: 'rolling-stone',
    outlet: 'Rolling Stone Magazine',
    tag: 'HOTLIST #20',
    headline: 'HOTLIST #20 — Rolling Stone Brasil',
    snippet:
      'A coluna semanal da Rolling Stone Brasil destacou os novos lançamentos, singles e produções independentes mais vibrantes com o som psicodélico da LOVNIS.',
    accentColor: '#ef4444',
  },
  {
    id: 'pop-fantasma',
    outlet: 'Pop Fantasma',
    tag: 'Artist Feature',
    headline: 'POP FANTASMA apresenta LOVNIS',
    snippet:
      '“Quando criança, Amanda Longo – da dupla LOVNIS, que divide com Murilo Sá – mergulhava em discos de rock psicodélico e garage 60s, criando uma ponte sonora direta com Berlim.”',
    accentColor: '#f43f5e',
  },
  {
    id: 'scream-yell',
    outlet: 'Scream & Yell',
    tag: 'Interview & Special',
    headline: 'Três perguntas: Murilo Sá e Amanda Longo',
    snippet:
      'Do capítulo “a pandemia fodeu com 2020, mas também trouxe coisas criativas, parcerias intensas e música urgente no underground berlinense”.',
    accentColor: '#ec4899',
  },
  {
    id: 'tmdqa',
    outlet: 'Tenho Mais Discos Que Amigos!',
    tag: 'National Releases',
    headline: 'Lançamentos nacionais: LOVNIS',
    snippet:
      'Entre os lançamentos nacionais mais inventivos e autênticos das últimas semanas, o som transcontinental da LOVNIS traz frescor e energia crua.',
    accentColor: '#38bdf8',
  },
  {
    id: 'music-non-stop',
    outlet: 'Music Non Stop',
    tag: 'Weekly Highlights',
    headline: 'Destaques da Semana traz os sons mais quentes',
    snippet:
      'Afrojazz, rock, Tropicália e samba psicodélico: a seleção dos lançamentos independentes mais instigantes conectando Brasil e Europa.',
    accentColor: '#a855f7',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'EPK / Website',
    url: 'https://duolovnis.wixsite.com',
    handle: 'duolovnis.wixsite.com',
    iconName: 'globe',
    description: 'Band EPK, history & legacy web archives',
    primaryAction: 'Open Website',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/c/LOVNISDUO',
    handle: 'youtube.com/c/LOVNISDUO',
    iconName: 'youtube',
    description: 'Official music videos and live Berlin performances',
    primaryAction: 'Watch Channel',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/search/LOVNIS',
    handle: 'Open on Spotify',
    iconName: 'spotify',
    description: 'Listen to singles and upcoming debut album',
    primaryAction: 'Open on Spotify',
  },
  {
    name: 'Bandcamp',
    url: 'https://lovnis.bandcamp.com',
    handle: 'lovnis.bandcamp.com',
    iconName: 'disc',
    description: 'Bandcamp catalog, vinyl announcements and digital releases',
    primaryAction: 'Open Bandcamp',
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/lovnis',
    handle: 'soundcloud.com/lovnis',
    iconName: 'cloud',
    description: 'Tracks, audio archives and session recordings',
    primaryAction: 'Open SoundCloud',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'U-Bahn Platform Sessions',
    caption: 'Band press session in Berlin underground subway with Amanda, Murilo, Bernar and Putti.',
    location: 'Berlin U-Bahn',
  },
  {
    id: 'gal-2',
    title: 'Live at Lido Berlin',
    caption: 'Full throttle psych-rock live energy bathed in neon red and deep blues.',
    location: 'Lido, Kreuzberg',
  },
  {
    id: 'gal-3',
    title: 'Soundcheck & Analog Tapes',
    caption: 'Backstage analog clock, vintage guitar amps and soundcheck rituals.',
    location: 'Berlin Underground',
  },
  {
    id: 'gal-4',
    title: 'Amanda Longo Live in Red',
    caption: 'Vocal power, leopard flair, and hypnotic presence during a Berlin headline show.',
    location: 'SO36, Berlin',
  },
  {
    id: 'gal-5',
    title: 'Murilo Sá Guitars',
    caption: 'Fuzzy riffs and surf-psych reverb chords played on a vintage hollowbody.',
    location: 'Kantine am Berghain',
  },
  {
    id: 'gal-6',
    title: 'Kreuzberg Stage Haze',
    caption: 'Smoke machines, flashing spotlights and intimate Berlin basement rock vibes.',
    location: 'Loophole, Neukölln',
  },
];
