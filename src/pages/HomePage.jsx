import { Link } from 'react-router-dom';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { ShaderBG } from '../components/ShaderBG';
import { BookLink } from '../components/BookLink';
import { Section, Bullets, CopyTable, FinalCTA, TextLink, C } from '../components/Blocks';
import { GROUPS } from '../lib/groups';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

const TICKER = [
  '15 hrs → 1 hr a week on invoices',
  '5 hrs a week saved on CRM updates',
  '3× LinkedIn engagement',
  'Live in 4–12 weeks',
  'Your data stays in your systems',
];

// ─── 1. Hero ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section data-section="hero" id="top" style={{
      minHeight: '100vh', position: 'relative', background: C.ink, color: C.white, overflow: 'hidden',
      padding: 'clamp(7rem, 14vh, 10rem) clamp(1.5rem, 5vw, 5rem) clamp(4rem, 8vh, 6rem)',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
    }}>
      <ShaderBG intensity={1.0} opacity={0.95} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'radial-gradient(ellipse 86% 70% at 50% 46%, rgba(11,11,43,.28), rgba(11,11,43,.8) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 1000 }}>
        {/* Remove this banner once 10 firms have signed. */}
        <p data-reveal className="launch-banner">First 10 firms in Bristol and Manchester: Deep Audit free.</p>
        <p data-reveal className="mono" style={{ margin: '0 0 22px', fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: C.blueLite }}>AI and automation for UK small businesses</p>
        <h1 data-reveal className="display" style={{ margin: 0, fontSize: 'clamp(2.6rem, 8vw, 6rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.045em' }}>
          Do what you do best.<br />We&rsquo;ll automate the rest.
        </h1>
        <p data-reveal style={{ maxWidth: 700, marginTop: 'clamp(18px, 2.6vh, 26px)', fontSize: 'clamp(1.02rem, 1.6vw, 1.25rem)', lineHeight: 1.55, opacity: .88 }}>
          We find what&rsquo;s slowing your business down, fix it with AI and automation, and teach your team to run it.
        </p>
        <p data-reveal style={{ maxWidth: 700, marginTop: 14, fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.5, opacity: .75 }}>
          The chasing. The retyping. The missed enquiries. The quotes at 10pm.
        </p>
        <div data-reveal style={{ marginTop: 'clamp(26px, 4vh, 40px)' }}>
          <BookLink className="btn btn-primary" style={{ padding: '18px 28px' }}>Book a free 20-minute call {ARROW}</BookLink>
        </div>
        <p data-reveal style={{ marginTop: 16, fontSize: 14, opacity: .75 }}>Leave with your top three wins on one page. No obligation.</p>
        <div data-reveal style={{ marginTop: 'clamp(24px, 4vh, 40px)' }}>
          <p className="mono" style={{ margin: '0 0 12px', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', opacity: .6 }}>Pick your business</p>
          <div style={{ display: 'flex', gap: '8px 22px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {GROUPS.map((g) => <Link key={g.slug} to={`/${g.slug}`} className="hero-link">{g.name}</Link>)}
          </div>
        </div>
        <ul data-reveal className="ticker mono" style={{ marginTop: 'clamp(28px, 5vh, 48px)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', opacity: .7, lineHeight: 1.7 }}>
          {TICKER.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}

// ─── 2. The problem ───────────────────────────────────────────────────
function Problem() {
  const stats = [
    ['11 hrs', 'a week on admin, for the average UK small business owner.¹'],
    ['Nearly 2×', 'more time on admin than on growing the business.¹'],
    ['1 in 3', 'owners name their own capacity as the biggest brake on growth.¹'],
  ];
  return (
    <Section tone="light" eyebrow="The problem" title="Admin is eating your week.">
      <div className="card-grid c3">
        {stats.map(([n, l]) => (
          <div key={n} data-reveal className="info-card">
            <div className="stat-big">{n}</div>
            <p>{l}</p>
          </div>
        ))}
      </div>
      <p className="footnote">¹ American Express and Small Business Saturday UK, July 2026. <a href="https://channelx.world/2026/07/smes-spend-twice-the-time-on-admin-as-growing-their-business/" target="_blank" rel="noopener noreferrer">Read the coverage</a>.</p>
    </Section>
  );
}

// ─── 3. How it works ──────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    ['Free call.', null, '20 minutes. Your top three wins on one page.'],
    ['Audit.', 'Read the score.', 'We find what’s really slowing your business down, and put a fixed price on every fix. The fee comes off your build.'],
    ['Build.', 'Bring in the parts.', 'We fix it with the right technology, in the tools you already use, and train your team. Live in 4–12 weeks.'],
    ['Care.', 'Keep it in tune.', 'We look after what we built, so it keeps working and keeps improving.'],
  ];
  return (
    <Section id="how-it-works" tone="cream" eyebrow="How it works" title="Four steps, in plain order."
      intro="We look at your whole business. Everything that can run better, will.">
      <ol className="card-grid c4" style={{ listStyle: 'none', padding: 0 }}>
        {steps.map(([t, tune, d], i) => (
          <li key={t} data-reveal className="info-card">
            <span className="mono" style={{ fontSize: 13, letterSpacing: '.2em', color: C.blue }}>0{i + 1}</span>
            <h3 style={{ marginTop: 16, fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)' }}>{t}</h3>
            {tune && <p style={{ fontStyle: 'italic', opacity: .9, marginTop: 6 }}>{tune}</p>}
            <p style={{ opacity: .82, fontSize: '1rem' }}>{d}</p>
          </li>
        ))}
      </ol>
      <div data-reveal style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
        <BookLink className="btn btn-blue">Book a free 20-minute call {ARROW}</BookLink>
      </div>
    </Section>
  );
}

// ─── 4. Results ───────────────────────────────────────────────────────
function Results() {
  return (
    <Section tone="light" eyebrow="Results" title="Real results, in numbers.">
      <CopyTable stack head={['Job', 'Result', 'Cost and payback']} rows={[
        ['Invoice processing', '15 hrs → 1 hr a week', '£3k project, £5k saved in two months'],
        ['CRM updates', '5 hrs a week saved', '£2.5k project, paid back in 10 weeks'],
        ['LinkedIn content', '3× engagement', '30 minutes a week of the founder’s time'],
      ]} />
    </Section>
  );
}

// ─── 5. Who we help ───────────────────────────────────────────────────
function WhoWeHelp() {
  return (
    <Section tone="lite" eyebrow="Who we help" title="Built for how you work.">
      <Bullets items={GROUPS.map((g) => [`${g.name}:`, g.headline])} />
      <TextLink to="/services#who">Find your business</TextLink>
    </Section>
  );
}

// ─── 6. Trust ─────────────────────────────────────────────────────────
function Trust() {
  return (
    <Section tone="ink" shader eyebrow="Security" title="Your data stays yours.">
      <div className="on-ink">
        <Bullets dark items={[
          'We build on test data, not yours',
          'You approve anything that matters',
          'Every run is logged',
          'UK GDPR, in writing',
        ]} />
        <TextLink to="/security">How we protect your data</TextLink>
      </div>
    </Section>
  );
}

export default function HomePage() {
  usePageBoot();
  useMeta('AI Maestro — AI and automation for UK small businesses', 'We find what’s slowing your business down, fix it with AI and automation, and train your team. Book a free 20-minute call.');
  return (
    <>
      <SiteHeader dark />
      <Hero />
      <Problem />
      <HowItWorks />
      <Results />
      <WhoWeHelp />
      <Trust />
      <FinalCTA />
      <SiteFooter />
    </>
  );
}
