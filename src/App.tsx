import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/base.scss";

import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import MenuCategory from "./pages/MenuCategory";
import MenuProduct from "./pages/MenuProduct";
import ManageCategories from "./pages/ManageCategories";
import ManageProducts from "./pages/ManageProducts";
import Navbar from "./components/Navbar";
import Contact from "pages/Contact";
//prettier-ignore
export default function App() {
  return (<>
    <Router>
      
    <Navbar />
      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/menu/:category/" exact component={MenuCategory} />
          <Route path="/menu/:category/:product" exact component={MenuProduct} />
          <Route path="/admin/category-management" exact
                 component={ManageCategories}/>
          <Route path="/admin/product-management" exact
                 component={ManageProducts}/>
          <Route path="/admin" exact component={AdminPage} />

      </Switch>
    </Router>
    </>
  );
}
