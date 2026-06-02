function Spinner({ delay = true }) {
  return (
    <div
      className={`loading-state ${delay ? "loading-state--deferred" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Ucitavanje stranice"
    >
      <div className="spinner"></div>
    </div>
  );
}

export default Spinner;
