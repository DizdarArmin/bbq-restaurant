export default function ButtonSubmit({ buttonDisabled }) {
  return (
    <div className="submit-button">
      <button disabled={buttonDisabled} type="submit">
        ADD
      </button>
    </div>
  );
}
