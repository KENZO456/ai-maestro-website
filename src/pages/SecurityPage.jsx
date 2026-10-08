import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { BookLink } from '../components/BookLink';
import { Section, Accordion, FinalCTA, C } from '../components/Blocks';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

const PROMISES = [
  ['We start with conversations, not passwords.', 'The audit begins with you showing us how you work. Where we need to look at a system, it’s read-only.'],
  ['We never ask for your passwords.', 'We connect through each tool’s own secure sign-in and permissions, which you can revoke at any time.'],
  ['Least access, always.', 'Each automation can reach only the data it needs. Nothing more.'],
  ['Your data is kept separate.', 'Every client’s data, settings and access keys are isolated from every other client’s.'],
  ['You approve what matters.', 'Anything that moves money, contacts your customers, publishes or deletes data waits for your sign-off.'],
  ['Everything is logged.', 'Every automation run is recorded, so you can see what happened, when and why.'],
  ['Your data doesn’t train AI models.', 'We use business-grade AI services set up so your data isn’t used to train them.'],
  ['UK GDPR, in writing.', 'We sign an NDA and a Data Processing Agreement before we start, and we’re registered with the ICO.'],
  ['You can leave with everything.', 'Your automations, data and documentation are yours. Ask us to delete what we hold and we will.'],
];

const QA = [
  { q: 'Where is my data stored?', a: 'Mostly where it already lives: in your own tools. Our automations work on it there. Anything we need to store is held in UK or EU data centres.' },
  { q: 'Do you put my data into ChatGPT or similar?', a: 'Only business-grade AI services configured so your data isn’t used for training, and only for tasks you’ve approved.' },
  { q: 'Who at AI Maestro can see my data?', a: 'Only the people working on your project, and only for as long as they need to.' },
  { q: 'Can I switch an automation off?', a: 'Yes, at any time. You can also revoke our access yourself, from your own tools.' },
  { q: 'What happens to my data when we stop working together?', a: 'We hand everything over, remove our access and delete what we hold.' },
];

export default function SecurityPage() {
  usePageBoot();
  useMeta('How We Protect Your Data | AI Maestro', "Read-only audits, least-access automations, and NDA and UK GDPR agreements as standard. Here's exactly how we protect your business data.");
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="Security" title="Your data stays yours. Here's exactly how." sub="Letting anyone into your systems is a big decision. So we built how we work around one rule: we only touch what we need, and you stay in control." minH="60vh" />
      <Section tone="light" eyebrow="Our nine promises" title="Nine promises we keep.">
        <ol style={{ listStyle: 'none', padding: 0, margin: '32px 0 0', display: 'grid', gap: 18 }}>
          {PROMISES.map(([t, d], i) => (
            <li key={t} data-reveal className="info-card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <span className="mono" style={{ fontSize: 14, letterSpacing: '.18em', color: C.blue, paddingTop: 4, minWidth: 28 }}>0{i + 1}</span>
              <div><h3>{t}</h3><p>{d}</p></div>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="cream" eyebrow="Built to fail safely" title="Built to fail safely.">
        <p data-reveal style={{ fontSize: '1.1rem', lineHeight: 1.65, marginTop: 20, maxWidth: 680 }}>
          Every automation has safe stopping points. If a step fails, it stops and alerts us instead of guessing. Nothing half-finished reaches your customers.
        </p>
      </Section>
      <Section tone="light" eyebrow="Security questions" title="Security questions">
        <div style={{ marginTop: 24 }}><Accordion items={QA} /></div>
        <div data-reveal style={{ marginTop: 36, display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <BookLink className="btn btn-blue">Get my free audit {ARROW}</BookLink>
          <a href="#" className="text-link" style={{ marginTop: 0 }}>Read our privacy policy →</a>
        </div>
      </Section>
      <FinalCTA />
      <SiteFooter />
    </>
  );
}
