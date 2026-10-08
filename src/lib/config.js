// Single source for the booking link and content-ready feature flags.

// TODO(owner): confirm the booking calendar URL. Until supplied, every booking
// CTA points at the existing /contact page. Replace with the calendar URL here
// and all CTAs update together.
export const BOOKING_URL = '/contact';

export const FLAGS = {
  // Optional 10-second silent looping hero background (scenes 2 and 8). Needs HERO_LOOP_SRC.
  heroLoop: false,
  // FAQ "Is our data safe?" stays hidden until the client supplies the answer text.
  showDataFaq: false,
};

// Summary video. Leave null until the file exists; the slot renders a disabled
// placeholder with no broken embed.
export const VIDEO = {
  src: null,        // e.g. '/video/ai-maestro-summary.mp4'
  poster: null,     // e.g. '/video/poster.jpg'
  captions: null,   // e.g. '/video/ai-maestro-summary.srt' (WebVTT or SRT-converted)
};
export const HERO_LOOP_SRC = null;

// FAQ answer for "Is our data safe?" (client to supply; UK GDPR statement).
export const DATA_FAQ_ANSWER = null;

// Image slots. Fill `src` (and optional avif/webp) when real photography exists.
// Slots with no src render nothing for visitors (a dashed marker in dev only).
// Real client photos only with written permission; no AI-generated faces.
export const IMAGES = {
  hero: { alt: "A small-business owner reviewing the week's work at her desk.", w: 1600, h: 900 },
  about: { alt: 'The AI Maestro team in conversation with a client.', w: 1200, h: 800 },
  principle1: { alt: 'A process sketched on paper during a discovery session.', w: 800, h: 500 },
  principle3: { alt: 'A team member checking an automated report.', w: 800, h: 500 },
  case1: { alt: 'A finance desk with paper invoices beside a clean screen.', w: 800, h: 480 },
  case2: { alt: 'Two colleagues talking through a sales conversation, with notes.', w: 800, h: 480 },
  case3: { alt: 'A founder at a laptop with a coffee.', w: 800, h: 480 },
  cta: { alt: 'The AI Maestro team.', w: 1600, h: 800 },
};
