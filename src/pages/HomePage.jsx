import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { ShaderBG } from '../components/ShaderBG';
import { SectionLabel } from '../components/SectionLabel';
import { MaestroMark, MaestroMark3D } from '../components/MaestroMark';
import { MaestroIcon } from '../components/MaestroIcon';
import { PathSim } from '../components/PathSim';
import { usePageBoot } from '../hooks/usePageBoot';

gsap.registerPlugin(ScrollTrigger);

const H = { blue: '#1100D8', blueDeep: '#0A0099', blueLite: '#E6E4FF', white: '#FAF8F4', ink: '#0B0B2B' };

// ─── Hero ────────────────────────────────────────────────────────────
function HomeHero() {
  return (
    <section data-section="hero" id="top" style={{
      minHeight: '100vh', position: 'relative',
      paddingTop: 'clamp(7rem, 14vh, 10rem)', paddingBottom: 'clamp(4rem, 8vh, 6rem)',
      paddingLeft: 'clamp(1.5rem, 5vw, 5rem)', paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
      background: H.ink, color: H.white, overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
    }}>
      <ShaderBG intensity={1.0} opacity={0.95} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'radial-gradient(ellipse 86% 70% at 50% 46%, rgba(11,11,43,.28), rgba(11,11,43,.8) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="mono" data-reveal style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: H.blueLite, marginBottom: 'clamp(28px, 5vh, 48px)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="glow" style={{ width: 8, height: 8, borderRadius: '50%', background: H.blueLite, display: 'inline-block' }} />
          Remote-first AI integration · UK
        </div>
        <div data-reveal className="hero-mark hero-mark-float" style={{ marginBottom: 'clamp(24px, 3.5vh, 40px)', width: 'min(126px, 28vw)' }}>
          <MaestroMark size={126} stroke={H.white} />
        </div>
        <h1 data-reveal className="serif" style={{ margin: 0, fontSize: 'clamp(2.75rem, 9vw, 5.75rem)', fontWeight: 400, lineHeight: 1.02, letterSpacing: '.005em', color: H.white, whiteSpace: 'nowrap' }}>
          AI <span style={{ fontStyle: 'italic' }}>maestro</span>
        </h1>
        <div data-reveal className="display" style={{ marginTop: 'clamp(16px, 2.6vh, 28px)', fontSize: 'clamp(1.05rem, 2.6vw, 1.85rem)', fontWeight: 500, letterSpacing: '-.02em', color: H.white }}>
          Orchestrating AI. <span style={{ color: H.blueLite }}>Optimizing operations.</span>
        </div>
        <p data-reveal style={{ maxWidth: 660, marginTop: 'clamp(20px, 3vh, 30px)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.55, color: H.white, opacity: .78 }}>
          Your SMB shouldn&rsquo;t lose 10 hours a week to manual admin. We integrate AI and automation
          into your operations so your team can focus on what matters, efficiency, cost savings, or
          revenue growth in 30–90 days.
        </p>
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
  const items = ['MEASURABLE RESULTS. FAST.', 'AI INTEGRATION', 'WORKFLOW AUTOMATION', 'WEB & APP DEV', 'DIGITAL MARKETING', 'AI CONTENT', 'UK SMB SPECIALIST', 'REMOTE-FIRST'];
  return (
    <div style={{ background: H.ink, color: H.white, padding: '22px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.06)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
      <div className="marquee-track mono" style={{ fontSize: 14, letterSpacing: '.18em' }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 64 }}>
            {t}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="3" fill={H.blueLite} /></svg>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Cursor-proximity headline ────────────────────────────────────────
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function TextCursorProximity({ label, fromColor, toColor, radius = 140 }) {
  const letterRefs = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const chars = label.split('');
  useEffect(() => {
    const onMove = (e) => { mouseRef.current.x = e.clientX; mouseRef.current.y = e.clientY; };
    const onLeave = () => { mouseRef.current.x = -9999; mouseRef.current.y = -9999; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    const fromRGB = hexToRgb(fromColor);
    const toRGB = hexToRgb(toColor);
    let raf;
    const tick = () => {
      letterRefs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = mouseRef.current.x - (r.left + r.width / 2);
        const dy = mouseRef.current.y - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy);
        const p = Math.exp(-Math.pow(dist / (radius / 2), 2) / 2);
        const r2 = Math.round(fromRGB.r + (toRGB.r - fromRGB.r) * p);
        const g2 = Math.round(fromRGB.g + (toRGB.g - fromRGB.g) * p);
        const b2 = Math.round(fromRGB.b + (toRGB.b - fromRGB.b) * p);
        el.style.color = `rgb(${r2},${g2},${b2})`;
        el.style.transform = `scale(${1 + 0.45 * p})`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseleave', onLeave); cancelAnimationFrame(raf); };
  }, [fromColor, toColor, radius]);
  return (
    <span style={{ display: 'inline-block' }}>
      {chars.map((ch, i) => (
        <span key={i} ref={(el) => { letterRefs.current[i] = el; }} style={{ display: 'inline-block', transformOrigin: 'center', willChange: 'transform, color', color: fromColor, whiteSpace: 'pre' }}>{ch}</span>
      ))}
    </span>
  );
}

// ─── About ───────────────────────────────────────────────────────────
function HomeAbout() {
  return (
    <section data-section="about" id="about" style={{ background: H.ink, color: H.white, padding: 'clamp(4rem, 9vw, 7rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden', cursor: 'crosshair' }}>
      <ShaderBG intensity={1.0} opacity={0.9} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,11,43,.55), rgba(11,11,43,.7))', pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 40, right: -80, opacity: .4, pointerEvents: 'none', zIndex: 1 }}>
        <PathSim seed={21} gridW={4} gridH={6} width={360} height={540} stroke={H.white} strokeWidth={2.5} />
      </div>
      <div style={{ position: 'absolute', bottom: -60, left: 100, opacity: .3, pointerEvents: 'none', zIndex: 1 }}>
        <PathSim seed={42} gridW={6} gridH={3} width={520} height={240} stroke={H.blueLite} strokeWidth={2} />
      </div>
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <SectionLabel color={H.blueLite}>About · The agency</SectionLabel>
        <div className="home-about-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginTop: 28 }}>
          <div data-reveal style={{ position: 'relative' }}>
            <h2 className="display" style={{ fontSize: 'clamp(2.25rem, 7vw, 4.5rem)', fontWeight: 700, lineHeight: .92, letterSpacing: '-.045em', margin: 0, color: H.white, textTransform: 'uppercase' }}>
              <div><TextCursorProximity label="ORCHESTRATING" fromColor="#FAF8F4" toColor="#E6E4FF" radius={140} /></div>
              <div style={{ marginTop: 4 }}>
                <TextCursorProximity label="AI ·" fromColor="#FAF8F4" toColor="#E6E4FF" radius={140} />
                <span style={{ display: 'inline-block', width: 20 }} />
                <span className="serif" style={{ fontWeight: 400, fontStyle: 'italic', textTransform: 'none' }}>
                  <TextCursorProximity label="optimizing" fromColor="#FAF8F4" toColor="#7E76C8" radius={140} />
                </span>
              </div>
              <div style={{ marginTop: 4 }}><TextCursorProximity label="OPERATIONS." fromColor="#FAF8F4" toColor="#E6E4FF" radius={140} /></div>
            </h2>
            <p data-reveal className="serif" style={{ fontSize: 'clamp(1rem, 1.7vw, 1.25rem)', lineHeight: 1.25, maxWidth: 640, marginTop: 40, opacity: .9 }}>
              We&rsquo;re a remote-first AI integration firm. Most AI projects fail not because the models are wrong, but because the operations around them are out of sync. We fix that.
            </p>
            <div data-reveal style={{ display: 'flex', gap: 36, marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,.22)', maxWidth: 640, flexWrap: 'wrap' }}>
              {[['03', 'Pillars: Assess · Build · Upskill'], ['UK', 'Remote-first · Nationwide'], ['SMB', 'Small + medium business focus']].map(([n, l]) => (
                <div key={l}>
                  <div className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1 }}>{n}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '.2em', opacity: .75, marginTop: 8, textTransform: 'uppercase' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: 'clamp(320px, 42vh, 460px)' }}>
            <div style={{ position: 'absolute', width: 480, height: 480, maxWidth: '90%', borderRadius: '50%', background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,.18), transparent 60%)', pointerEvents: 'none' }} />
            <MaestroMark3D size={300} faceColor="#FFFFFF" sideColor="#7E76C8" depth={42} spin />
            <div className="mono" style={{ marginTop: 40, fontSize: 11, letterSpacing: '.22em', opacity: .75, textTransform: 'uppercase' }}>The mark · 3D rotation loop</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Value Props carousel ─────────────────────────────────────────────
function ValueProps() {
  const props = [
    { icon: 'brain', tag: 'PRINCIPLE 01', t: 'Deep Understanding', d: 'We learn your business before we build anything. No cookie-cutter solutions, every engagement starts with how you actually work.' },
    { icon: 'target', tag: 'PRINCIPLE 02', t: 'Outcomes Over Hours', d: "You pay for results, not time. We're incentivised to solve your problem, not drag it out across billable hours." },
    { icon: 'network', tag: 'PRINCIPLE 03', t: 'Human + AI', d: 'Human creativity plus AI efficiency. The best of both, working together, never automation for its own sake.' },
  ];
  const [active, setActive] = useState(0);
  const total = props.length;
  const go = (i) => setActive(((i % total) + total) % total);
  const sectionRef = useRef(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onKey = (e) => { if (e.key === 'ArrowRight') go(active + 1); if (e.key === 'ArrowLeft') go(active - 1); };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [active]);
  return (
    <section ref={sectionRef} tabIndex={-1} data-section="values" style={{ background: H.white, color: H.ink, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)', overflow: 'hidden' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(2rem, 4vw, 3.25rem)' }}>
          <div>
            <SectionLabel>Why teams choose us</SectionLabel>
            <h2 data-reveal className="display" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: .98, margin: '20px 0 0', maxWidth: 800 }}>
              Three principles. <span style={{ color: H.blue }}>Zero fluff.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="mono" style={{ fontSize: 13, letterSpacing: '.18em', color: H.blue }}>
              {`0${active + 1}`} <span style={{ opacity: .45 }}>/ 0{total}</span>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button aria-label="Previous" onClick={() => go(active - 1)} className="carousel-arrow on-light">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button aria-label="Next" onClick={() => go(active + 1)} className="carousel-arrow on-light">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
                    <div className="mono" style={{ fontSize: 11, letterSpacing: '.22em', color: H.blue, opacity: .9 }}>{p.tag}</div>
                    <div className="mono" style={{ fontSize: 11, letterSpacing: '.22em', color: H.ink, opacity: .45 }}>{`0${i + 1} / 0${total}`}</div>
                  </div>
                  <div>
                    <MaestroIcon name={p.icon} size={52} color={H.blue} strokeWidth={4} />
                    <div className="display" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-.025em', marginTop: '1.25rem', lineHeight: 1, color: H.ink }}>{p.t}</div>
                    <p style={{ fontSize: '1.02rem', lineHeight: 1.55, marginTop: 16, color: H.ink, opacity: .72, maxWidth: 460 }}>{p.d}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 'clamp(1.75rem, 3vw, 2.5rem)', alignItems: 'center' }}>
          {props.map((p, i) => (
            <button key={p.t} aria-label={`Go to ${p.t}`} onClick={() => go(i)} style={{ height: 6, borderRadius: 999, border: 'none', cursor: 'pointer', padding: 0, width: i === active ? 44 : 18, background: i === active ? H.blue : 'rgba(17,0,216,.25)', transition: 'width .4s cubic-bezier(.22,1,.36,1), background .3s ease' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Recent Work (horizontal-pinned GSAP scroll) ─────────────────────
function RecentWork() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const cases = [
    { tag: 'AI INTEGRATION', icon: 'automate', client: 'Invoice processing', challenge: 'A finance team spent 15 hours every week reading, categorising and logging invoices by hand.', result: '15 hrs → 1 hr / week', metric: '167% ROI', full: 'We integrated AI to read, categorise and log invoices automatically. The handful of edge cases route to a human for a quick review. Cost: £3k. Savings within 2 months: £5k, a 167% return, with the team freed for higher-value finance work.' },
    { tag: 'WORKFLOW AUTOMATION', icon: 'flow', client: 'CRM auto-sync', challenge: 'A sales team manually logged every deal into the CRM after each conversation, slow, and easy to forget.', result: '5 hrs / week saved', metric: '10-week payback', full: 'We connected Slack to the CRM so every deal conversation auto-populates the right record, no copy-paste, no missed updates. Cost: £2.5k, paid back in 10 weeks, with cleaner pipeline data as a bonus.' },
    { tag: 'AI CONTENT', icon: 'spark', client: 'LinkedIn content engine', challenge: 'A founder needed 4 LinkedIn posts a week but had no time to write, so posting stalled.', result: '3× engagement', metric: '30 min / week', full: 'Our AI content engine drafts on-brand posts in about an hour; the founder spends 30 minutes editing and publishing. The result: consistent presence, 3× more engagement, and zero content stress.' },
  ];

  useEffect(() => {
    if (!wrapRef.current || !trackRef.current) return;
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  const panel = { height: '100vh', flex: '0 0 auto', boxSizing: 'border-box', display: 'flex', alignItems: 'center' };

  return (
    <section data-section="work" id="work" style={{ background: H.blueLite, color: H.ink, position: 'relative', overflow: 'hidden' }}>
      <div ref={wrapRef} style={{ position: 'relative', overflow: 'hidden' }}>
        <div ref={trackRef} style={{ display: 'flex', alignItems: 'stretch', willChange: 'transform', height: '100vh' }}>
          <div style={{ ...panel, width: 'min(600px, 88vw)', padding: '0 clamp(1.5rem, 5vw, 5rem)', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: 36, right: -30, opacity: .25, pointerEvents: 'none' }}>
              <PathSim seed={88} gridW={4} gridH={5} width={300} height={380} stroke={H.blue} strokeWidth={2.2} />
            </div>
            <SectionLabel>Recent work</SectionLabel>
            <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .95, margin: '20px 0 0' }}>
              Real results,<br /><span className="serif" style={{ fontWeight: 400, color: H.blue }}>measured.</span>
            </h2>
            <p className="serif" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', marginTop: 20, opacity: .78, maxWidth: 420 }}>
              Three projects, three measurable wins. Scroll sideways through the case studies.
            </p>
            <div className="mono" style={{ marginTop: 32, fontSize: 11, letterSpacing: '.3em', color: H.blue, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12 }}>
              Scroll <span style={{ fontSize: 18 }}>→</span> Cases
            </div>
          </div>
          {cases.map((c, i) => (
            <div key={c.client} style={{ ...panel, width: 'min(480px, 86vw)', padding: '0 clamp(10px, 1.6vw, 22px)' }}>
              <article className="m-card" style={{ width: '100%', maxHeight: '84vh', background: H.white, border: '1px solid rgba(17,0,216,.14)', padding: 'clamp(2rem, 3vw, 2.75rem) clamp(1.7rem, 2.4vw, 2.2rem)', boxShadow: '0 30px 80px rgba(17,0,216,.14)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <MaestroIcon name={c.icon} size={46} color={H.blue} strokeWidth={4} />
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '.2em', color: H.blue, opacity: .8 }}>{c.tag}</span>
                </div>
                <div className="display" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 700, letterSpacing: '-.025em', marginTop: 22, lineHeight: 1.05 }}>{c.client}</div>
                <p style={{ fontSize: '1rem', lineHeight: 1.5, marginTop: 12, opacity: .72 }}>{c.challenge}</p>
                <div style={{ display: 'flex', gap: 14, marginTop: 18, flexWrap: 'wrap' }}>
                  <div style={{ background: H.blueLite, color: H.blue, borderRadius: '999px 6px 6px 6px', padding: '7px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.04em', fontWeight: 500 }}>{c.result}</div>
                  <div style={{ background: H.ink, color: H.white, borderRadius: '999px 6px 6px 6px', padding: '7px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.04em' }}>{c.metric}</div>
                </div>
                <p style={{ fontSize: '0.96rem', lineHeight: 1.6, opacity: .8, margin: 0, marginTop: 18, paddingTop: 18, borderTop: '1px solid rgba(11,11,43,.1)' }}>{c.full}</p>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', color: H.blue, marginTop: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                  CASE 0{i + 1} <span>↗</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What We Do ───────────────────────────────────────────────────────
function WhatWeDo() {
  const services = [
    { icon: 'integrate', t: 'AI Integration', d: "Embed AI into the tasks that eat your team's time." },
    { icon: 'flow', t: 'Workflow Automation', d: 'Connect your tools so data flows without manual handoffs.' },
    { icon: 'build', t: 'Website & App Development', d: 'Fast, modern digital experiences that convert.' },
    { icon: 'chart', t: 'Digital Marketing', d: 'More leads, less guessing, powered by AI.' },
    { icon: 'spark', t: 'AI Content Creation', d: 'Scale your content without burning out.' },
  ];
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
            <p data-reveal className="serif" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', opacity: .82, marginTop: 16, maxWidth: 540 }}>
              Pick what fits your business, or we&rsquo;ll help you figure out what you need.
            </p>
          </div>
          <Link data-reveal to="/services" className="btn btn-primary">All services {ARROW}</Link>
        </div>
        <div style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)', borderTop: '1px solid rgba(255,255,255,.12)' }}>
          {services.map((s, i) => (
            <Link key={s.t} to="/services" data-reveal className="wwd-row" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 'clamp(16px, 3vw, 40px)', padding: 'clamp(20px, 2.8vw, 32px) 0', borderBottom: '1px solid rgba(255,255,255,.12)', textDecoration: 'none', color: H.white, transition: 'padding-left .3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 2.5vw, 32px)' }}>
                <span className="mono" style={{ fontSize: 12, letterSpacing: '.2em', color: H.blueLite, opacity: .7 }}>0{i + 1}</span>
                <MaestroIcon name={s.icon} size={40} color={H.blueLite} strokeWidth={4} />
              </div>
              <div>
                <span className="display" style={{ fontSize: 'clamp(1.4rem, 3.4vw, 2.4rem)', fontWeight: 600, letterSpacing: '-.03em' }}>{s.t}</span>
                <span style={{ display: 'block', fontSize: '0.98rem', opacity: .6, marginTop: 6 }}>{s.d}</span>
              </div>
              <span className="wwd-arrow" style={{ color: H.blueLite, display: 'flex', transition: 'transform .3s ease' }}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M5 13h16m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────
function HomeFAQ() {
  const faqs = [
    { q: 'How long does a project take?', a: '4–12 weeks, depending on scope. We move fast, waiting costs money.' },
    { q: 'What does it cost?', a: "£2–10k per project. Retainers start at £500/month. We're transparent about cost upfront, no billable-hour trap." },
    { q: 'Do you work with non-tech companies?', a: "Yes. We translate AI into language your business understands, and tell you plainly where it's the right tool, and where it isn't." },
    { q: "What if we don't like the result?", a: "We iterate until you do. And if we can't deliver, we say so upfront. No overselling." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section data-section="faq" style={{ background: H.white, color: H.ink, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)' }}>
      <div className="wrap stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.4fr)', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'start' }}>
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 data-reveal className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, margin: '20px 0 0' }}>
            Questions, <span className="serif" style={{ fontWeight: 400, color: H.blue }}>answered.</span>
          </h2>
          <p data-reveal style={{ fontSize: '1.02rem', lineHeight: 1.6, opacity: .7, marginTop: 18, maxWidth: 320 }}>
            Still wondering about something? A 20-minute call clears it up fast.
          </p>
          <Link data-reveal to="/contact" className="btn btn-blue" style={{ marginTop: 24 }}>Ask us anything {ARROW}</Link>
        </div>
        <div data-reveal>
          {faqs.map((f, i) => (
            <div key={f.q} className={`acc-item${open === i ? ' open' : ''}`}>
              <button className="acc-head" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="acc-q">{f.q}</span>
                <span className="acc-icon"><svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 2v11M2 7.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></span>
              </button>
              <div className="acc-body"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer CTA ───────────────────────────────────────────────────────
function FooterCTA() {
  return (
    <section data-section="cta" id="cta" className="cta-gradient" style={{ color: H.white, padding: 'clamp(5rem, 11vw, 9rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 50, right: 70, opacity: .4, pointerEvents: 'none', zIndex: 0 }}>
        <PathSim seed={101} gridW={4} gridH={4} width={300} height={300} stroke={H.white} strokeWidth={2.5} />
      </div>
      <div style={{ position: 'absolute', bottom: -40, left: 50, opacity: .3, pointerEvents: 'none', zIndex: 0 }}>
        <PathSim seed={144} gridW={6} gridH={3} width={520} height={260} stroke={H.white} strokeWidth={2.2} />
      </div>
      <div className="wrap" style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div data-reveal style={{ marginBottom: 28 }}><MaestroMark size={60} stroke={H.white} /></div>
        <h2 data-reveal className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 5.5rem)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .92, margin: 0 }}>
          Ready to unlock<br /><span className="serif" style={{ fontWeight: 400 }}>your potential?</span>
        </h2>
        <p data-reveal style={{ fontSize: 'clamp(1rem, 1.7vw, 1.25rem)', marginTop: 28, opacity: .9, maxWidth: 600 }}>
          Let&rsquo;s talk about what&rsquo;s possible for your business.
        </p>
        <div data-reveal style={{ marginTop: 44 }}>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '20px 32px', fontSize: 16 }}>
            Schedule a Free 20-Minute Discovery Call {ARROW}
          </Link>
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
      <HomeMarquee />
      <HomeAbout />
      <ValueProps />
      <RecentWork />
      <WhatWeDo />
      <HomeFAQ />
      <FooterCTA />
      <SiteFooter />
    </>
  );
}
