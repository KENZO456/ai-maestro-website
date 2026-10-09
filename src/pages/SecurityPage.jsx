import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { BookLink } from '../components/BookLink';
import { Section, QAList, C } from '../components/Blocks';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

const PROMISES = [
  ['We never ask for passwords by email or chat.', 'Access is set up through secure tools.'],
  ['We only touch what each job needs.', 'Nothing more.'],
  ['We build on test data.', 'Your live data stays in your systems.'],
  ['You approve anything that matters.', 'Payments wait for your yes. Customer messages go out only in wording you’ve signed off.'],
  ['Every run is logged.', 'You can see what ran, when, and why.'],
  ['Your data never trains AI.', 'Business-grade tools only, set up so your data isn’t used for training.'],
];

export default function SecurityPage() {
  usePageBoot();
  useMeta('Data security — AI Maestro', 'Six plain-English promises on how we protect your business data. UK GDPR compliant.');
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="Security" title="Your data stays yours." sub="Six promises, in plain English." minH="50vh" />
      <Section tone="light">
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 18 }}>
          {PROMISES.map(([t, d], i) => (
            <li key={t} data-reveal className="info-card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <span className="mono" style={{ fontSize: 14, letterSpacing: '.18em', color: C.blue, paddingTop: 4, minWidth: 28 }}>0{i + 1}</span>
              <div><h3>{t}</h3><p>{d}</p></div>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="cream" eyebrow="Where we work" title="Where we work.">
        <p data-reveal style={{ fontSize: '1.1rem', lineHeight: 1.65, marginTop: 20, maxWidth: 680 }}>
          Our client team is in Bristol and Manchester. Our designers and developers are in Nigeria, working the same hours you do. Their access is covered by a UK data transfer agreement, limited to what each job needs, and logged.
        </p>
        <QAList items={[
          ['Can I switch it off?', 'Yes. Anytime, with one setting.'],
          ['What happens when we stop working together?', 'We remove our access and hand over everything we built.'],
          ['Are you registered with the ICO?', 'Yes.'],
        ]} />
        <div data-reveal style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <BookLink className="btn btn-blue">Book a free 20-minute call {ARROW}</BookLink>
        </div>
      </Section>
      <SiteFooter />
    </>
  );
}
