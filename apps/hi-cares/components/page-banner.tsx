export function PageBanner({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-banner" aria-labelledby="page-banner-heading">
      <div className="page-banner-content">
        <p className="hero-badge">{eyebrow}</p>
        <h1 id="page-banner-heading">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
