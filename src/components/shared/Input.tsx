export default function Input({ HTML, state, set }) {
  const { label, type, placeholder, validation } = HTML;
  return (
    <label className="my-input form-group">
      {label}
      <br />
      <input
        placeholder={placeholder}
        type={type}
        value={state}
        onChange={(event) => set(event.target.value)}
      />
      <small>{validation}</small>
    </label>
  );
}
