export default function EditInput({ HTML, state, set }) {
  const { label, type, placeholder, validation } = HTML;
  return (
    <label className="edit-input form-group">
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
