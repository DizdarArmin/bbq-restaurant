import useCollection from "../hooks/useCollection";
import AddProduct from "../components/admin/AddProduct";
import Product from "../components/admin/Product";

import { useState, useEffect } from "react";
import Sorter from "../components/shared/Sorter";
import AdminNavbar from "components/shared/AdminNavbar";
import iProduct from "types/iProduct";
import Loading from "./Loading";

export default function ManageProducts() {
  const { data, status } = useCollection("products");
  const [products, setProducts] = useState(Array<iProduct>());

  useEffect(() => {
    setProducts(data);
  }, [data]);
  
  if (status === 1) return <Loading />;
  const Products = products.map((item) => (
    <Product key={item.id} item={item} />
  ));

  return (
    <div className="container-fluid products admin">
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
