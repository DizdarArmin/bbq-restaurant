export default function ButtonSubmit({ buttonDisabled }) {
  return (
    <button
      disabled={buttonDisabled}
      className="btn submit-button"
      type="submit"
    >
      ADD
    </button>
  );
}
