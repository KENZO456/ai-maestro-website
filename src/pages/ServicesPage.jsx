import { Link } from 'react-router-dom';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { BookLink } from '../components/BookLink';
import { Section, CopyTable, TextLink } from '../components/Blocks';
import { GROUPS } from '../lib/groups';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

export default function ServicesPage() {
  usePageBoot();
  useMeta('Services — AI Maestro', 'AI integration and workflow automation for accountants, letting agents, trades, agencies and startups.');
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="Services" title="Five ways we put AI to work." sub="One method for all five. We audit, we build, we care." minH="55vh" />
      <Section tone="light">
        <p data-reveal style={{ fontSize: '1.1rem', lineHeight: 1.7, margin: 0, maxWidth: 820 }}>
          <strong>Audit.</strong> We find the real problem. · <strong>Build.</strong> We fix it with the right technology. · <strong>Care.</strong> We keep it working, every month.
        </p>
        <CopyTable stack head={['', 'Audit finds', 'Build delivers', 'Care keeps']} rows={[
          ['AI integration', 'The tasks eating your team’s hours', 'AI that reads, sorts, drafts and logs', 'Its answers accurate as your work changes'],
          ['Workflow automation', 'Where work gets copied, lost or forgotten', 'Your tools connected, so information moves on its own', 'Every connection watched and fixed fast'],
          ['Websites and apps', 'Why visitors leave without enquiring', 'A fast, clear site or app that turns visitors into enquiries', 'Your site fast, secure and up to date'],
          ['Digital marketing', 'Where your leads leak and your budget goes', 'Campaigns, tracking and search foundations', 'Campaigns improving every month'],
          ['AI content', 'What your audience actually reads', 'A content engine in your brand voice', 'Fresh, on-brand content coming every week'],
        ]} />
        <TextLink to="/pricing">See prices</TextLink>
      </Section>
      <Section id="who" tone="cream" eyebrow="Who we help" title="Find your business.">
        <div className="card-grid c3">
          {GROUPS.map((g) => (
            <Link key={g.slug} to={`/${g.slug}`} data-reveal className="info-card" style={{ textDecoration: 'none' }}>
              <h3>{g.name}</h3>
              <p>{g.headline}</p>
            </Link>
          ))}
        </div>
        <div data-reveal style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <BookLink className="btn btn-blue">Book a free 20-minute call {ARROW}</BookLink>
        </div>
      </Section>
      <SiteFooter />
    </>
  );
}
