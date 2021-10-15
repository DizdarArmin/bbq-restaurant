export default function ButtonDelete({ handler }) {
  return (
    <button className="button-red" onClick={() => handler()}>
      <i className="fas fa-2x fa-trash-alt" />
    </button>
  );
}
