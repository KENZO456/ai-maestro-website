import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { MaestroMark } from '../components/MaestroMark';
import { Section, FinalCTA, C } from '../components/Blocks';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

const FACTS = [
  ['4–12 weeks', 'from first call to live'],
  ['2 cities', 'Bristol and Manchester, in person when it helps'],
  ['1 aim', 'your business, in sync'],
];

export default function AboutPage() {
  usePageBoot();
  useMeta('About — AI Maestro', 'Designers and developers in the UK and Nigeria, working with AI agents to keep small businesses in sync.');
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="About" title="Most AI projects fail because the business around them is out of sync." minH="60vh" />
      <Section tone="light">
        <p data-reveal style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', lineHeight: 1.6, margin: 0, maxWidth: 700 }}>
          The tools work. What breaks is everything around them: the handoffs, the messy data, the team nobody trained. So we start with how your business really runs, and build from there.
        </p>
        <p data-reveal style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', lineHeight: 1.6, marginTop: 24, maxWidth: 700 }}>
          We&rsquo;re a team of designers and developers in Nigeria and the UK, working alongside AI agents. You meet us in Bristol or Manchester. Our team in Nigeria works the same hours you do. You get fast builds, fair prices and people who love this work.
        </p>
        <div className="card-grid c3">
          {FACTS.map(([n, l]) => (
            <div key={n} data-reveal className="info-card">
              <div className="stat-big">{n}</div>
              <p>{l}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="cream">
        <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', flexWrap: 'wrap' }}>
          <div data-reveal style={{ width: 120, flexShrink: 0 }}><MaestroMark size={120} stroke={C.blue} /></div>
          <p data-reveal style={{ fontSize: '1.1rem', lineHeight: 1.65, maxWidth: 560, margin: 0 }}>
            The loop closes when everything is in sync.
          </p>
        </div>
      </Section>
      {/* TEAM PHOTO SLOT: real team photos, UK and Nigeria. No stock people, no placeholders on the live site. */}
      <Section tone="ink" shader>
        <p data-reveal className="serif" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', lineHeight: 1.2, margin: 0 }}>AI Maestro. In sync.</p>
      </Section>
      <FinalCTA title="Book a free 20-minute call." />
      <SiteFooter />
    </>
  );
}
