import { Link } from "react-router-dom";
export default function AdminPage() {
  return (
    <div className="row">
      <Link
        className="col-12 col-md-6 admin-card"
        to="/admin/category-management"
      >
        <i className="fas fa-2x fa-cogs" />
        <h4>Categories</h4>
      </Link>
      <br />
      <Link
        className="col-12 col-md-6 admin-card"
        to="/admin/product-management"
      >
        <i className="fas fa-2x fa-cogs" />
        <h4>Products</h4>
      </Link>
    </div>
  );
}
