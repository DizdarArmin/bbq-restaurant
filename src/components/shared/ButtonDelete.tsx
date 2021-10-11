export default function ButtonDelete({ handler }) {
  return (
    <button className="btn btn-danger" onClick={() => handler()}>
      <i className="fas fa-2x fa-trash-alt" />
    </button>
  );
}
