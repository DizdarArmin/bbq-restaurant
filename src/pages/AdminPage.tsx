import AdminNavbar from "components/shared/AdminNavbar";
import FormContact from "components/shared/FormContact";

export default function AdminPage() {
  return (
    <div className="container-fluid">
      <div className="container">
        <AdminNavbar />

        <div className="product">
          <h3>Products</h3>
          <FormContact />
        </div>
      </div>
    </div>
  );
}
