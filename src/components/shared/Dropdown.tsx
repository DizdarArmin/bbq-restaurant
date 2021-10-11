import { useState } from "react";

export default function Dropdown({ children, name, category }) {
  const [dropdown, setDropDown] = useState(false);
  return (
    <div className="row product">
      <div className="col-12 row drop " onClick={() => setDropDown(!dropdown)}>
        <span className="col-5">{name}</span>
        <div className="col-5 category-drop">
          <span>{category}</span>
        </div>
        {dropdown && <i className="arrow col-2 fas fa-2x fa-caret-up" />}
        {!dropdown && <i className="arrow col-2 fas fa-2x fa-caret-down" />}
      </div>

      {dropdown && children}
    </div>
  );
}
