import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { business } from '../content/site.js';

// Draft: have this reviewed against the Australian Privacy Principles before launch.
export default function Privacy() {
  usePageTitle('Privacy policy');
  return (
    <>
      <PageHeader title="Privacy policy" />
      <section className="section">
        <div className="container prose measure">
          <p>
            {business.registeredName} (ABN {business.abn}) respects your privacy. This policy explains what we collect
            through this website and how we use it.
          </p>
          <h2>What we collect</h2>
          <p>
            When you request a proposal we receive the details you enter: your name, organisation, email address, phone
            number (if given), the service you chose and your message.
          </p>
          <h2>How we use it</h2>
          <p>
            We use these details only to respond to your request and to prepare a proposal. We do not sell or share them
            for marketing.
          </p>
          <h2>Storage and security</h2>
          <p>
            Requests are kept in our business email, which is protected by named accounts and multi-factor sign-in. We
            keep them only as long as needed for the enquiry and any resulting work.
          </p>
          <h2>Access and correction</h2>
          <p>
            You can ask to see or correct the information we hold about you, or ask us to delete it, by emailing{' '}
            <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
