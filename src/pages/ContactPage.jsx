import { useState } from 'react';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { SectionLabel } from '../components/SectionLabel';
import { MaestroIcon } from '../components/MaestroIcon';
import { PathSim } from '../components/PathSim';
import { HRail } from '../components/HRail';
import { usePageBoot } from '../hooks/usePageBoot';

const C = { blue: '#1100D8', blueLite: '#E6E4FF', white: '#FAF8F4', ink: '#0B0B2B' };

const INTERESTS = ['AI Integration', 'Workflow Automation', 'Website & App Development', 'Digital Marketing', 'AI Content Creation', "Not sure yet, help me figure it out"];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', interest: '', message: '' });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrs((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Tell us your name';
    if (!form.email.trim()) e.email = 'We need an email to reply';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'That email looks off';
    if (!form.interest) e.interest = "Pick what you're interested in";
    if (!form.message.trim()) e.message = 'A line or two about your project';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <div className="m-card" style={{ background: C.ink, color: C.white, border: '1px solid rgba(255,255,255,.12)', padding: 'clamp(2.5rem, 4vw, 3.5rem)', minHeight: 480, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: -30, opacity: .2, pointerEvents: 'none' }}>
          <PathSim seed={77} gridW={3} gridH={4} width={220} height={300} stroke={C.blueLite} strokeWidth={2.4} />
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ width: 64, height: 64, borderRadius: '999px 14px 14px 14px', background: C.blue, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M7 16l5 5L23 9" stroke={C.white} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3 className="display" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, letterSpacing: '-.03em', marginTop: 28, lineHeight: 1 }}>Thanks, {form.name.split(' ')[0] || 'there'}!</h3>
          <p className="serif" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1.4, marginTop: 16, opacity: .9, maxWidth: 460 }}>
            We&rsquo;ll be in touch within 24 hours, usually sooner. Can&rsquo;t wait to learn more about your project.
          </p>
          <button onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', phone: '', interest: '', message: '' }); }} className="btn btn-primary" style={{ marginTop: 32 }}>
            Send another {ARROW}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="m-card" style={{ background: C.white, border: '1px solid rgba(11,11,43,.12)', padding: 'clamp(2rem, 3.5vw, 3rem)', boxShadow: '0 30px 80px rgba(17,0,216,.1)', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: C.blue }}>Project enquiry</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="contact-grid">
        <div className={`field${errs.name ? ' err' : ''}`}>
          <label htmlFor="cf-name">Name *</label>
          <input id="cf-name" type="text" value={form.name} onChange={set('name')} placeholder="Jane Doe" />
          <span className="msg">{errs.name || ''}</span>
        </div>
        <div className={`field${errs.email ? ' err' : ''}`}>
          <label htmlFor="cf-email">Email *</label>
          <input id="cf-email" type="email" value={form.email} onChange={set('email')} placeholder="jane@company.co" />
          <span className="msg">{errs.email || ''}</span>
        </div>
        <div className="field">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" type="text" value={form.company} onChange={set('company')} placeholder="Company Ltd" />
          <span className="msg"></span>
        </div>
        <div className="field">
          <label htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+44 …" />
          <span className="msg"></span>
        </div>
      </div>
      <div className={`field${errs.interest ? ' err' : ''}`}>
        <label htmlFor="cf-interest">What are you interested in? *</label>
        <select id="cf-interest" value={form.interest} onChange={set('interest')}>
          <option value="" disabled>Select a service…</option>
          {INTERESTS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <span className="msg">{errs.interest || ''}</span>
      </div>
      <div className={`field${errs.message ? ' err' : ''}`}>
        <label htmlFor="cf-message">Message *</label>
        <textarea id="cf-message" value={form.message} onChange={set('message')} placeholder="What's slowing your team down? What would a win look like?" />
        <span className="msg">{errs.message || ''}</span>
      </div>
      <button type="submit" className="btn btn-blue" style={{ justifyContent: 'center', padding: '16px 24px', fontSize: 15 }}>
        Let&rsquo;s Talk {ARROW}
      </button>
    </form>
  );
}

function ContactInfo() {
  const methods = [
    { icon: 'chat', label: 'Email', value: 'hello@aimaestro.co', href: 'mailto:hello@aimaestro.co' },
    { icon: 'headset', label: 'Phone', value: '+44 (0) 20 0000 0000', href: 'tel:+442000000000' },
    { icon: 'network', label: 'LinkedIn', value: 'AI Maestro Ltd', href: 'https://www.linkedin.com/' },
    { icon: 'clock', label: 'Schedule', value: 'Book a 20-min call', href: '/contact' },
  ];
  const expect = [
    'We respond to all enquiries within 24 hours, usually sooner.',
    "If you're a fit, we'll schedule a free 20-minute discovery call.",
    "If you're not, we'll tell you honestly and recommend someone who might help.",
  ];
  return (
    <div>
      <SectionLabel>Reach us directly</SectionLabel>
      <HRail ariaLabel="Contact methods" label="Drag to see more" minItem={300} style={{ marginTop: 14 }}>
        {methods.map((m) => (
          <a key={m.label} href={m.href} className="m-card contact-method" style={{ textDecoration: 'none', color: C.ink, background: C.white, border: '1px solid rgba(11,11,43,.1)', padding: '24px', display: 'flex', flexDirection: 'column', gap: 12, minHeight: 150, justifyContent: 'space-between', transition: 'border-color .25s, transform .3s, box-shadow .3s' }}>
            <MaestroIcon name={m.icon} size={34} color={C.blue} strokeWidth={4} />
            <div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', opacity: .5 }}>{m.label}</div>
              <div className="display" style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-.02em', marginTop: 4 }}>{m.value}</div>
            </div>
          </a>
        ))}
      </HRail>
      <div style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: C.blue, marginBottom: 20 }}>What to expect</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {expect.map((e, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span className="mono" style={{ fontSize: 12, color: C.blue, paddingTop: 2, minWidth: 24 }}>0{i + 1}</span>
              <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.5, opacity: .78 }}>{e}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  usePageBoot();
  return (
    <>
      <SiteHeader dark={true} />
      <PageHero
        eyebrow="Contact"
        title={<>Let&rsquo;s <span className="serif" style={{ fontWeight: 400, color: '#E6E4FF' }}>talk.</span></>}
        sub="Have a project in mind? Want to explore what's possible? We're here."
        minH="56vh"
      />
      <section data-section="contact" style={{ background: C.white, color: C.ink, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)', gap: 'clamp(2.5rem, 5vw, 4.5rem)', alignItems: 'start' }}>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
