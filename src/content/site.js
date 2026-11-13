// All website copy and business details live here, so wording can be changed
// without touching the page layouts.

export const business = {
  name: 'Elim Bridge Technologies',
  registeredName: 'ELIMBRIDGE TECHNOLOGIES',
  abn: '23 904 305 868',
  tagline: 'Connecting People. Empowering the Future.',
  location: 'Sydney, NSW',
  // TODO: switch to info@elimbridge.com.au once that mailbox or alias exists.
  email: 'dave@elimbridge.com.au',
  // Public phone numbers are still an open decision. Add them here and they
  // appear on the Contact page and in the footer, e.g. { label: 'Australia', number: '+61 ...' }
  phones: [],
  responseTime: 'We reply within two business days.',
  replyPromise: 'We reply with a scope and next steps within two business days.',
};

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-we-deliver', label: 'How We Deliver' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const sectors = [
  'Small and medium enterprises and professional practices',
  'Healthcare and allied services',
  'Schools and training providers',
  'Community organisations and charities',
  'Regional and Pacific-linked enterprises',
];

export const services = [
  {
    id: 'it-support',
    title: 'IT support and managed services',
    summary: 'Day-to-day support that keeps your people working.',
    forWhom: 'SMEs, practices, schools and charities.',
    receive: [
      'Device setup and maintenance',
      'Help desk and remote support',
      'Security patching and updates',
      'An up-to-date list of your devices and licences',
      'Backup coordination and checks',
    ],
    sold: 'Monthly or annual support agreement',
  },
  {
    id: 'networks-cloud',
    title: 'Networks, systems and cloud',
    summary: 'Reliable networks, business email and cloud services.',
    forWhom: 'growing offices and teams across more than one site.',
    receive: [
      'Network assessment and setup',
      'Microsoft 365 or Google Workspace',
      'Business email and domains',
      'Cloud migration',
      'A written backup and recovery plan',
    ],
    sold: 'Fixed-fee project, then ongoing support',
  },
  {
    id: 'software',
    title: 'Software and digital development',
    summary: 'Websites, portals and tools built around how you work.',
    forWhom: 'any organisation, including health providers.',
    receive: [
      'Websites, web applications and portals',
      'Workflow automation',
      'Reporting dashboards',
      'Testing and staff training',
      'Ongoing maintenance',
    ],
    sold: 'Fixed-fee project under a statement of work',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity and data protection',
    summary: 'Practical protection for client and health information.',
    forWhom: 'organisations holding client or health data.',
    receive: [
      'Security review and written report',
      'Access control and multi-factor sign-in',
      'Endpoint protection',
      'Staff awareness training',
      'Security policies and incident readiness',
    ],
    sold: 'Fixed-fee review, then ongoing support',
  },
];

export const stages = [
  {
    title: 'Enquiry and discovery',
    short: 'We learn your needs and risks.',
    detail: 'We record your needs, risks, locations and decision-makers.',
  },
  {
    title: 'Assessment and proposal',
    short: 'You receive a written scope.',
    detail: 'A written scope with timeframes, fees and responsibilities.',
  },
  {
    title: 'Authorisation and contract',
    short: 'Terms agreed before work starts.',
    detail: 'Confidentiality, access, service levels and payment terms are agreed.',
  },
  {
    title: 'Delivery and testing',
    short: 'Work to a documented plan.',
    detail: 'Work follows a documented plan; changes are tested and accepted by you.',
  },
  {
    title: 'Support and review',
    short: 'Handover, support and review.',
    detail: 'Handover documents, tracked support requests and a review of outcomes.',
  },
];

export const commitments = [
  'A written scope and fees before any work starts.',
  'Named accounts and multi-factor sign-in on your systems.',
  'Backups, with recovery tested.',
  'A documented handover at the end of every project.',
];

export const faqs = [
  {
    q: 'How is pricing set?',
    a: 'Projects are quoted as a fixed fee in the written proposal, so you know the cost before work starts. Ongoing support is a monthly or annual agreement.',
  },
  {
    q: 'How do you protect our data?',
    a: 'We use named accounts with multi-factor sign-in, give access only to what the work needs, and agree confidentiality terms in the contract before we start.',
  },
  {
    q: 'What support do we get after a project?',
    a: 'Every project ends with handover documents. You can then move to a support agreement with tracked requests and regular reviews.',
  },
  {
    q: 'Do you work with Pacific-based organisations?',
    a: 'Yes. We are based in Sydney and work with organisations across Australia and the Pacific, on site where needed and remotely otherwise.',
  },
];

export const values = [
  { name: 'Integrity', text: 'We say what we will do, in writing, and do it.' },
  { name: 'Stewardship', text: 'We look after your systems and data as if they were our own.' },
  { name: 'Excellence', text: 'Careful work, tested before it is handed over.' },
  { name: 'Service', text: 'Technology should serve people, not the other way round.' },
  { name: 'Accountability', text: 'Named people, clear records and regular reviews.' },
];

export const leaders = [
  {
    name: 'Filipe Dave',
    role: 'Executive Director',
    bio: 'Leads strategy, finance and major commercial decisions.',
    photo: '/team/filipe-dave.jpg',
  },
  {
    name: 'Isimeli Gonerogo',
    role: 'Director of Technology and Operations (CTO)',
    bio: 'Leads architecture, delivery and security.',
    photo: '/team/isimeli-gonerogo.jpg',
  },
  {
    name: 'Josese Mailulu',
    role: 'Director, Corporate Strategy and Strategic Partnerships',
    bio: 'Leads partnerships and entry into new sectors.',
    photo: '/team/josese-mailulu.jpg',
  },
];
