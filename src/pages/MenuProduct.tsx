import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ProductDetails from "components/ProductDetails";
import useCollection from "../hooks/useCollection";

export default function MenuProduct() {
  const { product }: any = useParams();
  const { data } = useCollection("products");

  const [products, setProducts] = useState(data);

  useEffect(() => {
    const filtered = data.filter(
      (item) => item.name.replace(/\s+/g, "-").toLowerCase() === product
    );
    setProducts(filtered);
  }, [data, product]);

  const Products = products.map((item) => (
    <ProductDetails key={item.id} item={item} />
  ));
  return (
    <div className="container-fluid">
      <div className="container">{products.length > 0 && Products}</div>
    </div>
  );
}
