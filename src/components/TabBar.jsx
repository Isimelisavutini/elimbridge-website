import { NavLink } from 'react-router-dom';

// App-style bottom navigation for phones and tablets (hidden on desktop).
// Simple 24px line icons, 1.75 stroke, drawn to match the brand guidelines.
const icons = {
  home: (
    <path d="M3 10.5 12 3l9 7.5M5.5 8.5V21h5v-6h3v6h5V8.5" />
  ),
  services: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" />
      <rect x="13.5" y="3.5" width="7" height="7" />
      <rect x="3.5" y="13.5" width="7" height="7" />
      <rect x="13.5" y="13.5" width="7" height="7" />
    </>
  ),
  deliver: (
    <>
      <path d="M4 6.5l1.5 1.5L8.5 5M4 12.5 5.5 14l3-3M4 18.5 5.5 20l3-3" />
      <path d="M11.5 6.5H20M11.5 12.5H20M11.5 18.5H20" />
    </>
  ),
  about: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" />
      <path d="M15.5 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c1.9.8 3.1 2.5 3.5 5.2" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3.5 5.5 8.5 7 8.5-7" />
    </>
  ),
};

const tabs = [
  { to: '/', label: 'Home', icon: 'home', end: true },
  { to: '/services', label: 'Services', icon: 'services' },
  { to: '/how-we-deliver', label: 'Deliver', icon: 'deliver' },
  { to: '/about', label: 'About', icon: 'about' },
  { to: '/contact', label: 'Contact', icon: 'contact' },
];

export default function TabBar() {
  return (
    <nav className="tab-bar" aria-label="Main">
      <ul>
        {tabs.map((t) => (
          <li key={t.to}>
            <NavLink to={t.to} end={t.end} className={t.icon === 'contact' ? 'tab tab-contact' : 'tab'}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
                strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                {icons[t.icon]}
              </svg>
              <span>{t.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
