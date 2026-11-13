import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import ProposalBand from '../components/ProposalBand.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { business, leaders, values } from '../content/site.js';

function initials(name) {
  return name.split(' ').map((p) => p[0]).join('').slice(0, 2);
}

function LeaderPhoto({ leader }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="photo" aria-hidden={failed ? 'true' : undefined}>
      {failed ? initials(leader.name) : (
        <img src={leader.photo} alt={`${leader.name}, ${leader.role}`} onError={() => setFailed(true)} loading="lazy" />
      )}
    </div>
  );
}

export default function About() {
  usePageTitle('About', 'Elim Bridge Technologies: our name, our values and the directors who lead the business.');

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A registered Australian technology business"
        lead="Real names, real people and a clear way of working."
      />

      <section className="section" aria-labelledby="name-title">
        <div className="container grid-12">
          <div className="span-5">
            <p className="eyebrow">Our name</p>
            <h2 id="name-title" className="h2">Elim Bridge</h2>
          </div>
          <div className="span-7 measure">
            <p style={{ marginBottom: 'var(--space-4)' }}>
              <strong>Elim</strong> is a place of refreshment and provision (Exodus 15:27).{' '}
              <strong>Bridge</strong> stands for connecting people, organisations and communities through practical,
              responsible technology.
            </p>
            <p className="muted">We serve clients of every faith and background.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="values-title">
        <div className="container">
          <div className="section-head measure">
            <p className="eyebrow">Vision and values</p>
            <h2 id="values-title" className="h2">
              To be a trusted Australian technology services company, known for secure digital solutions, reliable service
              and meaningful connections between people and technology.
            </h2>
          </div>
          <div className="values">
            {values.map((v) => (
              <div key={v.name}>
                <h3>{v.name}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="leaders-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Leadership</p>
            <h2 id="leaders-title" className="h2">Directors</h2>
          </div>
          <div className="leaders">
            {leaders.map((l) => (
              <article key={l.name} className="leader">
                <LeaderPhoto leader={l} />
                <h3>{l.name}</h3>
                <p className="role">{l.role}</p>
                <p>{l.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="details-title">
        <div className="container grid-12">
          <div className="span-5">
            <p className="eyebrow">Business details</p>
            <h2 id="details-title" className="h2">Registered and accountable</h2>
          </div>
          <div className="span-7">
            <table className="facts-table">
              <tbody>
                <tr><th scope="row">Registered business name</th><td>{business.registeredName}</td></tr>
                <tr><th scope="row">ABN</th><td>{business.abn}</td></tr>
                <tr><th scope="row">Based in</th><td>{business.location}</td></tr>
                <tr><th scope="row">Serving</th><td>Australia and the Pacific</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ProposalBand />
    </>
  );
}
