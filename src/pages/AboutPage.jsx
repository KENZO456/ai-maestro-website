import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { ShaderBG } from '../components/ShaderBG';
import { SectionLabel } from '../components/SectionLabel';
import { MaestroMark3D } from '../components/MaestroMark';
import { MaestroIcon } from '../components/MaestroIcon';
import { PathSim } from '../components/PathSim';
import { CTASection } from '../components/CTASection';
import { usePageBoot } from '../hooks/usePageBoot';

const A = { blue: '#1100D8', blueLite: '#E6E4FF', white: '#FAF8F4', ink: '#0B0B2B' };

function Origin() {
  return (
    <section data-section="origin" style={{ background: A.white, color: A.ink, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.85fr)', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'center' }}>
        <div>
          <SectionLabel>The origin</SectionLabel>
          <h2 data-reveal className="display" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', fontWeight: 700, letterSpacing: '-.035em', lineHeight: 1.02, margin: '20px 0 0' }}>
            Built to close <span className="serif" style={{ fontWeight: 400, color: A.blue }}>the gap.</span>
          </h2>
          <div data-reveal style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 620 }}>
            <p style={{ fontSize: 'clamp(1.02rem, 1.6vw, 1.18rem)', lineHeight: 1.65, opacity: .8, margin: 0 }}>
              Feranmi founded AI Maestro after watching small businesses struggle. Brilliant ideas, hardworking teams, but drowning in manual work that ate time and money.
            </p>
            <p style={{ fontSize: 'clamp(1.02rem, 1.6vw, 1.18rem)', lineHeight: 1.65, opacity: .8, margin: 0 }}>
              They knew AI could help; they just didn&rsquo;t know how to use it without expensive consultants or building it themselves. <strong style={{ fontWeight: 600, color: A.blue }}>AI Maestro exists to close that gap.</strong>
            </p>
          </div>
        </div>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: 'clamp(320px, 40vh, 440px)' }}>
          <div style={{ position: 'absolute', width: 460, height: 460, borderRadius: '50%', background: 'radial-gradient(circle at 50% 45%, rgba(17,0,216,.12), transparent 62%)', pointerEvents: 'none' }} />
          <MaestroMark3D size={300} faceColor={A.blue} sideColor="#8E86D8" depth={42} spin />
          <div className="mono" style={{ marginTop: 38, fontSize: 11, letterSpacing: '.22em', color: A.blue, opacity: .65, textTransform: 'uppercase' }}>The mark · 3D rotation loop</div>
        </div>
      </div>
    </section>
  );
}

function Beliefs() {
  const beliefs = [
    ["AI isn't magic.", "It's a tool, useful only when it solves real problems."],
    ['Results matter.', 'Not hours, not complexity, not features. Results.'],
    ['Business owners are smart.', 'They just need a partner who understands their world.'],
    ['Transparency builds trust.', "We tell you what's possible and what's not. No overselling."],
    ['Speed matters.', 'Waiting costs money, so we move fast.'],
  ];
  return (
    <section data-section="beliefs" style={{ background: A.ink, color: A.white, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <ShaderBG intensity={1.0} opacity={0.8} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,11,43,.66), rgba(11,11,43,.84))', pointerEvents: 'none', zIndex: 1 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <SectionLabel color={A.blueLite}>What we believe</SectionLabel>
        <h2 data-reveal className="display" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: .98, margin: '20px 0 0', maxWidth: 760 }}>
          Five things we hold true.
        </h2>
        <div style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)', borderTop: '1px solid rgba(255,255,255,.14)' }}>
          {beliefs.map(([t, d], i) => (
            <div key={t} data-reveal style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0, 1fr)', gap: 'clamp(20px, 4vw, 56px)', alignItems: 'baseline', padding: 'clamp(20px, 2.8vw, 30px) 0', borderBottom: '1px solid rgba(255,255,255,.14)' }}>
              <span className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: A.blueLite, opacity: .55, letterSpacing: '-.04em' }}>0{i + 1}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 16px' }}>
                <span className="display" style={{ fontSize: 'clamp(1.35rem, 3vw, 2.1rem)', fontWeight: 600, letterSpacing: '-.025em' }}>{t}</span>
                <span style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', opacity: .68 }}>{d}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamAndWhy() {
  const whyUs = [
    "We're specialists in small-business AI and automation. We speak your language.",
    "We blend creativity with technical expertise, design, strategy, and code working together.",
    "We iterate until you're happy. Your success is our success.",
    "We're transparent about cost, timeline, and what's realistic.",
  ];
  return (
    <section data-section="team" style={{ background: A.white, color: A.ink, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)' }}>
      <div className="wrap">
        <div data-reveal className="m-card stack-mobile" style={{ background: A.blueLite, border: '1px solid rgba(17,0,216,.14)', padding: 'clamp(2.25rem, 4vw, 3.5rem)', display: 'grid', gridTemplateColumns: 'minmax(0, 0.5fr) minmax(0, 1fr)', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className="display" style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 700, letterSpacing: '-.05em', lineHeight: .85, color: A.blue }}>08</div>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: A.blue, opacity: .7, marginTop: 10 }}>People · globally distributed</div>
          </div>
          <div>
            <h2 className="display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.02, margin: 0 }}>A tight team that takes your problem personally.</h2>
            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.6, opacity: .78, marginTop: 16 }}>
              We&rsquo;re a lean team of designers, developers, strategists, and salespeople, all obsessed with client success. Not a big agency with layers of bureaucracy. Not a freelance marketplace where you get whoever&rsquo;s available.
            </p>
          </div>
        </div>
        <div style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <SectionLabel>Why us?</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(16px, 2vw, 24px)', marginTop: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            {whyUs.map((w, i) => (
              <div key={i} data-reveal className="m-card" style={{ background: A.white, border: '1px solid rgba(11,11,43,.1)', padding: 'clamp(1.75rem, 2.5vw, 2.25rem)', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 16px 44px rgba(17,0,216,.05)' }}>
                <MaestroIcon name={['shield', 'spark', 'target', 'chart'][i]} size={40} color={A.blue} strokeWidth={4} />
                <p style={{ fontSize: '1.05rem', lineHeight: 1.5, margin: 0, marginTop: 24 }}>{w}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Culture() {
  return (
    <section data-section="culture" style={{ background: A.blue, color: A.white, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -40, right: 40, opacity: .3, pointerEvents: 'none' }}>
        <PathSim seed={55} gridW={4} gridH={5} width={320} height={400} stroke={A.white} strokeWidth={2.2} />
      </div>
      <div className="wrap" style={{ position: 'relative' }}>
        <SectionLabel color={A.blueLite}>Our culture</SectionLabel>
        <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'center', marginTop: 28 }}>
          <h2 data-reveal className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, margin: 0 }}>
            Deep work over <span className="serif" style={{ fontWeight: 400 }}>busy work.</span>
          </h2>
          <p data-reveal style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.3rem)', lineHeight: 1.6, opacity: .92, margin: 0 }}>
            We document everything so knowledge doesn&rsquo;t disappear, celebrate wins, and learn from failures. Remote-first, globally distributed, always accessible, and always thinking about how to solve your problem better.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  usePageBoot();
  return (
    <>
      <SiteHeader dark={true} />
      <PageHero
        eyebrow="About · The Agency"
        title={<>We&rsquo;re AI Maestro. We help UK small businesses <span className="serif" style={{ fontWeight: 400, color: '#E6E4FF' }}>do more with less.</span></>}
        sub="A remote-first AI integration and digital services firm, translating AI into measurable results for small and medium businesses."
      />
      <Origin />
      <Beliefs />
      <TeamAndWhy />
      <Culture />
      <CTASection
        title={<>Let&rsquo;s build<br /><span className="serif" style={{ fontWeight: 400 }}>something together.</span></>}
        sub="Tell us what's slowing your team down. We'll tell you, plainly, where AI can help."
      />
      <SiteFooter />
    </>
  );
}
