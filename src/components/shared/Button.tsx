export default function Button({ style, lock, handler, children }) {
  return (
    <button
      className={`btn btn-${style}`}
      disabled={lock}
      onClick={() => handler()}
    >
      {children}
    </button>
  );
}
