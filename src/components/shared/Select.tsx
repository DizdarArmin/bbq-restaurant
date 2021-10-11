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
      <h3 className="text-danger bg-white p-2">
        You won't be able to add product without adding category first.
      </h3>
    );
  return (
    <label>
      {label}
      <select value={state} onChange={(event) => set(event.target.value)}>
        <option disabled></option>
        {Categories}
      </select>
    </label>
  );
}
