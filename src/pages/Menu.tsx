import CategoryCard from "../components/CategoryCard";
import useCollection from "../hooks/useCollection";

export default function Menu() {
  const { data: categories } = useCollection("categories");

  const Categories = categories.map((item) => (
    <CategoryCard key={item.id} item={item} />
  ));
  return (
    <div className="container-fluid">
      <div className="container">{categories.length > 0 && Categories}</div>
    </div>
  );
}
