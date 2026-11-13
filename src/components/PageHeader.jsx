export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <section className="page-header">
      <div className="container">
        <span className="rule" aria-hidden="true"></span>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="h1">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
