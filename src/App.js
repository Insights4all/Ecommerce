import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import SignUp from "./components/Signup/Signup";
import Category from "./components/EachCategory/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/addproduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />

        <Route path="/contact-us" component={Contact} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/category" component={Category} />
        <Route path="/product" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/addproduct" component={AddProduct} />
      </Switch>
    </Router>
  );
}

export default App;
