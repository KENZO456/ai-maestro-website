import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { MaestroMark } from '../components/MaestroMark';
import { Section, Bullets, FinalCTA, C } from '../components/Blocks';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

export default function AboutPage() {
  usePageBoot();
  useMeta('About AI Maestro | Remote-First AI Integration, UK', 'We audit, automate and upskill. A remote-first AI integration firm helping UK small businesses work smarter, starting in Bristol and Manchester.');
  return (
    <>
      <SiteHeader dark />
      <PageHero
        eyebrow="About"
        title="We're AI Maestro."
        sub="A remote-first AI integration firm helping UK small businesses work smarter. We don't sell software. We audit how your business runs, automate and optimise everything that can be, using the tools you already have, then train your team to run it."
        minH="60vh"
      />
      <Section tone="light" eyebrow="Why “Maestro”" title="A maestro doesn't play every instrument.">
        <p data-reveal style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', lineHeight: 1.6, marginTop: 20, maxWidth: 680 }}>
          They make every instrument play together. That&rsquo;s what we do with your systems.
        </p>
      </Section>
      <Section tone="cream" eyebrow="Our mark" title="A bridge between technology and human mastery.">
        <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', flexWrap: 'wrap', marginTop: 28 }}>
          <div data-reveal style={{ width: 120, flexShrink: 0 }}><MaestroMark size={120} stroke={C.blue} /></div>
          <p data-reveal style={{ fontSize: '1.1rem', lineHeight: 1.65, maxWidth: 560, margin: 0 }}>
            Our icon is built from parallel lines and three anchor points: Assess, Build, Upskill. It&rsquo;s a bridge between technology and human mastery, which is exactly where we work.
          </p>
        </div>
      </Section>
      <Section tone="light" eyebrow="How we work" title="Assess. Build. Upskill.">
        <Bullets items={[
          ['Assess:', 'a free deep audit of the whole business'],
          ['Build:', 'automation and optimisation inside your existing tools'],
          ['Upskill:', 'training so your team runs it with confidence'],
        ]} />
      </Section>
      <Section tone="lite" eyebrow="Where we work" title="Remote-first, across the UK.">
        <p data-reveal style={{ fontSize: '1.1rem', lineHeight: 1.65, marginTop: 20, maxWidth: 620 }}>
          We&rsquo;re starting in Bristol and Manchester, where we&rsquo;re happy to meet over coffee.
        </p>
      </Section>
      {/* TEAM SLOT: founder name, photo and one line on why they started AI Maestro go here once supplied. Do not add placeholders. */}
      <Section tone="ink" shader>
        <p data-reveal className="serif" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', lineHeight: 1.2, margin: 0 }}>Orchestrating AI. Optimising operations.</p>
      </Section>
      <FinalCTA />
      <SiteFooter />
    </>
  );
}
