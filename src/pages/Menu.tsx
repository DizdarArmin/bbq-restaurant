import CategoryCard from "../components/CategoryCard";
import Loading from "../pages/Loading";
import useCollection from "../hooks/useCollection";
import Flames from "components/shared/Flames";
export default function Menu() {
  const { data: categories, status } = useCollection("categories");

  if (status === 1) return <Loading />;
  const Categories = categories.map((item) => (
    <CategoryCard key={item.id} item={item} />
  ));
  return (
    <div className="container-fluid">
      <Flames />
      <div className="container">{categories.length > 0 && Categories}</div>
    </div>
  );
}
