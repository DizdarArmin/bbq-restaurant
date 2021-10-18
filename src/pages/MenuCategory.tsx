import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";

import useCollection from "../hooks/useCollection";

export default function MenuCategory() {
  const { category }: any = useParams();
  const { data: products, status: productsStatus } = useCollection("products");
  const { data: categories, status: categoriesStatus } = useCollection("categories");

  const [localProducts, setLocalProducts] = useState(products);
  const [localCategory, setLocalCategory] = useState(categories);

  function FilterProducts() {
    const filteredProducts = products.filter(
      (item) => item.category.toLowerCase() === category
    );
    setLocalProducts(filteredProducts);
  }

  function FilterCategory() {
    const filteredCategory = categories.filter(
      (item) => item.name.toLowerCase() === category
    );
    setLocalCategory(filteredCategory);
  }
  useEffect(() => {
    FilterProducts();
    FilterCategory();
  }, [products, categories]);

  const Products = localProducts.map((item) => (
    <ProductCard key={item.id} item={item} />
  ));
  return (
    <div className="container-fluid">
      <div className="container">
        {localCategory.map((item, i) => (
          <div className="category-description" key={i}>
            <h2>{item.name}</h2>
            <br />
            <p>{item.description}</p>
          </div>
        ))}
        {localProducts.length > 0 && Products}
      </div>
    </div>
  );
}
