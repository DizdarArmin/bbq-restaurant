export default function EditInput({ HTML, state, set }) {
  const { label, type, placeholder, validation } = HTML;
  return (
    <label className="input">
      {label}
      <br />
      <input
        placeholder={placeholder}
        type={type}
        value={state || ""}
        onChange={(event) => set(event.target.value)}
      />
      <small>{validation}</small>
      <br />
    </label>
  );
}
