import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { Section, Accordion, FinalCTA } from '../components/Blocks';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

const FAQS = [
  { q: 'How long does it take?', a: 'Most builds go live in 4–12 weeks. Your Deep Audit gives you the exact timeline.' },
  { q: 'What does it cost?', a: 'The first call is free. Audits start at £495, builds at £1,500 fixed, and Care at £200 a month.' },
  { q: 'Do I need to be technical?', a: 'No. We build it, then train your team to run it.' },
  { q: 'Will AI replace my team?', a: 'No. It takes the repeat work, so your people do the work only they can do.' },
  { q: 'Is my data safe?', a: 'Yes. We build on test data, you approve anything that matters, and every run is logged.' },
  { q: 'Where is your team based?', a: 'Our client team is in Bristol and Manchester. Our designers and developers are in Nigeria, working UK hours under a UK data transfer agreement.' },
  { q: 'What if we’re not happy with the result?', a: 'If it doesn’t do what we agreed, we fix it free. If we still can’t, we refund that fix.' },
];

export default function FaqPage() {
  usePageBoot();
  useMeta('FAQ — AI Maestro', 'Straight answers on cost, timelines, data and what happens after we build.');
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="FAQ" title="Straight answers." minH="40vh" />
      <Section tone="light">
        <Accordion items={FAQS} />
      </Section>
      <FinalCTA />
      <SiteFooter />
    </>
  );
}
