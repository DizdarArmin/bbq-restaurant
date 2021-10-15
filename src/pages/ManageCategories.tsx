import useCollection from "../hooks/useCollection";
import AddCategory from "../components/admin/AddCategory";
import Category from "../components/admin/Category";
import AdminNavbar from "components/shared/AdminNavbar";

export default function Categories() {
  const { data: categories } = useCollection("categories");

  const Categories = categories.map((item) => (
    <Category key={item.id} item={item} />
  ));

  return (
    <div className="container-fluid">
      <div className="container">
        <AdminNavbar />
        <AddCategory />
        <div className="category">
          {categories.length > 0 && (
            <>
              <h3>Categories</h3>
              {Categories}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
