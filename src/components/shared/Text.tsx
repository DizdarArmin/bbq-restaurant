export default function Text({ HTML, state, set }) {
  const { label, placeholder, validation } = HTML;
  return (
    <label className="text-area">
      {label}
      <br />
      <textarea
        maxLength={500}
        placeholder={placeholder}
        value={state}
        onChange={(event) => set(event.target.value)}
      />
      <div>
        <small>{validation}</small>
        <small>{state.length} / 500</small>
      </div>
    </label>
  );
}
