import useCollection from "../hooks/useCollection";
import AddCategory from "../components/AddCategory";
import Category from "../components/Category";

export default function Categories() {
  const { data: categories, loading } = useCollection("categories");
  if (loading) return <div>Loading...</div>;

  const Categories = categories.map((item) => (
    <Category key={item.id} item={item} />
  ));

  return (
    <div className="container-fluid categories">
      <div className="container">
        <AddCategory />

        {categories.length > 0 && (
          <>
            <h3>Categories</h3>
            {Categories}
          </>
        )}
      </div>
    </div>
  );
}
