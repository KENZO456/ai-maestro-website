import { useState } from 'react';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { Section, C } from '../components/Blocks';
import { BOOKING_FORM_ENDPOINT, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from '../lib/config';
import { usePageBoot } from '../hooks/usePageBoot';
import { useMeta } from '../hooks/useMeta';

const INDUSTRIES = ['Accounting', 'Lettings and estate agency', 'Trades', 'Agency', 'Startup', 'Other'];
const SIZES = ['1–5', '6–15', '16–50', '51–250'];
const EMPTY = { name: '', email: '', business: '', industry: '', size: '', consent: false };

function BookingForm() {
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
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'That email doesn’t look right. Mind checking it?';
    if (!form.consent) e.consent = 'Please tick to agree';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length) return;
    setFailed(false);
    if (BOOKING_FORM_ENDPOINT) {
      try {
        const res = await fetch(BOOKING_FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(form) });
        if (!res.ok) throw new Error(String(res.status));
      } catch { setFailed(true); return; }
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="info-card" style={{ background: C.ink, color: C.white, padding: 'clamp(2rem, 4vw, 3rem)' }}>
        <h3 style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)' }}>Booked.</h3>
        <p style={{ fontSize: '1.1rem', opacity: .9, maxWidth: 520 }}>Check your inbox for a short questionnaire. It takes five minutes.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="info-card" style={{ display: 'flex', flexDirection: 'column', gap: 18, boxShadow: '0 30px 80px rgba(17,0,216,.1)' }}>
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div className={`field${errs.name ? ' err' : ''}`}>
          <label htmlFor="bk-name">Your name</label>
          <input id="bk-name" type="text" autoComplete="name" value={form.name} onChange={set('name')} aria-invalid={!!errs.name} />
          <span className="msg">{errs.name || ''}</span>
        </div>
        <div className={`field${errs.email ? ' err' : ''}`}>
          <label htmlFor="bk-email">Work email</label>
          <input id="bk-email" type="email" autoComplete="email" value={form.email} onChange={set('email')} aria-invalid={!!errs.email} />
          <span className="msg">{errs.email || ''}</span>
        </div>
        <div className={`field${errs.business ? ' err' : ''}`}>
          <label htmlFor="bk-business">Business name</label>
          <input id="bk-business" type="text" autoComplete="organization" value={form.business} onChange={set('business')} aria-invalid={!!errs.business} />
          <span className="msg">{errs.business || ''}</span>
        </div>
        <div className="field">
          <label htmlFor="bk-industry">Industry</label>
          <select id="bk-industry" value={form.industry} onChange={set('industry')}>
            <option value="">Choose one</option>
            {INDUSTRIES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <span className="msg"></span>
        </div>
        <div className="field">
          <label htmlFor="bk-size">Team size</label>
          <select id="bk-size" value={form.size} onChange={set('size')}>
            <option value="">Choose one</option>
            {SIZES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <span className="msg"></span>
        </div>
      </div>
      <div className={`field${errs.consent ? ' err' : ''}`}>
        <label htmlFor="bk-consent" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', textTransform: 'none', letterSpacing: 0, fontFamily: 'Inter, sans-serif', fontSize: 14, opacity: .85, lineHeight: 1.5 }}>
          <input id="bk-consent" type="checkbox" checked={form.consent} onChange={set('consent')} aria-invalid={!!errs.consent} style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2, appearance: 'auto', padding: 0 }} />
          <span>I agree to AI Maestro contacting me about my enquiry. See our <a href="#" style={{ color: C.blue }}>privacy policy</a>.</span>
        </label>
        <span className="msg">{errs.consent || ''}</span>
      </div>
      {failed && <p role="alert" style={{ margin: 0, color: '#C81E4A', fontSize: 14 }}>Something went wrong sending that. Please try again, or email {CONTACT_EMAIL}.</p>}
      <button type="submit" className="btn btn-blue" style={{ justifyContent: 'center', padding: '16px 24px', fontSize: 15 }}>Book my free call {ARROW}</button>
      <p style={{ margin: 0, fontSize: 14, opacity: .75 }}>No obligation. We reply within one working day.</p>
    </form>
  );
}

export default function ContactPage() {
  usePageBoot();
  useMeta('Book a free call — AI Maestro', '20 minutes. Your top three wins on one page. No obligation.');
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="Contact" title="Book your free 20-minute call." sub="Leave with your top three wins on one page." minH="50vh" />
      <Section id="book" tone="cream">
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <BookingForm />
          <p data-reveal style={{ marginTop: 24, fontSize: '1.02rem', lineHeight: 1.6, textAlign: 'center' }}>
            Prefer to talk? Call <a href={CONTACT_PHONE_HREF} style={{ color: C.blue, fontWeight: 600 }}>{CONTACT_PHONE}</a> or email <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: C.blue, fontWeight: 600 }}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </Section>
      <SiteFooter />
    </>
  );
}
