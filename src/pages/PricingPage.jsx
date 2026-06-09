import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { SectionLabel } from '../components/SectionLabel';
import { MaestroIcon } from '../components/MaestroIcon';
import { PathSim } from '../components/PathSim';
import { HRail } from '../components/HRail';
import { CTASection } from '../components/CTASection';
import { usePageBoot } from '../hooks/usePageBoot';

const P = { blue: '#1100D8', blueLite: '#E6E4FF', white: '#FAF8F4', ink: '#0B0B2B' };

const PLANS = [
  {
    name: 'Project-Based', kind: 'One-time', icon: 'target', featured: false,
    best: 'Clients with a specific goal, an automation, a website, a campaign.',
    tiers: [['Small projects', '£2–4k'], ['Medium projects', '£5–8k'], ['Large / custom', 'Quote to scope']],
    note: 'Timeline: 4–12 weeks depending on complexity.',
  },
  {
    name: 'Retainer', kind: 'Monthly', icon: 'automate', featured: true,
    best: 'Clients who need ongoing support, optimisation, or content.',
    tiers: [['Basic · 5–10 hrs/mo', '£500–750/mo'], ['Standard · 15–20 hrs/mo', '£1,000–1,500/mo'], ['Premium · 25+ hrs/mo', '£2,000/mo+']],
    note: 'Includes support, maintenance, optimisation, and ongoing development.',
  },
  {
    name: 'Hybrid', kind: 'Project + Retainer', icon: 'integrate', featured: false,
    best: 'Clients who want us to build it, then keep it running.',
    tiers: [['Initial build', 'from £4k'], ['Then monthly', 'from £500/mo'], ['Typical term', '12 months']],
    note: 'Example: £4k initial project + £500/mo for 12 months. We build it right, then keep it optimised.',
  },
];

function PricingCard({ p }) {
  const dark = p.featured;
  const fg = dark ? P.white : P.ink;
  const sub = dark ? 'rgba(255,255,255,.72)' : 'rgba(11,11,43,.7)';
  const line = dark ? 'rgba(255,255,255,.18)' : 'rgba(11,11,43,.12)';
  const accent = dark ? P.blueLite : P.blue;
  return (
    <article data-reveal className="m-card" style={{
      background: dark ? P.blue : P.white, color: fg,
      border: `1px solid ${dark ? P.blue : 'rgba(11,11,43,.1)'}`,
      padding: 'clamp(2rem, 3vw, 2.75rem)',
      boxShadow: dark ? '0 40px 90px rgba(17,0,216,.32)' : '0 18px 50px rgba(17,0,216,.06)',
      transform: dark ? 'translateY(-12px)' : 'none',
      display: 'flex', flexDirection: 'column',
      position: 'relative', zIndex: dark ? 2 : 1,
    }}>
      {dark && <div className="mono" style={{ position: 'absolute', top: 20, right: 22, fontSize: 10, letterSpacing: '.2em', background: P.white, color: P.blue, padding: '5px 10px', borderRadius: '999px 4px 4px 4px' }}>MOST POPULAR</div>}
      <MaestroIcon name={p.icon} size={44} color={accent} strokeWidth={4} />
      <div className="display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', fontWeight: 700, letterSpacing: '-.03em', marginTop: 22, lineHeight: 1 }}>{p.name}</div>
      <div className="mono" style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: accent, marginTop: 8 }}>{p.kind}</div>
      <p style={{ fontSize: '0.96rem', lineHeight: 1.5, color: sub, marginTop: 14, minHeight: 64 }}>{p.best}</p>
      <div style={{ borderTop: `1px solid ${line}`, marginTop: 8 }}>
        {p.tiers.map(([t, v]) => (
          <div key={t} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, padding: '14px 0', borderBottom: `1px solid ${line}` }}>
            <span style={{ fontSize: '0.96rem', opacity: .9 }}>{t}</span>
            <span className="mono" style={{ fontSize: '1rem', color: accent, fontWeight: 500, whiteSpace: 'nowrap' }}>{v}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.86rem', lineHeight: 1.5, color: sub, marginTop: 16, flex: 1 }}>{p.note}</p>
      <Link to="/contact" className={dark ? 'btn btn-primary' : 'btn btn-ink'} style={{ marginTop: 22, justifyContent: 'center' }}>Get started {ARROW}</Link>
    </article>
  );
}

function NotIncluded() {
  const items = [
    ['Endless revisions', 'We include 2–3 rounds, then charge for more.'],
    ['Scope creep', 'We define scope upfront; change orders cover changes.'],
    ['24/7 support', 'Available during business hours plus emergency response.'],
  ];
  return (
    <section data-section="not-included" style={{ background: P.ink, color: P.white, padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: -50, right: 40, opacity: .16, pointerEvents: 'none' }}>
        <PathSim seed={92} gridW={4} gridH={4} width={280} height={280} stroke={P.blueLite} strokeWidth={2.2} />
      </div>
      <div className="wrap" style={{ position: 'relative' }}>
        <SectionLabel color={P.blueLite}>Honest about scope</SectionLabel>
        <h2 data-reveal className="display" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, margin: '20px 0 0', maxWidth: 700 }}>
          What&rsquo;s <span className="serif" style={{ fontWeight: 400, color: P.blueLite }}>not</span> included.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(16px, 2vw, 26px)', marginTop: 'clamp(2.25rem, 4vw, 3.25rem)' }}>
          {items.map(([t, d]) => (
            <div key={t} data-reveal style={{ borderTop: '2px solid rgba(230,228,255,.4)', paddingTop: 20 }}>
              <div className="display" style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)', fontWeight: 600, letterSpacing: '-.02em' }}>{t}</div>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.55, opacity: .72, marginTop: 10 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingFAQ() {
  const faqs = [
    ['Do you offer discounts for long-term contracts?', 'Yes. Retainers of 6+ months get 10–15% off. Multi-project deals get custom pricing.'],
    ['What if we go over budget?', 'We flag scope changes upfront. No surprise overages, ever.'],
    ['What are your payment terms?', '50% upfront to kick off, 50% on delivery. Retainers are billed monthly, due on the 1st.'],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section data-section="pricing-faq" style={{ background: P.white, color: P.ink, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)' }}>
      <div className="wrap" style={{ maxWidth: 880 }}>
        <SectionLabel>The fine print</SectionLabel>
        <h2 data-reveal className="display" style={{ fontSize: 'clamp(1.9rem, 5vw, 3rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, margin: '20px 0 clamp(1.5rem, 3vw, 2.5rem)' }}>
          Pricing, <span className="serif" style={{ fontWeight: 400, color: P.blue }}>plainly.</span>
        </h2>
        <div data-reveal>
          {faqs.map(([q, a], i) => (
            <div key={q} className={`acc-item${open === i ? ' open' : ''}`}>
              <button className="acc-head" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="acc-q">{q}</span>
                <span className="acc-icon"><svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 2v11M2 7.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></span>
              </button>
              <div className="acc-body"><p>{a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  usePageBoot();
  return (
    <>
      <SiteHeader dark={true} />
      <PageHero
        eyebrow="Pricing"
        title={<>Pricing that <span className="serif" style={{ fontWeight: 400, color: '#E6E4FF' }}>makes sense.</span></>}
        sub="We're transparent about cost. No surprise fees. No billable-hour trap. You know exactly what you're getting and what you're paying."
        minH="60vh"
      />
      <section data-section="plans" style={{ background: P.white, color: P.ink, padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 5vw, 5rem)' }}>
        <div className="wrap">
          <HRail ariaLabel="Pricing plans" label="Drag to compare plans" minItem={440}>
            {PLANS.map((p) => <PricingCard key={p.name} p={p} />)}
          </HRail>
        </div>
      </section>
      <NotIncluded />
      <PricingFAQ />
      <CTASection
        kicker="Not sure what you need?"
        title={<>We&rsquo;ll recommend <span className="serif" style={{ fontWeight: 400 }}>the right option.</span></>}
        sub="Tell us your situation, we'll point you to the best fit, honestly."
      />
      <SiteFooter />
    </>
  );
}
