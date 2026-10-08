import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { ShaderBG } from '../components/ShaderBG';
import { SectionLabel } from '../components/SectionLabel';
import { MaestroMark3D } from '../components/MaestroMark';
import { MaestroIcon } from '../components/MaestroIcon';
import { usePageBoot } from '../hooks/usePageBoot';
import { BookLink } from '../components/BookLink';
import { ImageSlot } from '../components/ImageSlot';
import { VideoSlot } from '../components/VideoSlot';
import { FLAGS, HERO_LOOP_SRC, IMAGES, DATA_FAQ_ANSWER } from '../lib/config';

const H = { blue: '#1100D8', blueDeep: '#0A0099', blueLite: '#E6E4FF', white: '#FAF8F4', ink: '#0B0B2B', cream: '#F0EEE9' };
// Single accent for the score line and the "out of sync" highlight on dark sections.
// It is the violet the site already uses; brand blue is used on light sections.
const ACCENT_DARK = '#7E76C8';

// ─── Hero ────────────────────────────────────────────────────────────
function HomeHero() {
  const loop = FLAGS.heroLoop && HERO_LOOP_SRC;
  return (
    <section data-section="hero" id="top" style={{
      minHeight: '100vh', position: 'relative',
      paddingTop: 'clamp(7rem, 14vh, 10rem)', paddingBottom: 'clamp(4rem, 8vh, 6rem)',
      paddingLeft: 'clamp(1.5rem, 5vw, 5rem)', paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
      background: H.ink, color: H.white, overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
    }}>
      <ShaderBG intensity={1.0} opacity={0.95} />
      {loop && <video className="hero-loop" src={HERO_LOOP_SRC} autoPlay muted loop playsInline aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .35 }} />}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'radial-gradient(ellipse 86% 70% at 50% 46%, rgba(11,11,43,.28), rgba(11,11,43,.8) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 1000 }}>
        <div className="mono" data-reveal style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: H.blueLite, marginBottom: 'clamp(28px, 5vh, 48px)', display: 'flex', alignItems: 'center', gap: 12, maxWidth: 560, lineHeight: 1.6 }}>
          <span className="glow" style={{ width: 8, height: 8, borderRadius: '50%', background: H.blueLite, display: 'inline-block', flexShrink: 0 }} />
          AI and automation for UK small businesses · Remote-first
        </div>
        {/* TODO(client): confirm "ten hours a week" is a defensible average, or soften it. Used in hero, video and closing CTA. */}
        <h1 data-reveal className="display" style={{ margin: 0, fontSize: 'clamp(2.5rem, 7.5vw, 5.5rem)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-.04em', color: H.white, maxWidth: 1000 }}>
          Give your team back ten hours a week.
        </h1>
        <p data-reveal className="hero-sub" style={{ maxWidth: 660, marginTop: 'clamp(20px, 3vh, 30px)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.55, color: H.white, opacity: .82 }}>
          <span>We put AI and automation to work on the manual admin slowing your business down, then teach your team to run it.</span>{' '}
          <span>Live in 4–12 weeks.</span>{' '}
          <span>Priced on results, not hours.</span>
        </p>
        <div data-reveal style={{ marginTop: 'clamp(24px, 4vh, 36px)', display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <BookLink className="btn btn-primary" style={{ padding: '18px 28px' }}>Book a free 20-minute call {ARROW}</BookLink>
          <a href="#work" className="hero-link">See the results</a>
        </div>
        <p data-reveal style={{ maxWidth: 460, marginTop: 20, fontSize: 13, lineHeight: 1.55, color: H.white, opacity: .7 }}>
          Twenty minutes. Describe a typical week and we&rsquo;ll tell you honestly what&rsquo;s worth automating, and what isn&rsquo;t.
        </p>
        {/* IMAGE SLOT hero: landscape crop plus a tighter portrait crop for mobile. Set src in lib/config.js (IMAGES.hero). Keep under 200 KB. */}
        <div style={{ width: 'min(900px, 100%)', marginTop: 32 }}><ImageSlot image={IMAGES.hero} eager /></div>
      </div>
      <div className="scroll-cue" style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, zIndex: 5 }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .6 }}>Scroll</div>
        <div style={{ width: 1, height: 38, background: H.white, opacity: .35 }} />
      </div>
    </section>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────
function HomeMarquee() {
  const items = ['15 hrs → 1 hr a week on invoices', '5 hrs a week saved on CRM updates', '3× LinkedIn engagement', 'Live in 4–12 weeks', 'UK small businesses', 'Remote-first'];
  return (
    <div style={{ background: H.ink, color: H.white, padding: '22px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.06)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
      <div className="marquee-track mono" style={{ fontSize: 14, letterSpacing: '.18em', textTransform: 'uppercase' }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} aria-hidden={i >= items.length ? 'true' : undefined} style={{ display: 'inline-flex', alignItems: 'center', gap: 64 }}>
            {t}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="3" fill={H.blueLite} /></svg>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── About ───────────────────────────────────────────────────────────
function HomeAbout() {
  return (
    <section data-section="about" id="about" style={{ background: H.ink, color: H.white, padding: 'clamp(4rem, 9vw, 7rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <ShaderBG intensity={1.0} opacity={0.9} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,11,43,.55), rgba(11,11,43,.7))', pointerEvents: 'none', zIndex: 1 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <SectionLabel color={H.blueLite}>About · Who we are</SectionLabel>
        <div className="home-about-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginTop: 28 }}>
          <div data-reveal style={{ position: 'relative' }}>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5.2vw, 3.5rem)', fontWeight: 600, lineHeight: 1.05, letterSpacing: '-.035em', margin: 0, color: H.white }}>
              Most AI projects fail because the business around them is <span style={{ color: ACCENT_DARK }}>out of sync.</span>
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.6, maxWidth: 640, marginTop: 32, opacity: .88 }}>
              The tools work. What goes wrong is everything around them: handoffs nobody owns, data kept in four places, a team nobody trained. We fix that part first, so the AI has something solid to work with.
            </p>
            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.6, maxWidth: 640, marginTop: 16, opacity: .88 }}>
              We&rsquo;re a remote-first team working with UK businesses. We learn how you actually work, build what fits, and teach your people to run it. You don&rsquo;t pay us forever to keep it going.
            </p>
            {/* FOUNDER SLOT: name, photo and two-line bio go here once the client supplies them. Do not add a person until then. */}
            <div style={{ maxWidth: 640, marginTop: 28 }}><ImageSlot image={IMAGES.about} /></div>
            <div style={{ display: 'flex', gap: 36, marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,.22)', maxWidth: 640, flexWrap: 'wrap' }}>
              {[['3', 'Steps: assess, build, hand over'], ['UK', 'Working with businesses nationwide, remotely'], ['1', 'Aim: your team free of manual admin']].map(([n, l]) => (
                <div key={l} style={{ maxWidth: 170 }}>
                  <div className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1 }}>{n}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '.16em', opacity: .75, marginTop: 8, textTransform: 'uppercase', lineHeight: 1.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: 'clamp(320px, 42vh, 460px)' }}>
            <div style={{ position: 'absolute', width: 480, height: 480, maxWidth: '90%', borderRadius: '50%', background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,.18), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', maxWidth: '100%' }}>
              <MaestroMark3D size={300} faceColor="#FFFFFF" sideColor="#7E76C8" depth={42} spin />
            </div>
            <div className="mono" style={{ marginTop: 40, fontSize: 11, letterSpacing: '.18em', opacity: .75, textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.6 }}>The loop closes when everything is in sync.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Principles carousel ──────────────────────────────────────────────
function ValueProps() {
  const props = [
    { icon: 'brain', tag: 'PROMISE 01', t: 'We learn your business first.', img: IMAGES.principle1, d: 'Before we build anything, we look at how you actually work: the handoffs, the spreadsheets, the workarounds. No off-the-shelf plans.' },
    // Promise 02: the sentence on how pricing works is held back until the client supplies it.
    { icon: 'target', tag: 'PROMISE 02', t: 'You pay for results, not hours.', d: "We're paid to solve the problem, not to stretch it out." },
    { icon: 'network', tag: 'PROMISE 03', t: 'People stay in charge.', img: IMAGES.principle3, d: 'AI does the repetitive part. Your team keeps the judgement, the relationships and the final say. We never automate something just because we can.' },
  ];
  const [active, setActive] = useState(0);
  const total = props.length;
  const go = (i) => setActive(((i % total) + total) % total);
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef} tabIndex={-1} data-section="values" onKeyDown={(e) => { if (e.key === 'ArrowRight') go(active + 1); if (e.key === 'ArrowLeft') go(active - 1); }} style={{ background: H.white, color: H.ink, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)', overflow: 'hidden' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(2rem, 4vw, 3.25rem)' }}>
          <div>
            <SectionLabel>How we work</SectionLabel>
            <h2 data-reveal className="display" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: .98, margin: '20px 0 0', maxWidth: 800 }}>
              Three promises about how we work.
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="mono" style={{ fontSize: 13, letterSpacing: '.18em', color: H.blue }}>
              {`0${active + 1}`} <span style={{ opacity: .65 }}>/ 0{total}</span>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button type="button" aria-label="Previous promise" onClick={() => go(active - 1)} className="carousel-arrow on-light">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button type="button" aria-label="Next promise" onClick={() => go(active + 1)} className="carousel-arrow on-light">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div style={{ overflow: 'hidden', margin: '0 -8px' }}>
          <div className="carousel-track" style={{ display: 'flex', gap: 'clamp(16px, 2vw, 28px)', padding: '0 8px', transition: 'transform .6s cubic-bezier(.22,1,.36,1)', transform: `translateX(calc(${-active} * (var(--card-w) + clamp(16px, 2vw, 28px))))` }}>
            {props.map((p, i) => {
              const isActive = i === active;
              return (
                <article key={p.t} onClick={() => go(i)} style={{
                  flex: '0 0 var(--card-w)',
                  background: isActive ? H.white : 'rgba(255,255,255,.7)',
                  border: `1px solid ${isActive ? 'rgba(17,0,216,.4)' : 'rgba(17,0,216,.12)'}`,
                  borderRadius: 'clamp(120px, 16vw, 220px) 1.25rem 1.25rem 1.25rem',
                  padding: 'clamp(2rem, 3.2vw, 3rem) clamp(1.5rem, 2.6vw, 2.5rem) clamp(1.5rem, 2.6vw, 2.5rem) clamp(2rem, 3.2vw, 3.25rem)',
                  boxShadow: isActive ? '0 40px 90px rgba(17,0,216,.18)' : '0 16px 40px rgba(17,0,216,.07)',
                  opacity: isActive ? 1 : 0.6,
                  transform: isActive ? 'translateY(0) scale(1)' : 'translateY(14px) scale(.97)',
                  transition: 'opacity .5s ease, transform .5s cubic-bezier(.22,1,.36,1), background .4s ease, border-color .4s ease, box-shadow .4s ease',
                  cursor: isActive ? 'default' : 'pointer',
                  minHeight: 'clamp(360px, 46vh, 460px)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className="mono" style={{ fontSize: 11, letterSpacing: '.22em', color: H.blue }}>{p.tag}</div>
                    <div className="mono" style={{ fontSize: 11, letterSpacing: '.22em', color: H.ink, opacity: .6 }}>{`0${i + 1} / 0${total}`}</div>
                  </div>
                  <div>
                    <MaestroIcon name={p.icon} size={52} color={H.blue} strokeWidth={4} />
                    <h3 className="display" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-.025em', margin: '1.25rem 0 0', lineHeight: 1.05, color: H.ink }}>{p.t}</h3>
                    <p style={{ fontSize: '1.02rem', lineHeight: 1.55, marginTop: 16, color: H.ink, opacity: .75, maxWidth: 460 }}>{p.d}</p>
                    {p.img && <div style={{ marginTop: 16, maxWidth: 460 }}><ImageSlot image={p.img} /></div>}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 'clamp(1.75rem, 3vw, 2.5rem)', alignItems: 'center' }}>
          {props.map((p, i) => (
            <button type="button" key={p.t} aria-label={`Go to promise ${i + 1}`} aria-current={i === active} onClick={() => go(i)} style={{ height: 6, borderRadius: 999, border: 'none', cursor: 'pointer', padding: 0, width: i === active ? 44 : 18, background: i === active ? H.blue : 'rgba(17,0,216,.25)', transition: 'width .4s cubic-bezier(.22,1,.36,1), background .3s ease' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────
// Placeholder line art in score-line style until the designer supplies final illustrations.
const STEP_ART = {
  listen: <path d="M8 40h8l6-14 8 28 8-40 8 34 6-16h12" />,
  connect: <><circle cx="18" cy="40" r="9" /><circle cx="62" cy="40" r="9" /><path d="M27 40h26M46 33l7 7-7 7" /></>,
  handover: <><circle cx="16" cy="44" r="7" /><circle cx="64" cy="44" r="7" /><path d="M23 44h34M30 32a14 10 0 0 1 20 0M50 32l-1-6M50 32l-6 1" /></>,
};

function HowItWorks() {
  const steps = [
    { art: 'listen', t: 'Assess.', sub: 'Read the score.', d: 'A 20-minute call, then a closer look at how your team works. We find the two or three jobs that cost you most time, and tell you plainly which are worth automating and which aren’t.' },
    { art: 'connect', t: 'Build.', sub: 'Bring in the parts.', d: 'We build and connect the AI and automation, test it on your real work, and go live in weeks. Anything unusual goes to a person for a quick check.' },
    { art: 'handover', t: 'Hand over.', sub: 'Pass the baton.', d: 'We train your team and leave clear notes, so the people who use it every day can run it, adjust it and spot when something looks off.' },
  ];
  return (
    <section data-section="how" id="how-it-works" style={{ background: H.cream, color: H.ink, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)' }}>
      <div className="wrap">
        <SectionLabel>How it works</SectionLabel>
        <h2 data-reveal className="display" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, margin: '20px 0 0' }}>Three steps, in plain order.</h2>
        <p data-reveal style={{ fontSize: '1.05rem', lineHeight: 1.6, opacity: .75, marginTop: 16, maxWidth: 520 }}>Most projects take 4–12 weeks from first call to going live.</p>
        <ol className="hiw-grid" style={{ listStyle: 'none', padding: 0, margin: 'clamp(2.5rem, 5vw, 4rem) 0 0' }}>
          {steps.map((st, i) => (
            <li key={st.t} data-reveal className="hiw-step">
              <div className="hiw-num mono">{i + 1}</div>
              <svg aria-hidden="true" viewBox="0 0 80 80" width="88" height="88" fill="none" stroke={H.blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', marginTop: 28 }}>{STEP_ART[st.art]}</svg>
              <h3 className="display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-.03em', margin: '20px 0 0', lineHeight: 1 }}>{st.t}</h3>
              <div className="serif" style={{ fontStyle: 'italic', fontSize: '1.05rem', color: H.blue, marginTop: 6 }}>{st.sub}</div>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, marginTop: 14, opacity: .8, maxWidth: 380 }}>{st.d}</p>
            </li>
          ))}
        </ol>
        <div data-reveal style={{ marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          <BookLink className="btn btn-blue">Start with a free call {ARROW}</BookLink>
        </div>
      </div>
    </section>
  );
}

// ─── Recent work (sideways scroller with arrows) ─────────────────────
function RecentWork() {
  const scrollerRef = useRef(null);
  const cases = [
    { tag: 'AI INTEGRATION', icon: 'automate', img: IMAGES.case1, client: 'Invoice processing', problem: 'A finance team spent 15 hours a week reading, categorising and logging invoices by hand.', stats: ['15 hrs → 1 hr a week', '£3k project, £5k saved in two months'], did: 'We built AI to read, categorise and log each invoice. The few unusual ones go to a person for a quick check. The team now spends that time on finance work that needs a human.' },
    { tag: 'WORKFLOW AUTOMATION', icon: 'flow', img: IMAGES.case2, client: 'CRM auto-sync', problem: 'A sales team logged every deal in the CRM by hand after each conversation. It was slow, and updates got forgotten.', stats: ['5 hrs a week saved', '£2.5k project, paid back in 10 weeks'], did: 'We connected Slack to the CRM, so every deal conversation fills in the right record by itself. No copy-paste, no missed updates, and cleaner pipeline data as a bonus.' },
    { tag: 'AI CONTENT', icon: 'spark', img: IMAGES.case3, client: 'LinkedIn content engine', problem: 'A founder needed four LinkedIn posts a week but had no time to write them, so posting stopped.', stats: ['3× engagement', '30 minutes a week of the founder’s time'], did: 'Our content engine drafts on-brand posts in about an hour. The founder spends 30 minutes editing and publishing. Posting is steady again, and nobody is stressing about the next one.' },
  ];
  // Drag to scroll (mouse and pen; touch uses native swipe).
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const onPointerDown = (e) => {
    if (e.pointerType === 'touch') return;
    const el = scrollerRef.current;
    drag.current = { down: true, x: e.clientX, left: el.scrollLeft, moved: false };
    el.classList.add('dragging');
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 3) d.moved = true;
    scrollerRef.current.scrollLeft = d.left - dx;
  };
  const endDrag = (e) => {
    if (!drag.current.down) return;
    drag.current.down = false;
    const el = scrollerRef.current;
    el.classList.remove('dragging');
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };
  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('.work-card');
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section data-section="work" id="work" style={{ background: H.blueLite, color: H.ink, position: 'relative', overflow: 'hidden', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
      <div className="wrap" style={{ maxWidth: 'none', padding: '0 clamp(1.5rem, 5vw, 5rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <SectionLabel>Recent work</SectionLabel>
            <h2 data-reveal className="display" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .98, margin: '20px 0 0' }}>Real results, in numbers.</h2>
            <p data-reveal style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.55, marginTop: 18, opacity: .8, maxWidth: 480 }}>
              Three projects. What the problem was, what we did, what it cost, what came back.
            </p>
          </div>
          <div className="work-arrows" style={{ display: 'flex', gap: 10 }}>
            <button type="button" aria-label="Previous case study" onClick={() => scrollBy(-1)} className="carousel-arrow on-light">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button type="button" aria-label="Next case study" onClick={() => scrollBy(1)} className="carousel-arrow on-light">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div ref={scrollerRef} className="work-scroller" role="region" aria-label="Case studies" tabIndex={0} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={endDrag} onPointerCancel={endDrag}>
        {cases.map((c, i) => (
          <article key={c.client} className="work-card" style={{ background: H.white, border: '1px solid rgba(17,0,216,.14)', padding: 'clamp(1.8rem, 3vw, 2.5rem) clamp(1.5rem, 2.4vw, 2.1rem)', boxShadow: '0 30px 80px rgba(17,0,216,.14)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <MaestroIcon name={c.icon} size={46} color={H.blue} strokeWidth={4} />
              <span className="mono" style={{ fontSize: 10, letterSpacing: '.2em', color: H.blue }}>{c.tag}</span>
            </div>
            <ImageSlot image={c.img} style={{ marginTop: 18, borderRadius: 8 }} />
            <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 700, letterSpacing: '-.025em', margin: '22px 0 0', lineHeight: 1.05 }}>Case 0{i + 1}. {c.client}</h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.5, marginTop: 12, opacity: .8 }}>{c.problem}</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
              <div style={{ background: H.blueLite, color: H.blue, borderRadius: '999px 6px 6px 6px', padding: '7px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.02em', fontWeight: 600 }}>{c.stats[0]}</div>
              <div style={{ background: H.ink, color: H.white, borderRadius: '999px 6px 6px 6px', padding: '7px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.02em' }}>{c.stats[1]}</div>
            </div>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.6, opacity: .85, margin: 0, marginTop: 18, paddingTop: 18, borderTop: '1px solid rgba(11,11,43,.1)' }}>{c.did}</p>
          </article>
        ))}
      </div>
      <div className="wrap" style={{ maxWidth: 'none', padding: '0 clamp(1.5rem, 5vw, 5rem)' }}>
        <div data-reveal style={{ marginTop: 'clamp(2rem, 4vw, 3rem)', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <p className="display" style={{ margin: 0, fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 600, letterSpacing: '-.02em' }}>Want numbers like these for your business?</p>
          <BookLink className="btn btn-blue">Book a free call {ARROW}</BookLink>
        </div>
      </div>
    </section>
  );
}

// ─── What We Do ───────────────────────────────────────────────────────
function WhatWeDo() {
  const lead = [
    { icon: 'integrate', t: 'AI Integration', d: "Put AI to work on the tasks that eat your team's time: reading, sorting, drafting, logging." },
    { icon: 'flow', t: 'Workflow Automation', d: 'Connect the tools you already use so information moves on its own, with no copy-paste and no handoffs to forget.' },
  ];
  const more = [
    { icon: 'build', t: 'Website & App Development', d: 'Fast, clear websites and apps that turn visitors into enquiries.' },
    { icon: 'chart', t: 'Digital Marketing', d: "More of the right leads, with AI doing the groundwork and less guesswork about what's working." },
    { icon: 'spark', t: 'AI Content Creation', d: 'A steady stream of on-brand content, without burning out you or your team.' },
  ];
  const card = (s, n, big) => (
    <Link key={s.t} to="/services" data-reveal className={`svc-card${big ? ' big' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <MaestroIcon name={s.icon} size={big ? 52 : 38} color={H.blueLite} strokeWidth={4} />
        <span className="mono" style={{ fontSize: 12, letterSpacing: '.2em', color: H.blueLite, opacity: .75 }}>0{n}</span>
      </div>
      <h3 className="display" style={{ fontSize: big ? 'clamp(1.6rem, 3vw, 2.3rem)' : 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600, letterSpacing: '-.03em', margin: big ? '28px 0 0' : '20px 0 0', lineHeight: 1.1 }}>{s.t}</h3>
      <p style={{ fontSize: big ? '1.02rem' : '0.95rem', lineHeight: 1.55, opacity: .75, margin: '10px 0 0' }}>{s.d}</p>
    </Link>
  );
  return (
    <section data-section="services" id="services" style={{ background: H.ink, color: H.white, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <ShaderBG intensity={1.0} opacity={0.8} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,11,43,.62), rgba(11,11,43,.82))', pointerEvents: 'none', zIndex: 1 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <SectionLabel color={H.blueLite}>What we do</SectionLabel>
            <h2 data-reveal className="display" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: .98, margin: '20px 0 0', maxWidth: 760 }}>
              Five ways we put AI to work.
            </h2>
            <p data-reveal style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.55, opacity: .85, marginTop: 16, maxWidth: 540 }}>
              Not sure which fits? Start with a call and we&rsquo;ll work it out together.
            </p>
          </div>
          <Link data-reveal to="/services" className="btn btn-primary">All services {ARROW}</Link>
        </div>
        <div className="svc-grid-lg">{lead.map((s, i) => card(s, i + 1, true))}</div>
        <div className="mono" style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: H.blueLite, opacity: .8, margin: 'clamp(2rem, 4vw, 3rem) 0 16px' }}>Also available</div>
        <div className="svc-grid-sm">{more.map((s, i) => card(s, i + 3, false))}</div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────
function HomeFAQ() {
  const faqs = [
    { q: 'How long does a project take?', a: "Usually 4–12 weeks, depending on scope. After the first call we'll give you a realistic timeline, and we won't promise a date we can't hit." },
    { q: 'What does it cost?', a: 'It depends on what we’re automating, so we agree the scope and the price before we start. For a sense of range: the invoice project cost £3k and the CRM sync £2.5k.' },
    { q: 'Do you work with non-tech companies?', a: "Yes. You don't need any technical knowledge. Tell us how your week actually goes and we'll handle the rest, explained in plain English." },
    { q: "What if we don't like the result?", a: 'Tell us early and we’ll fix it.' },
    { q: 'Will AI replace my team?', a: 'No. We automate repetitive tasks, not people. Your team keeps the judgement, the relationships and the final say.' },
    // Hidden until the client supplies the answer (UK GDPR statement). See lib/config.js.
    ...(FLAGS.showDataFaq && DATA_FAQ_ANSWER ? [{ q: 'Is our data safe?', a: DATA_FAQ_ANSWER }] : []),
  ];
  // Every answer is expanded on first load; visitors can still collapse them.
  const [closed, setClosed] = useState(() => new Set());
  const toggle = (i) => setClosed((prev) => { const n = new Set(prev); if (n.has(i)) n.delete(i); else n.add(i); return n; });
  return (
    <section data-section="faq" style={{ background: H.white, color: H.ink, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)' }}>
      <div className="wrap stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.4fr)', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'start' }}>
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 data-reveal className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, margin: '20px 0 0' }}>
            Questions, answered.
          </h2>
          <p data-reveal style={{ fontSize: '1.02rem', lineHeight: 1.6, opacity: .75, marginTop: 18, maxWidth: 320 }}>
            Still wondering? A 20-minute call clears most things up.
          </p>
          <BookLink data-reveal className="btn btn-blue" style={{ marginTop: 24 }}>Book a free 20-minute call {ARROW}</BookLink>
        </div>
        <div data-reveal>
          {faqs.map((f, i) => {
            const isOpen = !closed.has(i);
            return (
              <div key={f.q} className={`acc-item${isOpen ? ' open' : ''}`}>
                <h3 style={{ margin: 0 }}>
                  <button type="button" className="acc-head" onClick={() => toggle(i)} aria-expanded={isOpen} aria-controls={`faq-${i}`}>
                    <span className="acc-q">{f.q}</span>
                    <span className="acc-icon"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M7.5 2v11M2 7.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></span>
                  </button>
                </h3>
                <div className="acc-body" id={`faq-${i}`}><p>{f.a}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Closing CTA ──────────────────────────────────────────────────────
function FooterCTA() {
  return (
    <section data-section="cta" id="cta" className="cta-gradient" style={{ color: H.white, padding: 'clamp(5rem, 11vw, 9rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap" style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 'min(720px, 100%)', marginBottom: 28 }}><ImageSlot image={IMAGES.cta} /></div>
        <h2 data-reveal className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 5.5rem)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .95, margin: 0 }}>
          Let&rsquo;s find your ten hours.
        </h2>
        <p data-reveal style={{ fontSize: 'clamp(1rem, 1.7vw, 1.25rem)', marginTop: 28, opacity: .92, maxWidth: 560 }}>
          Tell us about a typical week. We&rsquo;ll tell you honestly what&rsquo;s worth automating.
        </p>
        <div data-reveal style={{ marginTop: 44 }}>
          <BookLink className="btn btn-primary" style={{ padding: '20px 32px', fontSize: 16 }}>
            Book a free 20-minute call {ARROW}
          </BookLink>
        </div>
      </div>
    </section>
  );
}

// ─── Page composition ─────────────────────────────────────────────────
export default function HomePage() {
  usePageBoot();
  return (
    <>
      <SiteHeader dark={true} />
      <HomeHero />
      <VideoSlot />
      <HomeMarquee />
      <HomeAbout />
      <ValueProps />
      <HowItWorks />
      <RecentWork />
      <WhatWeDo />
      <HomeFAQ />
      <FooterCTA />
      <SiteFooter />
    </>
  );
}
