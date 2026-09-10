export function Mark({ size = 36 }) {
  return (
    <span
      className="brand-mark"
      style={{ "--mark-size": `${size}px` }}
      aria-hidden="true"
    >
      <img src={`${import.meta.env.BASE_URL}dulie-logo.png`} alt="" />
    </span>
  );
}

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Dulie home">
      <Mark />
      <span>Dulie</span>
    </a>
  );
}
