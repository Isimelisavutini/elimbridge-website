import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <>
      <PageHeader title="Page not found" lead="The page you are looking for does not exist or has moved." />
      <section className="section">
        <div className="container btn-row page-actions">
          <Link to="/" className="btn btn-primary">Go to the home page</Link>
          <Link to="/contact" className="btn btn-secondary">Contact us</Link>
        </div>
      </section>
    </>
  );
}
