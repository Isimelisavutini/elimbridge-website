import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { business, services } from '../content/site.js';

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const serviceOptions = [
  ...services.map((s) => ({ value: s.id, label: s.title })),
  { value: 'not-sure', label: 'Not sure yet' },
];

const empty = { name: '', organisation: '', email: '', phone: '', service: '', message: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your name.';
  if (!v.organisation.trim()) e.organisation = 'Enter your organisation.';
  if (!v.email.trim()) e.email = 'Enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter an email address like name@example.com.';
  if (!v.service) e.service = 'Choose a service, or "Not sure yet".';
  if (v.message.trim().length < 10) e.message = 'Tell us briefly what you need.';
  return e;
}

function Field({ id, label, required, hint, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}{required && <span className="required" aria-hidden="true"> *</span>}</label>
      {hint && <p className="hint" id={`${id}-hint`}>{hint}</p>}
      {children}
      {error && <p className="error-text" id={`${id}-error`}>{error}</p>}
    </div>
  );
}

export default function Contact() {
  usePageTitle('Request a proposal', 'Tell us what you need. We reply with a scope and next steps within two business days.');
  const [params] = useSearchParams();
  const preset = serviceOptions.some((o) => o.value === params.get('service')) ? params.get('service') : '';

  const [values, setValues] = useState({ ...empty, service: preset });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | failed

  const set = (key) => (ev) => setValues((v) => ({ ...v, [key]: ev.target.value }));
  const describedBy = (id, hint) => [hint && `${id}-hint`, errors[id] && `${id}-error`].filter(Boolean).join(' ') || undefined;

  async function onSubmit(ev) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(Object.keys(e)[0])?.focus();
      return;
    }
    const serviceLabel = serviceOptions.find((o) => o.value === values.service)?.label;

    if (FORM_ENDPOINT) {
      setStatus('sending');
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...values, service: serviceLabel }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus('sent');
        setValues(empty);
      } catch {
        setStatus('failed');
      }
      return;
    }

    // No form service configured: open the visitor's email app with the request filled in.
    const subject = `Proposal request: ${serviceLabel} — ${values.organisation}`;
    const body = [
      `Name: ${values.name}`,
      `Organisation: ${values.organisation}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || '—'}`,
      `Service: ${serviceLabel}`,
      '',
      values.message,
    ].join('\n');
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request a proposal"
        lead={`Tell us what you need and by when. ${business.replyPromise}`}
      />
      <section className="section">
        <div className="container grid-12">
          <div className="span-7">
            {status === 'sent' && (
              <p className="notice notice-success" role="status" style={{ marginBottom: 'var(--space-6)' }}>
                Thank you. Your request has been sent. {business.responseTime}
              </p>
            )}
            {status === 'mailto' && (
              <p className="notice notice-success" role="status" style={{ marginBottom: 'var(--space-6)' }}>
                Your email app should now open with your request filled in. Press send there to reach us.
                If nothing opened, email us at <a href={`mailto:${business.email}`}>{business.email}</a>.
              </p>
            )}
            {status === 'failed' && (
              <p className="notice notice-error" role="alert" style={{ marginBottom: 'var(--space-6)' }}>
                Your request could not be sent. Please try again, or email us at{' '}
                <a href={`mailto:${business.email}`}>{business.email}</a>.
              </p>
            )}
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <Field id="name" label="Your name" required error={errors.name}>
                  <input id="name" name="name" autoComplete="name" value={values.name} onChange={set('name')}
                    aria-invalid={!!errors.name} aria-describedby={describedBy('name')} />
                </Field>
                <Field id="organisation" label="Organisation" required error={errors.organisation}>
                  <input id="organisation" name="organisation" autoComplete="organization" value={values.organisation}
                    onChange={set('organisation')} aria-invalid={!!errors.organisation} aria-describedby={describedBy('organisation')} />
                </Field>
              </div>
              <div className="form-row">
                <Field id="email" label="Email" required error={errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')}
                    aria-invalid={!!errors.email} aria-describedby={describedBy('email')} />
                </Field>
                <Field id="phone" label="Phone" hint="Optional. Include the country code for Fiji or overseas." error={errors.phone}>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')}
                    aria-describedby={describedBy('phone', true)} />
                </Field>
              </div>
              <Field id="service" label="Service" required error={errors.service}>
                <select id="service" name="service" value={values.service} onChange={set('service')}
                  aria-invalid={!!errors.service} aria-describedby={describedBy('service')}>
                  <option value="">Choose a service</option>
                  {serviceOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </Field>
              <Field id="message" label="What do you need, and by when?" required
                hint="A few sentences is enough: the problem, how many people or sites, and any deadline." error={errors.message}>
                <textarea id="message" name="message" value={values.message} onChange={set('message')}
                  aria-invalid={!!errors.message} aria-describedby={describedBy('message', true)} />
              </Field>
              <div>
                <button type="submit" className="btn btn-primary contact-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Request a proposal'}
                </button>
                <p className="small muted" style={{ marginTop: 'var(--space-3)' }}>
                  We use these details only to reply to your request. See our <a href="/privacy">privacy policy</a>.
                </p>
              </div>
            </form>
          </div>

          <aside className="span-5" aria-label="Other ways to reach us">
            <div className="contact-aside">
              <div>
                <h2>Email</h2>
                <p><a href={`mailto:${business.email}`}>{business.email}</a></p>
              </div>
              {business.phones.length > 0 && (
                <div>
                  <h2>Phone</h2>
                  {business.phones.map((p) => (
                    <p key={p.number}>{p.label}: <a href={`tel:${p.number.replace(/\s/g, '')}`}>{p.number}</a></p>
                  ))}
                </div>
              )}
              <div>
                <h2>Where we work</h2>
                <p>{business.location}, serving clients in Australia and the Pacific.</p>
              </div>
              <div>
                <h2>Response</h2>
                <p>{business.responseTime}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
