import { Link } from 'react-router-dom';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { ShaderBG } from '../components/ShaderBG';
import { MaestroIcon } from '../components/MaestroIcon';
import { BookLink } from '../components/BookLink';
import { Section, Bullets, FinalCTA, TextLink, C } from '../components/Blocks';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

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
        <h1 data-reveal className="display" style={{ margin: 0, fontSize: 'clamp(2.6rem, 8vw, 6rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.045em' }}>
          Everything that can run better, will.
        </h1>
        <p data-reveal style={{ maxWidth: 700, marginTop: 'clamp(22px, 3.4vh, 34px)', fontSize: 'clamp(1.02rem, 1.6vw, 1.25rem)', lineHeight: 1.55, opacity: .85 }}>
          AI Maestro audits your whole business for free, then automates and optimises everything that can be, inside the tools you already use. Your team is trained to run it. Live in 4 to 12 weeks.
        </p>
        <div data-reveal style={{ marginTop: 'clamp(26px, 4vh, 40px)', display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <BookLink className="btn btn-primary" style={{ padding: '18px 28px' }}>Get my free audit {ARROW}</BookLink>
          <a href="#how-it-works" className="hero-link">See how it works</a>
        </div>
        <p data-reveal className="mono" style={{ marginTop: 28, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .7, lineHeight: 1.7 }}>
          Free for UK small businesses · No obligation · Your data stays yours
        </p>
      </div>
    </section>
  );
}

// ─── 2. The problem ───────────────────────────────────────────────────
function Problem() {
  const stats = [
    ['11 hours a week', 'the time the average UK small business owner spends on admin.¹'],
    ['Nearly 2x', 'how much longer owners spend on admin than on sales and growth.¹'],
    ['1 in 3', 'owners who say their own lack of capacity is the biggest barrier to growth.¹'],
  ];
  return (
    <Section tone="light" eyebrow="The problem" title="Your business is working harder than it needs to."
      intro="Missed calls. Quotes nobody chased. Data typed in twice. Reports that eat a day. None of it is anyone's fault. It's how things grew. But it adds up.">
      <div className="card-grid c3">
        {stats.map(([n, l]) => (
          <div key={n} data-reveal className="info-card">
            <div className="stat-big">{n}</div>
            <p>{l}</p>
          </div>
        ))}
      </div>
      <p className="footnote">¹ American Express and Small Business Saturday UK, SME Business Barometer, July 2026. <a href="https://channelx.world/2026/07/smes-spend-twice-the-time-on-admin-as-growing-their-business/" target="_blank" rel="noopener noreferrer">Read the coverage</a>.</p>
    </Section>
  );
}

// ─── 3. The promise ───────────────────────────────────────────────────
function ThePromise() {
  return (
    <Section tone="ink" shader eyebrow="The promise" title="One deep audit. Every inefficiency found.">
      <p data-reveal style={{ fontSize: 'clamp(1.02rem, 1.5vw, 1.2rem)', lineHeight: 1.65, opacity: .88, marginTop: 20, maxWidth: 680 }}>
        We look at how your business sells, markets, delivers, serves customers, handles money, hires and reports. Then we keep one promise: everything that can be automated or optimised, will be.
      </p>
      <p data-reveal className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 600, letterSpacing: '-.03em', marginTop: 28, color: C.blueLite }}>That&rsquo;s the Maestro touch.</p>
    </Section>
  );
}

// ─── 4. How it works ──────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { icon: 'assess', t: 'Assess.', d: "A free deep audit. We map how your business really runs, find every bottleneck and hand you a clear, costed roadmap. It's yours to keep." },
    { icon: 'build', t: 'Build.', d: 'We automate and optimise inside the tools you already use. No rip and replace. Live in 4 to 12 weeks.' },
    { icon: 'upskill', t: 'Upskill.', d: "We train your team to run it, so the gains last long after we've gone." },
  ];
  return (
    <Section id="how-it-works" tone="cream" eyebrow="How it works" title="Three steps. No jargon.">
      <ol className="card-grid c3" style={{ listStyle: 'none', padding: 0 }}>
        {steps.map((s, i) => (
          <li key={s.t} data-reveal className="info-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <MaestroIcon name={s.icon} size={56} color={C.blue} strokeWidth={4} />
              <span className="mono" style={{ fontSize: 13, letterSpacing: '.2em', color: C.blue }}>0{i + 1}</span>
            </div>
            <h3 style={{ marginTop: 22, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>{s.t}</h3>
            <p style={{ opacity: .82, fontSize: '1.02rem' }}>{s.d}</p>
          </li>
        ))}
      </ol>
      <div data-reveal style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
        <BookLink className="btn btn-blue">Start with the free audit {ARROW}</BookLink>
      </div>
    </Section>
  );
}

// ─── 5. What we optimise ──────────────────────────────────────────────
function WhatWeOptimise() {
  const areas = [
    ['target', 'Sales', 'Every enquiry answered fast. Every follow-up sent.'],
    ['spark', 'Marketing', 'Content, listings and review requests, drafted in your voice.'],
    ['headset', 'Customer service', 'Common questions answered. Hard ones handed to a human.'],
    ['flow', 'Operations', 'Scheduling, onboarding and handovers that run themselves.'],
    ['chart', 'Finance', 'Invoices sent and chased without the awkward call.'],
    ['data', 'Admin and data', 'Type it once. Done everywhere.'],
    ['clock', 'Reporting', 'Your numbers in your inbox every Monday.'],
    ['brain', 'People', 'Hiring admin handled. Your team confident with AI.'],
  ];
  return (
    <Section id="what-we-optimise" tone="light" eyebrow="What we optimise" title="If it slows you down, it's in scope.">
      <div className="card-grid c4">
        {areas.map(([icon, t, d]) => (
          <div key={t} data-reveal className="info-card">
            <MaestroIcon name={icon} size={44} color={C.blue} strokeWidth={4} />
            <h3 style={{ marginTop: 18 }}>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── 6. Who we help ───────────────────────────────────────────────────
function WhoWeHelp() {
  const who = [
    ['Trades and home services:', 'Finish work when the job finishes.'],
    ['Professional services:', "Win back the hours clients don't pay for."],
    ['Agencies and B2B tech:', 'Protect your margin. Keep the pipeline full.'],
    ['Estate and letting agents:', 'Every lead answered. Every viewing confirmed.'],
    ['Startup founders:', 'Build the systems before you hire the people.'],
  ];
  return (
    <Section tone="lite" eyebrow="Who we help" title="Built for small businesses. Not enterprises.">
      <Bullets items={who} />
      <TextLink to="/who-we-help">See how we help your industry</TextLink>
    </Section>
  );
}

// ─── 7. Security ──────────────────────────────────────────────────────
function SecuritySection() {
  return (
    <Section tone="ink" shader eyebrow="Security" title="Your data stays yours. Full stop."
      intro="We start with conversations, not passwords. We only access what each job needs, keep every client's data separate, and nothing that touches your money or your customers runs without your sign-off.">
      <div className="on-ink">
        <Bullets dark items={[
          ['Least access:', 'only the data each job needs'],
          ['Kept separate:', "your data never mixes with anyone else's"],
          ['You approve:', 'anything that matters waits for your yes'],
          ['Everything logged:', 'see what ran, when and why'],
          ['UK GDPR:', 'NDA and Data Processing Agreement as standard'],
        ]} />
        <TextLink to="/security">How we protect your data</TextLink>
      </div>
    </Section>
  );
}

// ─── 8. Why AI Maestro ────────────────────────────────────────────────
function Why() {
  // Client results and testimonials go here after the first projects. No placeholders on the live site.
  return (
    <Section tone="light" eyebrow="Why AI Maestro" title="Why AI Maestro">
      <Bullets items={[
        ['We audit before we build.', "So we fix what matters most, not what's trendy."],
        ['We work inside your tools.', 'No new software to learn.'],
        ['You stay in control.', 'You approve anything that matters.'],
        ['We train your team.', 'The results last after we leave.'],
        ['Remote-first, UK-wide.', 'Starting in Bristol and Manchester.'],
      ]} />
    </Section>
  );
}

// ─── 9. The free audit ────────────────────────────────────────────────
function AuditOffer() {
  return (
    <Section tone="cream" eyebrow="The free audit" title="Your free deep audit">
      <p data-reveal className="display" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600, letterSpacing: '-.02em', marginTop: 24 }}>What you get:</p>
      <Bullets style={{ marginTop: 14 }} items={[
        'A map of how your business runs today',
        'Every bottleneck, ranked by the time and money it costs you',
        "A costed roadmap of what we'd automate and optimise",
        'Clear next steps, whether you build with us or not',
      ]} />
      <p data-reveal style={{ marginTop: 28, fontSize: '1.05rem' }}><strong>What it costs:</strong> nothing.</p>
      <div data-reveal style={{ marginTop: 28 }}>
        <BookLink className="btn btn-blue">Get my free audit {ARROW}</BookLink>
      </div>
      <p data-reveal style={{ marginTop: 20, fontSize: 14, opacity: .75 }}>Free for UK small and medium-sized businesses. No obligation. No hard sell.</p>
      <p style={{ marginTop: 6 }}><Link to="/free-audit" className="text-link">See exactly how the audit works →</Link></p>
    </Section>
  );
}

export default function HomePage() {
  usePageBoot();
  useMeta('AI Maestro | Free AI Audit for UK Small Businesses', 'We audit your whole business for free, then automate and optimise everything that can be, inside the tools you already use. Live in 4 to 12 weeks.');
  return (
    <>
      <SiteHeader dark />
      <Hero />
      <Problem />
      <ThePromise />
      <HowItWorks />
      <WhatWeOptimise />
      <WhoWeHelp />
      <SecuritySection />
      <Why />
      <AuditOffer />
      <FinalCTA />
      <SiteFooter />
    </>
  );
}
