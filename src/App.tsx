import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "styles/base.scss";

import AdminPage from "pages/AdminPage";
import HomePage from "pages/HomePage";
import Menu from "pages/Menu";
import MenuCategory from "pages/MenuCategory";
import MenuProduct from "pages/MenuProduct";
import ManageCategories from "pages/ManageCategories";
import ManageProducts from "pages/ManageProducts";
import Navbar from "components/Navbar";
import Contact from "pages/Contact";
import Flames from "components/shared/Flames";
import { useEffect, useState } from "react";
import Loading from "pages/Loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  // why a timeout? is for the flames loading? what if the download takes longer.
  // this should be done using an on completed event listener.
  // The intention is great but again a recruiter would notice this -0.1 (not full -1 because that would be mean)
  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading)
    return (
      <>
        <Flames />
        <Loading />
      </>
    );

  return (
    <div className="App">
      <Flames />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/product-manager" component={ManageProducts} />
          <Route path="/category-manager" component={ManageCategories} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/menu/:category/" component={MenuCategory} />
          <Route path="/:category/:product" component={MenuProduct} />
        </Switch>
      </Router>
    </div>
  );
}
