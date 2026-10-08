import { Link } from 'react-router-dom';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { ShaderBG } from '../components/ShaderBG';
import { SectionLabel } from '../components/SectionLabel';
import { MaestroIcon } from '../components/MaestroIcon';
import { HRail } from '../components/HRail';
import { CTASection } from '../components/CTASection';
import { usePageBoot } from '../hooks/usePageBoot';

const S = { blue: '#1100D8', blueLite: '#E6E4FF', white: '#FAF8F4', ink: '#0B0B2B' };

const SERVICES = [
  {
    id: 'ai-integration', n: '01', icon: 'integrate', short: 'AI Integration',
    headline: 'Stop wasting hours on manual work. Let AI do it.',
    sub: 'Your team spends 10+ hours a week on data entry, analysis, or customer service. We integrate AI so those tasks run automatically, saving time and money and freeing your team for higher-value work.',
    solvesLabel: 'What it solves',
    solves: [['Data Entry & Processing', 'Automate invoice processing, customer data input, and report generation.'], ['Customer Service', 'AI chatbots handle FAQs and route complex issues to humans.'], ['Analysis & Insights', 'AI analyses data, spots trends, and surfaces opportunities.'], ['Content Review', 'AI screens applications, resumes, or proposals against your criteria.']],
    how: [['Discovery', 'We map your process and find where manual work kills time.'], ['Design', 'We plan how AI plugs in, what stays human, what goes to AI.'], ['Build', 'We integrate, test, refine, and go live.'], ['Measure', 'We track hours saved, costs reduced, and revenue lifted.']],
    example: { body: 'One client spent 15 hours/week processing invoices manually. We integrated AI to read, categorise, and log them automatically.', stats: [['15 hrs → 1 hr', 'per week'], ['£3k', 'cost'], ['£5k', 'saved in two months']] },
    pricing: [['Small integration', 'One workflow', '£2–4k', '4–6 weeks'], ['Medium integration', 'Multiple workflows', '£5–8k', '8–12 weeks'], ['Custom solution', 'Built to scope', 'Quote', '']],
  },
  {
    id: 'workflow-automation', n: '02', icon: 'flow', short: 'Workflow Automation',
    headline: 'Your tools should work together. We make that happen.',
    sub: 'You use 5+ tools, Gmail, Slack, spreadsheets, your CRM, Asana, and nothing syncs. We connect them so data flows automatically, eliminating manual handoffs and saving your team hours every week.',
    solvesLabel: 'What it solves',
    solves: [['Manual Handoffs', 'Information flows automatically between tools.'], ['Data Silos', 'No more copying data from one system to another.'], ['Errors & Delays', 'Automation is consistent and fast.'], ['Scalability', "As you grow, processes don't become a bottleneck."]],
    how: [['Audit', 'We map your workflows and find where data gets stuck.'], ['Design', 'We plan which tools connect, the triggers, and the outcomes.'], ['Build', 'We create the automations using Zapier, Make, or custom integrations.'], ['Test & Optimise', 'We validate everything and refine on your feedback.']],
    example: { body: 'A sales team manually logged every deal into the CRM. We automated it so each Slack conversation about a deal auto-populates the CRM.', stats: [['5 hrs', 'saved / week'], ['£2.5k', 'cost'], ['10 weeks', 'payback']] },
    pricing: [['Simple automation', '1–2 workflows', '£1.5–3k', '1–2 weeks'], ['Moderate complexity', '3–5 workflows', '£3–6k', '3–4 weeks'], ['Complex system', '10+ workflows', '£6–10k+', '6–8 weeks']],
  },
  {
    id: 'web-app', n: '03', icon: 'build', short: 'Website & App Dev',
    headline: 'Modern digital experiences that convert.',
    sub: 'Your website is your storefront. Your app is your efficiency engine. We build both to be fast, beautiful, and effective, so you attract clients, close deals, and streamline operations.',
    solvesLabel: 'What we build',
    solves: [["Modern Websites", "Fast, mobile-friendly, conversion-focused. Not flashy for flashy's sake."], ['Web Applications', 'Tools your team uses daily, booking systems, dashboards, client portals.'], ['Mobile Apps', 'When your business needs to be in your pocket.'], ['MVP Prototypes', 'Test an idea fast before going all-in.']],
    how: [['Strategy', 'We pin down your goal, leads, efficiency, or revenue.'], ['Design', 'We sketch the experience and test it with your users.'], ['Build', 'We code it clean and efficient, on modern tech that scales.'], ['Launch & Support', 'We go live and support you beyond day one.']],
    example: null,
    pricing: [['Website redesign', 'Conversion-focused', '£3–7k', '6–8 weeks'], ['Web app (simple)', 'Single core flow', '£5–8k', '8–10 weeks'], ['Web app (complex)', 'Multi-feature', '£10–15k+', '12+ weeks'], ['Ongoing support', 'Maintenance', '£200–500/mo', '']],
  },
  {
    id: 'digital-marketing', n: '04', icon: 'chart', short: 'Digital Marketing',
    headline: 'More leads. Less guessing. Powered by AI.',
    sub: 'Digital marketing is expensive and confusing. We simplify it, using AI to find your ideal customers, run targeted campaigns, and measure what actually works, so you get more leads for less cost.',
    solvesLabel: 'What we do',
    solves: [['SEO Strategy', 'Help prospects find you organically.'], ['Paid Ads', 'Google, LinkedIn, Meta, targeted campaigns that convert.'], ['Email Campaigns', 'Nurture leads and stay top of mind.'], ['Analytics & Optimisation', 'Data tells us what works. We double down on winners.']],
    how: [['Audit', "We analyse where leads come from and where they're lost."], ['Strategy', 'We set the channels, message, and budget.'], ['Execute', 'We launch, test, and measure.'], ["Optimise", "We double down on what works and kill what doesn't."]],
    example: null,
    pricing: [['Strategy & setup', 'Channels + plan', '£2–4k', '2–3 weeks'], ['Ad spend', 'Recommended start', '£500–2k/mo', ''], ['Management', 'Of ad spend', '10–20%', 'monthly']],
  },
  {
    id: 'ai-content', n: '05', icon: 'spark', short: 'AI Content',
    headline: 'Scale your content. Without burning out.',
    sub: 'Good content takes time. We use AI to generate ideas, draft content, and speed up production, then add human creativity and quality so it feels authentic and drives results.',
    solvesLabel: 'What we create',
    solves: [['Blog Posts & Articles', 'SEO-optimised. Human-written. Authoritative.'], ['LinkedIn Posts', 'Consistent. Engaging. Brand-aligned.'], ['Email Sequences', 'Nurture campaigns and newsletter content.'], ['Social Media Content', 'Instagram, Twitter, TikTok. On-brand, on-schedule.'], ['Product Descriptions', 'Clear. Compelling. Conversion-focused.']],
    how: [['Brief', 'You tell us your brand voice, goals, and audience.'], ['AI Draft', 'We generate initial content at scale.'], ['Human Refine', 'We edit, fact-check, and add personality.'], ['Deliver', 'Publish, or hand off to your team.']],
    example: { body: 'One client needed 4 LinkedIn posts a week but had no time. Our AI engine drafts in 1 hour; they spend 30 minutes editing and posting.', stats: [['3×', 'more engagement'], ['30 min', 'per week'], ['Zero', 'stress']] },
    pricing: [['Content strategy & templates', 'Voice + system', '£1.5–3k', '1–2 weeks'], ['Monthly production', 'Retainer by volume', '£500–1.5k/mo', '']],
  },
];

function ServiceIndex() {
  return (
    <div style={{ background: S.ink, borderBottom: '1px solid rgba(255,255,255,.1)', padding: '0 clamp(1.5rem, 5vw, 5rem)', position: 'sticky', top: 'var(--nav-h)', zIndex: 40, backdropFilter: 'blur(8px)' }}>
      <div className="wrap svc-index" style={{ display: 'flex', gap: 'clamp(14px, 2vw, 30px)', overflowX: 'auto', padding: '16px 0' }}>
        {SERVICES.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="mono svc-chip" style={{ whiteSpace: 'nowrap', color: S.white, textDecoration: 'none', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .7, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: S.blueLite }}>{s.n}</span>{s.short}
          </a>
        ))}
      </div>
    </div>
  );
}

function ServiceBlock({ s, dark }) {
  const bg = dark ? S.ink : S.white;
  const fg = dark ? S.white : S.ink;
  const sub = dark ? 'rgba(255,255,255,.72)' : 'rgba(11,11,43,.72)';
  const line = dark ? 'rgba(255,255,255,.14)' : 'rgba(11,11,43,.12)';
  const accent = dark ? S.blueLite : S.blue;
  return (
    <section id={s.id} data-section={s.id} style={{ background: bg, color: fg, padding: 'clamp(4.5rem, 9vw, 7.5rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden', scrollMarginTop: 120 }}>
      {dark && <><ShaderBG intensity={1.0} opacity={0.7} /><div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,11,43,.7), rgba(11,11,43,.86))', pointerEvents: 'none', zIndex: 1 }} /></>}
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18 }}>
            <span className="display" data-reveal style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '-.05em', color: accent, opacity: .5, lineHeight: .8 }}>{s.n}</span>
            <div data-reveal><MaestroIcon name={s.icon} size={52} color={accent} strokeWidth={4} /></div>
          </div>
          <div>
            <div className="mono" data-reveal style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: accent, marginBottom: 16 }}>{s.short}</div>
            <h2 data-reveal className="display" style={{ fontSize: 'clamp(1.9rem, 5vw, 3.4rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, margin: 0, maxWidth: 800 }}>{s.headline}</h2>
            <p data-reveal style={{ fontSize: 'clamp(1.02rem, 1.6vw, 1.2rem)', lineHeight: 1.6, color: sub, marginTop: 22, maxWidth: 720 }}>{s.sub}</p>
          </div>
        </div>

        <div data-reveal style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: accent, marginBottom: 22 }}>{s.solvesLabel}</div>
          <HRail ariaLabel={`${s.short}, ${s.solvesLabel}`} label="Drag through" minItem={320} dark={dark}>
            {s.solves.map(([t, d]) => (
              <div key={t} className="m-card" style={{ background: dark ? 'rgba(230,228,255,.06)' : S.white, border: `1px solid ${line}`, padding: 'clamp(1.5rem, 2.2vw, 1.9rem)', minHeight: 196, display: 'flex', flexDirection: 'column', boxShadow: dark ? 'none' : '0 14px 40px rgba(17,0,216,.05)' }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: accent, flexShrink: 0 }} />
                <div className="display" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', fontWeight: 600, letterSpacing: '-.02em', marginTop: 18 }}>{t}</div>
                <div style={{ fontSize: '0.96rem', lineHeight: 1.5, color: sub, marginTop: 8 }}>{d}</div>
              </div>
            ))}
          </HRail>
        </div>

        <div data-reveal style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: accent, marginBottom: 22 }}>How it works</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(16px, 2.5vw, 32px)' }}>
            {s.how.map(([t, d], i) => (
              <div key={t} style={{ borderTop: `2px solid ${accent}`, paddingTop: 16 }}>
                <span className="mono" style={{ fontSize: 12, letterSpacing: '.16em', color: accent }}>0{i + 1}</span>
                <div className="display" style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.25rem)', fontWeight: 600, letterSpacing: '-.02em', marginTop: 8 }}>{t}</div>
                <div style={{ fontSize: '0.96rem', lineHeight: 1.5, color: sub, marginTop: 3 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {s.example && (
          <div data-reveal className="m-card" style={{ marginTop: 'clamp(2.5rem, 4vw, 3.5rem)', background: dark ? 'rgba(230,228,255,.06)' : S.blueLite, border: `1px solid ${dark ? 'rgba(230,228,255,.2)' : 'rgba(17,0,216,.14)'}`, padding: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: accent, marginBottom: 16 }}>In practice</div>
            <p style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)', lineHeight: 1.45, margin: 0, maxWidth: 760, fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: dark ? S.white : S.ink }}>{s.example.body}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', marginTop: 28 }}>
              {s.example.stats.map(([num, lab]) => (
                <div key={lab}>
                  <div className="display stat-num" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-.03em', color: accent, lineHeight: 1 }}>{num}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: sub, marginTop: 8 }}>{lab}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div data-reveal style={{ marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: accent, marginBottom: 18 }}>Timeline & cost</div>
          <div style={{ borderTop: `1px solid ${line}` }}>
            {s.pricing.map((row) => (
              <div key={row[0]} className="svc-price-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1.2fr) auto auto', gap: 'clamp(12px, 2vw, 28px)', alignItems: 'center', padding: 'clamp(14px, 2vw, 20px) 0', borderBottom: `1px solid ${line}` }}>
                <div className="display" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 600, letterSpacing: '-.02em' }}>{row[0]}</div>
                <div style={{ fontSize: '0.92rem', color: sub }} className="svc-price-desc">{row[1]}</div>
                <div className="mono" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', color: accent, fontWeight: 500, textAlign: 'right' }}>{row[2]}</div>
                <div className="mono svc-price-time" style={{ fontSize: 12, letterSpacing: '.1em', color: sub, textAlign: 'right', minWidth: 76 }}>{row[3]}</div>
              </div>
            ))}
          </div>
          <Link to="/contact" className={dark ? 'btn btn-primary' : 'btn btn-blue'} style={{ marginTop: 30 }}>Book a free 20-minute call {ARROW}</Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  usePageBoot();
  return (
    <>
      <SiteHeader dark={true} />
      <PageHero
        eyebrow="Services"
        title={<>Five ways we put <span className="serif" style={{ fontWeight: 400, color: '#E6E4FF' }}>AI to work.</span></>}
        sub="Pick what fits your business, or we'll help you figure out what you need. Every engagement is scoped, measured, and built to deliver results in 4–12 weeks."
        minH="62vh"
      />
      <ServiceIndex />
      {SERVICES.map((s, i) => <ServiceBlock key={s.id} s={s} dark={i % 2 === 1} />)}
      <CTASection
        kicker="Not sure where to start?"
        title={<>Let&rsquo;s find your <span className="serif" style={{ fontWeight: 400 }}>first win.</span></>}
        sub="Tell us what's slowing your team down. We'll recommend the service that pays back fastest."
      />
      <SiteFooter />
    </>
  );
}
