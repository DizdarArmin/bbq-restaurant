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

export default function App() {
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
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/:category/" component={MenuCategory} />
          <Route path="/:category/:product" component={MenuProduct} />
        </Switch>
      </Router>
    </div>
  );
}
