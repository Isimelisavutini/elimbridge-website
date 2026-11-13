import { Link, NavLink } from 'react-router-dom';
import { nav } from '../content/site.js';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link to="/" className="logo" aria-label="Elim Bridge Technologies, home">
          <img src="/elimbridge-lockup-reversed.svg" alt="Elim Bridge Technologies" width="238" height="40" />
        </Link>
        <nav className="main-nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/contact" className="btn btn-accent btn-small header-cta">Request a proposal</Link>
      </div>
    </header>
  );
}
