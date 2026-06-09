import { Link } from 'react-router-dom';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { MaestroMark } from '../components/MaestroMark';
import { MaestroIcon } from '../components/MaestroIcon';
import { PathSim } from '../components/PathSim';
import { HRail } from '../components/HRail';
import { CTASection } from '../components/CTASection';
import { usePageBoot } from '../hooks/usePageBoot';

const B = { blue: '#1100D8', blueLite: '#E6E4FF', white: '#FAF8F4', ink: '#0B0B2B' };

const POSTS = [
  { cat: 'Automation', read: '6 min read', seed: 12, gw: 4, gh: 3, icon: 'flow', title: '5 Workflows SMBs Automate First (And Save 10+ Hours/Week)', dek: 'The five processes we automate first for almost every client, and the hours they hand straight back to your team.' },
  { cat: 'Operations', read: '4 min read', seed: 34, gw: 3, gh: 3, icon: 'clock', title: 'Why Your Team Hates Manual Data Entry (And What To Do About It)', dek: 'The hidden cost of copy-paste work, and the simplest way to make it disappear.' },
  { cat: 'Guide', read: '8 min read', seed: 56, gw: 3, gh: 4, icon: 'brain', title: 'AI For SMBs: A Non-Technical Guide To Automation That Actually Works', dek: 'No jargon. Just a plain-English map of where AI actually pays off for a small business.' },
];

function Cover({ post, dark, h = 220 }) {
  return (
    <div style={{ position: 'relative', height: h, borderRadius: 'inherit', overflow: 'hidden', background: dark ? B.ink : B.blue, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .4 }}>
        <PathSim seed={post.seed} gridW={post.gw} gridH={post.gh} width={600} height={h + 80} stroke={B.blueLite} strokeWidth={3} />
      </div>
      <div style={{ position: 'relative', opacity: .95 }}>
        <MaestroIcon name={post.icon} size={64} color={B.white} strokeWidth={4} />
      </div>
    </div>
  );
}

function FeaturedPost({ post }) {
  return (
    <a data-reveal href="#" className="m-card blog-card" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 0, overflow: 'hidden', textDecoration: 'none', color: B.ink, background: B.white, border: '1px solid rgba(11,11,43,.1)', boxShadow: '0 22px 60px rgba(17,0,216,.08)', transition: 'transform .35s, box-shadow .35s' }}>
      <div style={{ minHeight: 320, height: '100%' }}><Cover post={post} h={360} /></div>
      <div style={{ padding: 'clamp(2rem, 3.5vw, 3rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', background: B.blueLite, color: B.blue, padding: '5px 11px', borderRadius: '999px 4px 4px 4px' }}>{post.cat}</span>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '.1em', opacity: .5 }}>{post.read}</span>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '.16em', opacity: .5, marginLeft: 'auto', textTransform: 'uppercase' }}>Featured</span>
        </div>
        <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.3rem)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.05, margin: '20px 0 0' }}>{post.title}</h3>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.6, opacity: .72, marginTop: 16 }}>{post.dek}</p>
        <span className="mono blog-read" style={{ fontSize: 12, letterSpacing: '.16em', color: B.blue, marginTop: 24, display: 'flex', alignItems: 'center', gap: 8, textTransform: 'uppercase' }}>
          Read article <span style={{ display: 'inline-flex', transition: 'transform .3s' }}>{ARROW}</span>
        </span>
      </div>
    </a>
  );
}

function PostCard({ post }) {
  return (
    <a data-reveal href="#" className="m-card blog-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none', color: B.ink, background: B.white, border: '1px solid rgba(11,11,43,.1)', boxShadow: '0 16px 44px rgba(17,0,216,.06)', transition: 'transform .35s, box-shadow .35s' }}>
      <Cover post={post} dark h={200} />
      <div style={{ padding: 'clamp(1.5rem, 2.2vw, 2rem)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', background: B.blueLite, color: B.blue, padding: '4px 10px', borderRadius: '999px 4px 4px 4px' }}>{post.cat}</span>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '.1em', opacity: .5 }}>{post.read}</span>
        </div>
        <h3 className="display" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.45rem)', fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1.1, margin: '16px 0 0' }}>{post.title}</h3>
        <p style={{ fontSize: '0.98rem', lineHeight: 1.55, opacity: .7, marginTop: 12, flex: 1 }}>{post.dek}</p>
        <span className="mono blog-read" style={{ fontSize: 11, letterSpacing: '.16em', color: B.blue, marginTop: 18, display: 'flex', alignItems: 'center', gap: 8, textTransform: 'uppercase' }}>
          Read <span style={{ display: 'inline-flex', transition: 'transform .3s' }}>{ARROW}</span>
        </span>
      </div>
    </a>
  );
}

export default function BlogPage() {
  usePageBoot();
  return (
    <>
      <SiteHeader dark={true} />
      <PageHero
        eyebrow="Insights & Ideas"
        title={<>Practical thinking,<br /><span className="serif" style={{ fontWeight: 400, color: '#E6E4FF' }}>zero fluff.</span></>}
        sub="Practical tips for SMBs. How to think about AI. Client case studies. No fluff, just useful content."
        minH="58vh"
      />
      <section data-section="blog" style={{ background: B.white, color: B.ink, padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 5vw, 5rem)' }}>
        <div className="wrap">
          <FeaturedPost post={POSTS[0]} />
          <div className="mono" data-reveal style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: B.blue, margin: 'clamp(2.5rem, 5vw, 4rem) 0 clamp(1.25rem, 2vw, 1.75rem)' }}>◯, Latest articles</div>
          <HRail ariaLabel="Latest articles" label="Drag to browse articles" minItem={420}>
            {POSTS.slice(1).map((p) => <PostCard key={p.title} post={p} />)}
            <div data-reveal className="m-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', background: B.blueLite, border: '1px solid rgba(17,0,216,.14)', padding: 'clamp(1.75rem, 2.5vw, 2.25rem)', minHeight: 360 }}>
              <MaestroMark size={48} stroke={B.blue} />
              <div className="display" style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', fontWeight: 700, letterSpacing: '-.03em', marginTop: 22, lineHeight: 1.05 }}>More on the way.</div>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.55, opacity: .72, marginTop: 12 }}>Read the latest on automation, AI, and efficiency, fresh pieces land regularly.</p>
              <Link to="/contact" className="btn btn-blue" style={{ marginTop: 'auto' }}>Get notified {ARROW}</Link>
            </div>
          </HRail>
        </div>
      </section>
      <CTASection
        kicker="Insights & ideas"
        title={<>Want this applied to <span className="serif" style={{ fontWeight: 400 }}>your business?</span></>}
        sub="Reading is good. Results are better. Let's map where AI saves you time."
      />
      <SiteFooter />
    </>
  );
}
