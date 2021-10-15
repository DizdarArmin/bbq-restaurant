import useCollection from "../hooks/useCollection";
import AddProduct from "../components/admin/AddProduct";
import Product from "../components/admin/Product";

import { useState, useEffect } from "react";
import Sorter from "../components/shared/Sorter";
import AdminNavbar from "components/shared/AdminNavbar";

export default function ManageProducts() {
  const { data } = useCollection("products");
  const [products, setProducts] = useState(data ?? []);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const Products = products.map((item) => (
    <Product key={item.id} item={item} />
  ));

  return (
    <div className="container-fluid products">
      <div className="container">
        <AdminNavbar />
        <AddProduct />
        <div className="product">
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
    </div>
  );
}
