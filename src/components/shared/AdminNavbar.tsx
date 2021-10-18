import { Link } from "react-router-dom";
export default function AdminNavbar() {
  return (
    <div className="admin-nav">
      <Link className="admin-card" to="/admin">
        <i className="far fa-2x fa-building"></i>
        <h4>Contact Info</h4>
      </Link>
      <Link className="admin-card" to="/category-manager">
        <i className="fas fa-2x fa-stream" />
        <h4>Categories</h4>
      </Link>
      <br />
      <Link className="admin-card" to="/product-manager">
        <i className="fas fa-2x fa-shopping-basket" />
        <h4>Products</h4>
      </Link>
    </div>
  );
}
