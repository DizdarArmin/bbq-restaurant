import AdminNavbar from "components/shared/AdminNavbar";
import FormContact from "components/shared/FormContact";

export default function AdminPage() {
  return (
    <div className="container-fluid admin">
      <div className="container">
        <AdminNavbar />

        <div className="product">
          <h3>Contact info</h3>
          <FormContact />
        </div>
      </div>
    </div>
  );
}
