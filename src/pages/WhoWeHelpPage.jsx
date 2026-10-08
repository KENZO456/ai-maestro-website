import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { Section, Bullets, FinalCTA } from '../components/Blocks';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

// One block per audience; each can later become its own landing page.
const BLOCKS = [
  { id: 'trades', tone: 'light', label: 'Trades and home services', h: 'Finish work when the job finishes.', wins: ['Every call answered, even when you\'re up a ladder', 'Quotes and invoices sent and chased automatically', "Next week's jobs scheduled before Monday"] },
  { id: 'professional-services', tone: 'cream', label: 'Professional services', h: "Win back the hours your clients don't pay for.", wins: ['Client onboarding without the email ping-pong', 'Documents chased until they\'re in', "Your firm's know-how, searchable in seconds"] },
  { id: 'agencies', tone: 'light', label: 'Agencies and B2B tech', h: 'Protect your margin. Keep the pipeline full.', wins: ['Client reports that build themselves', 'Resourcing you can see a week ahead', 'New-business follow-ups that never slip'] },
  { id: 'estate-agents', tone: 'cream', label: 'Estate and letting agents', h: 'Every lead answered. Every viewing confirmed.', wins: ['Portal leads answered in under a minute, day or night', 'Maintenance requests sorted before they reach your desk', 'Renewal dates tracked and documents chased'] },
  { id: 'startups', tone: 'light', label: 'Startup founders', h: 'Build the systems before you hire the people.', wins: ['Sales follow-up and support triage that run themselves', 'Investor updates delivered as a Monday-morning email', 'Processes that hold up from 3 people to 50'] },
];

export default function WhoWeHelpPage() {
  usePageBoot();
  useMeta('AI Automation for UK Small Businesses | AI Maestro', 'AI and automation for trades, professional services, agencies, estate agents and startups. Start with a free deep audit.');
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="Who we help" title="Built for the way your business actually works." sub="Every industry wastes time differently. The audit finds where yours does." minH="60vh" />
      {BLOCKS.map((b) => (
        <Section key={b.id} id={b.id} tone={b.tone} eyebrow={b.label} title={b.h}>
          <Bullets items={b.wins} />
        </Section>
      ))}
      <FinalCTA title="Don't see your industry?" body="If it runs on people and processes, the audit will find wins." />
      <SiteFooter />
    </>
  );
}
