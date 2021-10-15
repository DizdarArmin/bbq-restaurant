import useCollection from "../../hooks/useCollection";
export default function Select({ state, set, HTML }) {
  const { label } = HTML;
  const { data: categories } = useCollection("categories");

  const Categories = categories.map((item) => (
    <option key={item.id} value={item.name}>
      {item.name}
    </option>
  ));

  if (!categories)
    return (
      <h3>You won't be able to add product without adding category first.</h3>
    );
  return (
    <label className="select">
      {label}
      <select value={state} onChange={(event) => set(event.target.value)}>
        <option disabled></option>
        {Categories}
      </select>
    </label>
  );
}
