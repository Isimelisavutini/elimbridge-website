import { Link } from 'react-router-dom';
import ProposalBand from '../components/ProposalBand.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { business, sectors, services, stages } from '../content/site.js';

export default function Home() {
  usePageTitle(null, 'Secure, practical IT support, networks and cloud, software development and cybersecurity for organisations in Australia and the Pacific.');

  return (
    <>
      <section className="hero">
        <div className="container grid-12">
          <div className="span-8">
            <span className="rule" aria-hidden="true"></span>
            <p className="eyebrow">Technology services · Sydney and the Pacific</p>
            <h1 className="display">{business.tagline}</h1>
            <p className="lead">
              Secure, practical IT support, cloud, software and cybersecurity for organisations in Sydney and the Pacific.
            </p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">Request a proposal</Link>
              <Link to="/how-we-deliver" className="btn btn-secondary">See how we deliver</Link>
            </div>
          </div>
          <aside className="span-4 hero-facts" aria-label="At a glance">
            <dl>
              <div><dt>Every engagement starts with</dt><dd>A written scope and fixed fees</dd></div>
              <div><dt>On your systems</dt><dd>Named accounts and multi-factor sign-in</dd></div>
              <div><dt>Response</dt><dd>{business.responseTime}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head measure">
            <p className="eyebrow">Services</p>
            <h2 id="services-title" className="h2">Four services, one standard of delivery</h2>
          </div>
          <ul className="service-list">
            {services.map((s, i) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`}>
                  <span className="num">0{i + 1}</span>
                  <span className="title">{s.title}</span>
                  <span className="summary">{s.summary}</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="deliver-title">
        <div className="container">
          <div className="section-head grid-12">
            <div className="span-7">
              <p className="eyebrow">How we deliver</p>
              <h2 id="deliver-title" className="h2">Five stages, agreed in writing</h2>
            </div>
            <p className="span-5 muted" style={{ alignSelf: 'end' }}>
              Every engagement follows the same steps, so you always know what happens next and what you will receive.
            </p>
          </div>
          <ol className="stages">
            {stages.map((s, i) => (
              <li key={s.title}>
                <div className="num">0{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: 'var(--space-6)' }}>
            <Link to="/how-we-deliver">Read how each stage works</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="sectors-title">
        <div className="container grid-12">
          <div className="span-5">
            <p className="eyebrow">Who we work with</p>
            <h2 id="sectors-title" className="h2">Organisations that need technology to be dependable</h2>
          </div>
          <div className="span-7">
            <ul className="sector-list">
              {sectors.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <ProposalBand />
    </>
  );
}
