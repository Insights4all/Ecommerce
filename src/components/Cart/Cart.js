import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import Footer from "../Footer/Footer";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Cart() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="bg-light">
      <Navbar />
      <center>
        <div className="checkout_right">
          <Subtotal />
        </div>

        <div class="table-responsive container mt-5">
          <table class="table" id="carttable">
            <thead>
              <tr>
                <th>#</th>
                <th class="th-lg">Product</th>
                <th class="th-lg">Quantity</th>
                <th class="th-lg">Total</th>
                <th class="th-lg"></th>
              </tr>
            </thead>
            <tbody>
              {basket.map((x) => (
                <CheckoutProduct
                  key={x.id}
                  product_title={x.title}
                  product_desc={x.desc}
                  product_price={x.price}
                />
              ))}
            </tbody>
          </table>
          <button className="btn btn-danger float-right">
            Proceed to checkout
          </button>
        </div>
      </center>
    </div>
  );
}

export default Cart;
