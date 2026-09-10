export function Mark({ size = 36 }) {
  return (
    <span
      className="brand-mark"
      style={{ "--mark-size": `${size}px` }}
      aria-hidden="true"
    >
      <span className="brand-mark__orbit" />
      <span className="brand-mark__core" />
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
