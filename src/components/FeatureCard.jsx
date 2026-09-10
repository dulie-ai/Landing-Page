export function FeatureCard({ number, icon, title, children, tone }) {
  return (
    <article className={`feature-card feature-card--${tone}`}>
      <div className="feature-card__top">
        <span className="feature-card__number">{number}</span>
        <span className="feature-card__icon">{icon}</span>
      </div>
      <div className="feature-card__demo" aria-hidden="true">
        {tone === "violet" && (
          <>
            <span className="demo-message">Gym every Monday at 7</span>
            <span className="demo-token">EVENT</span>
            <span className="demo-token">MON · WEEKLY</span>
          </>
        )}
        {tone === "lime" && (
          <>
            <span className="demo-time">08:00</span>
            <span className="demo-reminder">Morning brief delivered</span>
            <span className="demo-pulse" />
          </>
        )}
        {tone === "cream" && (
          <>
            <span className="demo-calendar-day">
              <b>18</b>SEP
            </span>
            <span className="demo-calendar-copy">
              <b>Calendar + Tasks</b>Create · Edit · Undo
            </span>
            <span className="demo-calendar-check">✓</span>
          </>
        )}
      </div>
      <div className="feature-card__copy">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}
