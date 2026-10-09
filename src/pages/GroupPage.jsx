import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { BookLink } from '../components/BookLink';
import { Section, Bullets, FinalCTA } from '../components/Blocks';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

// One page per group: their pain first, then the promise, then what we set up.
export default function GroupPage({ group: g }) {
  usePageBoot();
  useMeta(g.metaTitle, g.metaDesc);
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow={g.opening} title={g.headline} sub={g.sub} minH="60vh">
        <div data-reveal style={{ marginTop: 32 }}>
          <BookLink className="btn btn-primary" style={{ padding: '18px 28px' }}>Book a free 20-minute call {ARROW}</BookLink>
        </div>
      </PageHero>
      <Section tone="light" eyebrow="Sound familiar?" title="Sound familiar?">
        <Bullets items={g.familiar} />
      </Section>
      <Section tone="cream" eyebrow="What we set up" title="What we set up.">
        <Bullets items={g.setup} />
        {g.extra && (
          <p data-reveal style={{ marginTop: 32, fontSize: '1.05rem', lineHeight: 1.6, maxWidth: 620 }}>
            <strong>{g.extra[0]}</strong> {g.extra[1]}
          </p>
        )}
        <p data-reveal className="mono" style={{ marginTop: 32, fontSize: 13, letterSpacing: '.08em' }}>
          <span style={{ opacity: .6, textTransform: 'uppercase', letterSpacing: '.18em', fontSize: 11 }}>Proof</span><br />{g.proof}
        </p>
      </Section>
      <FinalCTA />
      <SiteFooter />
    </>
  );
}
