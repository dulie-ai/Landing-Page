export function FeatureCard({ number, icon, title, children, tone }) {
  return (
    <article className={`feature-card feature-card--${tone}`}>
      <div className="feature-card__top">
        <span className="feature-card__number">{number}</span>
        <span className="feature-card__icon">{icon}</span>
      </div>
      <div className="feature-card__copy">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}
