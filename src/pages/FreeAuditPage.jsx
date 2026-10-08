import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { Section, C } from '../components/Blocks';
import { AUDIT_FORM_ENDPOINT } from '../lib/config';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

const INDUSTRIES = ['Trades and home services', 'Professional services', 'Agency or B2B tech', 'Estate or letting agent', 'Startup', 'Other'];
const SIZES = ['1–5', '6–15', '16–50', '51–250'];
const EMPTY = { name: '', business: '', email: '', phone: '', industry: '', size: '', pain: '', consent: false };

const STEPS = [
  ['Book a 20-minute intro call.', 'We get to know your business and check the audit is a fit.'],
  ['The deep audit.', 'We walk through how you sell, deliver, serve customers, handle money and report, with you and your team. Where it helps to look at a system, access is read-only.'],
  ['Your roadmap.', 'A clear report: what to automate, what to optimise, what each is worth in hours and money, and a fixed price to build it.'],
  ['Your call.', 'Build it with us, build it yourself, or do nothing. The roadmap is yours either way.'],
];

function AuditForm() {
  const [form, setForm] = useState(EMPTY);
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
    setErrs((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Tell us your name';
    if (!form.business.trim()) e.business = 'Tell us your business name';
    if (!form.email.trim()) e.email = 'We need an email to reply';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'That email looks off';
    if (!form.consent) e.consent = 'Please tick to agree';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length) return;
    setFailed(false);
    if (AUDIT_FORM_ENDPOINT) {
      try {
        const res = await fetch(AUDIT_FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(form) });
        if (!res.ok) throw new Error(String(res.status));
      } catch { setFailed(true); return; }
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="info-card" style={{ background: C.ink, color: C.white, padding: 'clamp(2rem, 4vw, 3rem)' }}>
        <h3 style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)' }}>You&rsquo;re in.</h3>
        <p style={{ fontSize: '1.1rem', opacity: .9, maxWidth: 520 }}>We&rsquo;ll be in touch within 1 working day to book your intro call. Your data is only used to arrange your audit.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="info-card" style={{ display: 'flex', flexDirection: 'column', gap: 18, boxShadow: '0 30px 80px rgba(17,0,216,.1)' }}>
      <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Book your free audit</h3>
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div className={`field${errs.name ? ' err' : ''}`}>
          <label htmlFor="af-name">Your name *</label>
          <input id="af-name" type="text" autoComplete="name" value={form.name} onChange={set('name')} aria-invalid={!!errs.name} />
          <span className="msg">{errs.name || ''}</span>
        </div>
        <div className={`field${errs.business ? ' err' : ''}`}>
          <label htmlFor="af-business">Business name *</label>
          <input id="af-business" type="text" autoComplete="organization" value={form.business} onChange={set('business')} aria-invalid={!!errs.business} />
          <span className="msg">{errs.business || ''}</span>
        </div>
        <div className={`field${errs.email ? ' err' : ''}`}>
          <label htmlFor="af-email">Work email *</label>
          <input id="af-email" type="email" autoComplete="email" value={form.email} onChange={set('email')} aria-invalid={!!errs.email} />
          <span className="msg">{errs.email || ''}</span>
        </div>
        <div className="field">
          <label htmlFor="af-phone">Phone number</label>
          <input id="af-phone" type="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} />
          <span className="msg"></span>
        </div>
        <div className="field">
          <label htmlFor="af-industry">What does your business do?</label>
          <select id="af-industry" value={form.industry} onChange={set('industry')}>
            <option value="">Choose one</option>
            {INDUSTRIES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <span className="msg"></span>
        </div>
        <div className="field">
          <label htmlFor="af-size">How many people work there?</label>
          <select id="af-size" value={form.size} onChange={set('size')}>
            <option value="">Choose one</option>
            {SIZES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <span className="msg"></span>
        </div>
      </div>
      <div className="field">
        <label htmlFor="af-pain">What slows you down most?</label>
        <textarea id="af-pain" value={form.pain} onChange={set('pain')} />
      </div>
      <div className={`field${errs.consent ? ' err' : ''}`}>
        <label htmlFor="af-consent" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', textTransform: 'none', letterSpacing: 0, fontFamily: 'Inter, sans-serif', fontSize: 14, opacity: .85, lineHeight: 1.5 }}>
          <input id="af-consent" type="checkbox" checked={form.consent} onChange={set('consent')} aria-invalid={!!errs.consent} style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2, appearance: 'auto', padding: 0 }} />
          <span>I agree to AI Maestro contacting me about my audit. <a href="#" style={{ color: C.blue }}>Privacy policy</a></span>
        </label>
        <span className="msg">{errs.consent || ''}</span>
      </div>
      {failed && <p role="alert" style={{ margin: 0, color: '#C81E4A', fontSize: 14 }}>Something went wrong sending that. Please try again, or email hello@aimaestro.co.</p>}
      <button type="submit" className="btn btn-blue" style={{ justifyContent: 'center', padding: '16px 24px', fontSize: 15 }}>Book my free audit {ARROW}</button>
      <p style={{ margin: 0, fontSize: 14, opacity: .75 }}>Free for UK businesses with up to 250 staff. No obligation. No hard sell.</p>
    </form>
  );
}

export default function FreeAuditPage() {
  usePageBoot();
  useMeta('Free Deep Audit for UK Small Businesses | AI Maestro', 'Find every bottleneck in your business, free. Get a costed roadmap of what to automate and optimise. No obligation. Yours to keep.');
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="Free audit" title="A free deep audit of your whole business."
        sub="We find everything that's slowing you down and show you exactly what we'd fix, what it's worth and what it costs. Free for UK small businesses. Yours to keep."
        minH="60vh" />
      <Section tone="light" eyebrow="How it works" title="Four steps, start to finish.">
        <ol style={{ listStyle: 'none', padding: 0, margin: '32px 0 0', display: 'grid', gap: 18 }}>
          {STEPS.map(([t, d], i) => (
            <li key={t} data-reveal className="info-card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <span className="mono" style={{ fontSize: 14, letterSpacing: '.18em', color: C.blue, paddingTop: 4, minWidth: 28 }}>0{i + 1}</span>
              <div><h3>{t}</h3><p>{d}</p></div>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="cream" eyebrow="What we look at" title="What we look at">
        <p data-reveal className="display" style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.7rem)', fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.5, marginTop: 24, maxWidth: 760 }}>
          Sales · Marketing · Customer service · Operations · Finance · Admin and data · Reporting · People
        </p>
      </Section>
      <Section tone="light" eyebrow="What we need from you" title="What we need from you"
        intro="A walkthrough of the tools you use, and honest answers about what drives you mad." />
      <Section tone="lite" eyebrow="Why is it free?" title="Why is it free?"
        intro="Because we'd rather earn your trust than ask for it. The audit shows you exactly what we'd do and what it's worth before you spend a penny." />
      <Section tone="ink" shader eyebrow="Your data during the audit" title="Your data during the audit"
        intro="We sign an NDA before we start. We look, we don't change anything. Access is read-only and removed when the audit ends. Ask us to delete our notes and we will.">
        <Link to="/security" data-reveal className="text-link">How we protect your data →</Link>
      </Section>
      <Section id="book" tone="cream">
        <div style={{ maxWidth: 820, margin: '0 auto' }}><AuditForm /></div>
      </Section>
      <SiteFooter />
    </>
  );
}
