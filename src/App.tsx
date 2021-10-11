import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/base.scss";

import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import ManageCategories from "./pages/ManageCategories";
import MenuCategory from "./pages/MenuCategory";
import ManageProducts from "./pages/ManageProducts";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import BackgroundFlames from "./components/shared/BackgroundFlames";
//prettier-ignore
export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <BackgroundFlames>
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/menu/:category/" exact component={MenuCategory} />
       

        <Route path="/admin/category-management" exact
          component={() => <ManageCategories />}/>

        <Route path="/admin/product-management" exact
          component={() => <ManageProducts />}/>

        <Route path="/admin" exact component={AdminPage} />
        </BackgroundFlames>

      </Switch>
    </Router>
  );
}
