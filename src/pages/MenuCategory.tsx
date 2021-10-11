import { useEffect, useState } from "react";
import { useParams } from "react-router";

import useCollection from "../hooks/useCollection";

export default function CategoryPage() {
  const { category }: any = useParams();
  const { data, loading, error } = useCollection("products");

  const [products, setProducts] = useState(data);

  useEffect(() => {
    const filtered = data.filter(
      (item) => item.category.toLowerCase() === category
    );
    setProducts(filtered);;
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <div>{JSON.stringify(products)}ss</div>
    </>
  );
}
