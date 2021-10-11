export default function ButtonCheck({ lock, handler }) {
  return (
    <button
      className="btn btn-success"
      disabled={lock}
      onClick={() => handler()}
    >
      <i className="fas fa-2x fa-check" />
    </button>
  );
}
