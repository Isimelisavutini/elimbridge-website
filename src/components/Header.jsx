import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../content/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  // Close the phone menu with Escape or a tap outside the header.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e) => { if (!e.target.closest('.site-header')) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
  }, [open]);

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
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Main">
          <div className="container">
            <ul>
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-accent">Request a proposal</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
