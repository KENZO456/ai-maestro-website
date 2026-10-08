import { useState } from 'react';
import { VIDEO } from '../lib/config';
import { ScoreLine } from './ScoreLine';

// Voiceover transcript, scene order. Keep in step with the case study figures.
export const TRANSCRIPT = [
  "Somewhere in your business, someone is retyping something. A report. An invoice. A deal that's already sitting in an inbox.",
  "That's ten hours a week gone to admin. Not because your team is slow, but because your tools, your data and your people aren't in sync.",
  "We're AI Maestro. We help UK small businesses put AI and automation to work on exactly that.",
  'First, we listen. We learn how you actually work, and find the few jobs costing you the most time.',
  'Then we build. We connect your tools and put AI on the repetitive work. Most projects go live in four to twelve weeks.',
  "And we hand it over. Your team learns to run it, so you're not paying us to keep it going.",
  'An invoice process that took fifteen hours a week now takes one. A CRM that updates itself. Three times the LinkedIn engagement for thirty minutes of work.',
  "Less admin. More of the work that matters. Let's find your ten hours.",
];

const PLAY_LABEL = 'Play the AI Maestro summary video.';

export function VideoSlot() {
  const [playing, setPlaying] = useState(false);
  const ready = Boolean(VIDEO.src);
  return (
    <section data-section="video" aria-label="Summary video" style={{ background: '#0B0B2B', color: '#FAF8F4', padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 5rem)' }}>
      <div className="wrap" style={{ maxWidth: 980, margin: '0 auto' }}>
        <div style={{ position: 'relative', aspectRatio: '16 / 9', width: '100%', background: '#15154a', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)' }}>
          {playing && ready ? (
            // Plays on click, with sound. Never autoplays on load.
            <video controls autoPlay playsInline preload="metadata" poster={VIDEO.poster || undefined} style={{ width: '100%', height: '100%', display: 'block' }}>
              <source src={VIDEO.src} type="video/mp4" />
              {VIDEO.captions && <track kind="captions" src={VIDEO.captions} srcLang="en-GB" label="English" default />}
            </video>
          ) : (
            <>
              {VIDEO.poster && <img src={VIDEO.poster} alt="" width="1600" height="900" loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
              <div style={{ position: 'absolute', left: '6%', right: '6%', top: '50%', color: '#7E76C8', transform: 'translateY(-50%)' }}><ScoreLine color="#7E76C8" settled /></div>
              <button type="button" className="video-play" aria-label={PLAY_LABEL} disabled={!ready} onClick={() => setPlaying(true)}>
                <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true"><path d="M8 5l15 9-15 9V5z" fill="currentColor" /></svg>
              </button>
            </>
          )}
        </div>
        <div className="video-transcript" style={{ marginTop: 28, maxWidth: 720 }}>
          <h2 className="mono" style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 500, opacity: .7, margin: 0 }}>Transcript</h2>
          {TRANSCRIPT.map((t) => <p key={t} style={{ margin: '12px 0 0', lineHeight: 1.6, opacity: .82, fontSize: '0.98rem' }}>{t}</p>)}
        </div>
      </div>
    </section>
  );
}
