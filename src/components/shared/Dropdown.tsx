import { useState } from "react";

export default function Dropdown({ children, name, category }) {
  const [dropdown, setDropDown] = useState(false);
  return (
    <section>
      <div className="dropdown" onClick={() => setDropDown(!dropdown)}>
        <span>{name}</span>
        <span>{category}</span>
        {dropdown && <i className="arrow fas fa-2x fa-caret-up" />}
        {!dropdown && <i className="arrow  fas fa-2x fa-caret-down" />}
      </div>
      {dropdown && children}
    </section>
  );
}
