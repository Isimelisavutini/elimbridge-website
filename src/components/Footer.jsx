import { Link } from 'react-router-dom';
import { business, nav, services } from '../content/site.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src="/elimbridge-lockup-reversed.svg" alt="Elim Bridge Technologies" width="238" height="40" />
            <p className="tagline">{business.tagline} Technology services for organisations in Australia and the Pacific.</p>
          </div>
          <div>
            <h2>Pages</h2>
            <ul>
              {nav.map((item) => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={`mailto:${business.email}`}>{business.email}</a></li>
              {business.phones.map((p) => (
                <li key={p.number}>{p.label}: <a href={`tel:${p.number.replace(/\s/g, '')}`}>{p.number}</a></li>
              ))}
              <li>{business.location}</li>
            </ul>
            <h2 style={{ marginTop: 'var(--space-6)' }}>Services</h2>
            <ul>
              {services.map((s) => <li key={s.id}><Link to={`/services#${s.id}`}>{s.title}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {business.registeredName} · ABN {business.abn}</span>
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
