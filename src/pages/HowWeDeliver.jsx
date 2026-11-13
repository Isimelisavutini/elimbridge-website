import PageHeader from '../components/PageHeader.jsx';
import ProposalBand from '../components/ProposalBand.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { commitments, faqs, stages } from '../content/site.js';

export default function HowWeDeliver() {
  usePageTitle('How We Deliver', 'Five stages from discovery to support, with a written scope, tested changes and a documented handover.');

  return (
    <>
      <PageHeader
        eyebrow="How we deliver"
        title="Controlled, documented, low-risk"
        lead="Every engagement follows the same five stages. Each one ends with something you can read, approve or keep."
      />

      <section className="section" aria-labelledby="stages-title">
        <div className="container">
          <h2 id="stages-title" className="h2 section-head">The five stages</h2>
          <ol className="stages-detailed">
            {stages.map((s, i) => (
              <li key={s.title}>
                <span className="num">0{i + 1}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="muted">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="commit-title">
        <div className="container grid-12">
          <div className="span-5">
            <p className="eyebrow">Our commitments</p>
            <h2 id="commit-title" className="h2">What you can hold us to</h2>
          </div>
          <div className="span-7">
            <ul className="check-list">
              {commitments.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="container grid-12">
          <div className="span-4">
            <p className="eyebrow">Questions</p>
            <h2 id="faq-title" className="h2">Common questions</h2>
          </div>
          <div className="span-8 faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ProposalBand />
    </>
  );
}
