import { Link } from 'react-router-dom';
import { business } from '../content/site.js';

export default function ProposalBand() {
  return (
    <section className="proposal-band" aria-labelledby="proposal-band-title">
      <div className="container">
        <div>
          <span className="rule" aria-hidden="true"></span>
          <h2 id="proposal-band-title">Tell us what you need.</h2>
          <p>{business.replyPromise}</p>
        </div>
        <Link to="/contact" className="btn btn-primary">Request a proposal</Link>
      </div>
    </section>
  );
}
