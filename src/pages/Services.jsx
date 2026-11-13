import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import ProposalBand from '../components/ProposalBand.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { services } from '../content/site.js';

export default function Services() {
  usePageTitle('Services', 'IT support and managed services, networks and cloud, software development, and cybersecurity — what you receive and how each is sold.');

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we deliver"
        lead="Each service shows who it is for, what you receive and how it is sold. Every engagement starts with a written proposal."
      />
      <section className="section section-alt">
        <div className="container">
          <div className="service-grid">
            {services.map((s) => (
              <article key={s.id} id={s.id} className="service-card" aria-labelledby={`${s.id}-title`}>
                <h2 id={`${s.id}-title`}>{s.title}</h2>
                <p className="for">For {s.forWhom}</p>
                <dl>
                  <dt>You receive</dt>
                  <dd><ul>{s.receive.map((r) => <li key={r}>{r}</li>)}</ul></dd>
                  <dt>How it is sold</dt>
                  <dd>{s.sold}</dd>
                </dl>
                <Link to={`/contact?service=${s.id}`} className="btn btn-secondary">Request a proposal</Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-7)' }} className="measure">
            <h2 className="h3">Not sure which fits?</h2>
            <p className="muted" style={{ margin: 'var(--space-2) 0 var(--space-5)' }}>
              Describe the problem and we will scope it.
            </p>
            <Link to="/contact?service=not-sure" className="btn btn-primary">Request a proposal</Link>
          </div>
        </div>
      </section>
      <ProposalBand />
    </>
  );
}
