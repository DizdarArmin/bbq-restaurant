import useCollection from "../hooks/useCollection";
import AddProduct from "../components/AddProduct";
import Product from "../components/Product";

import { useState, useEffect } from "react";
import Sorter from "../components/shared/Sorter";

export default function ManageProducts() {
  const { data, loading } = useCollection("products");
  const [products, setProducts] = useState(data ?? []);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (loading) return <div>Loading...</div>;

  const Products = products.map((item) => (
    <Product key={item.id} item={item} />
  ));

  return (
    <div className="container-fluid products">
      <div className="container">
        <AddProduct />
        {data.length > 0 && (
          <>
            <h3>Products</h3>
            <Sorter state={data} set={setProducts} />
            <div className="row">
              <label className="col-4"></label>
            </div>
            {Products}
          </>
        )}
      </div>
    </div>
  );
}
