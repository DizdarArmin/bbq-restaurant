import { sortBy } from "../../scripts/Sorter";
import { useState } from "react";

export default function Sorter({ state, set }) {
  const [isAtoZ, setIsAtoZ] = useState(true);

  function Sort(value: string) {
    if (isAtoZ) {
      const sorted = sortBy(value, state);
      set(sorted);
      setIsAtoZ(false);
    } else {
      const sorted = sortBy(value, state).reverse();
      set(sorted);
      setIsAtoZ(true);
    }
  }

  function Search(value: string) {
    const search = state.filter((item) =>
      [item.name, item.category].some((e) =>
        e.toLowerCase().includes(value.toLowerCase())
      )
    );
    set(search);
  }
  return (
    <div className="sorter">
      <span onClick={() => Sort("name")}>Name</span>

      <span onClick={() => Sort("category")}>Category</span>

      <input
        className="search"
        placeholder="Search..."
        type="text"
        onChange={(event) => Search(event.target.value)}
      />
    </div>
  );
}
