import { Link } from 'react-router-dom';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { Section, Accordion, FinalCTA } from '../components/Blocks';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

const FAQS = [
  { q: 'Is the audit really free?', a: 'Yes. It’s free for UK businesses with up to 250 staff, with no obligation and no hard sell, and the roadmap is yours to keep.' },
  { q: 'What does “everything that can be optimised” actually mean?', a: 'We look across your whole business, not one department. Anything that can be automated, simplified or sped up goes on your roadmap, ranked by what it’s worth to you.' },
  { q: 'Is my data safe?', a: <>We start with read-only access, only touch what each job needs, keep your data separate from every other client’s, and sign an NDA and Data Processing Agreement first. <Link to="/security" style={{ color: 'inherit', fontWeight: 600 }}>Read how we protect your data →</Link></> },
  { q: 'Do I need new software?', a: 'Usually not. We work inside the tools you already use, and if something new would genuinely help, we’ll tell you why and what it costs.' },
  { q: 'How long does it take?', a: 'Most builds go live in 4 to 12 weeks, depending on scope.' },
  { q: 'How much does it cost?', a: 'The audit is free. Every item on your roadmap comes with a fixed price before anything starts.' },
  { q: 'Will AI replace my staff?', a: <>It takes the repetitive work, not the jobs. 95% of UK SMEs using AI say it hasn’t changed their headcount.²</> },
  { q: 'What if an automation gets something wrong?', a: 'Anything important waits for your approval, every run is logged, and a failed step stops safely and alerts us instead of guessing.' },
  { q: 'We’re not technical. Is that a problem?', a: 'Not at all. That’s what the Upskill step is for.' },
  { q: 'Do you only work in Bristol and Manchester?', a: 'No. We’re remote-first and work across the UK; Bristol and Manchester are where we meet in person.' },
];

export default function FaqPage() {
  usePageBoot();
  useMeta('FAQ | AI Maestro', 'Is the audit really free? Is my data safe? Will AI replace my staff? Straight answers to the questions we hear most.');
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="FAQ" title="Questions, answered." sub="Straight answers to the questions we hear most." minH="50vh" />
      <Section tone="light">
        <Accordion items={FAQS} />
        <p className="footnote">² British Chambers of Commerce and Atos, Future of Work: AI in the Workplace, March 2026. <a href="https://itbrief.co.uk/story/most-uk-firms-now-use-ai-as-smes-see-roles-unchanged" target="_blank" rel="noopener noreferrer">Read the coverage</a>.</p>
      </Section>
      <FinalCTA />
      <SiteFooter />
    </>
  );
}
