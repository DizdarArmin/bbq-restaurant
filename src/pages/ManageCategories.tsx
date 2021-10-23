import useCollection from "../hooks/useCollection";
import AddCategory from "../components/admin/AddCategory";
import Category from "../components/admin/Category";
import AdminNavbar from "components/shared/AdminNavbar";
import Loading from "./Loading";

export default function Categories() {
  const { data: categories, status } = useCollection("categories");

  if (status === 1) return <Loading />;
  const Categories = categories.map((item) => (
    <Category key={item.id} item={item} />
  ));

  // You should show me a message saying no category found, or please add a new category here and return early.

  return (
    <div className="container-fluid admin">
      <div className="container">
        <AdminNavbar />
        <AddCategory />
        {/* What happens if categories is not bigger than 0? */}
        <div className="category">
          {categories.length > 0 && <h3>Categories</h3>}
          {categories.length > 0 && Categories}
        </div>
      </div>
    </div>
  );
}
