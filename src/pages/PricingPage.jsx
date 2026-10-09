import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { BookLink } from '../components/BookLink';
import { Section, CopyTable, QAList } from '../components/Blocks';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

export default function PricingPage() {
  usePageBoot();
  useMeta('Pricing — AI Maestro', 'Free call. Deep Audit from £495. Builds from £1,500. Care from £200 a month. No surprises.');
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="Pricing" title="Clear prices. No surprises." sub="Start free. Pay only for what you choose to build." minH="55vh" />
      <Section tone="light" eyebrow="Start here" title="Start here.">
        <CopyTable stack head={['Step', 'What you get', 'Price']} rows={[
          ['Free call', '20 minutes. Your top three wins on one page.', '£0'],
          ['Audit', 'We look across all five areas, find the real problems and put a fixed price on every fix.', '£495 up to 15 staff · £995 up to 50 · £1,950 up to 250. Comes off your build if you start within 30 days.'],
        ]} />
      </Section>
      <Section tone="cream" eyebrow="Then" title="Then we build it, and look after it.">
        <CopyTable stack head={['', 'Build (fixed, from)', 'Care (a month, from)']} rows={[
          ['AI integration', '£2,000', '£250'],
          ['Workflow automation', '£1,500', '£250'],
          ['Websites and apps', '£3,000', '£200'],
          ['Digital marketing', '£2,000', '£450, plus your ad budget'],
          ['AI content', '£1,500', '£500'],
        ]} />
        <p data-reveal style={{ marginTop: 20, fontSize: '1.05rem' }}>Every price is agreed before work starts.</p>
        <QAList items={[
          ['Why pay for an audit?', 'Because it’s built for your business, not a template. And if you build with us, it costs you nothing.'],
          ['What does Care cover?', 'Monitoring, fixes, updates and small improvements to everything we built. It’s in every proposal, and you can stop with 30 days’ notice.'],
          ['What if it doesn’t work?', 'If a fix doesn’t do what we agreed, we fix it free. If we still can’t, we refund that fix.'],
        ]} />
        <div data-reveal style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <BookLink className="btn btn-blue">Book a free 20-minute call {ARROW}</BookLink>
        </div>
      </Section>
      <SiteFooter />
    </>
  );
}
