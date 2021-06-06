import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import SignUp from "./components/Register/Register";
import Category from "./components/EachCategory/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/addproduct";
import AllProduct from "./components/AllProduct/allproduct";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Checkout from "./components/Checkout/checkout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />

        <Route path="/contact-us" component={Contact} />
        <Route path="/category" component={Category} />
        <Route path="/singleproduct" component={SingleProduct} />
        <Route path="/allproduct" component={AllProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
