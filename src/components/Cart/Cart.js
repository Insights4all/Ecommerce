import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import Footer from "../Footer/Footer";
import Subtotal from "../Subtotal/Subtotal";
function Cart() {
  const [img1, setImage1] = useState(
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-paper-flowers-1582662788.jpg?crop=0.631xw:0.945xh;0.0128xw,0.0504xh&resize=640:*"
  );
  const [count, setCount] = useState(1);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="bg-light">
      <Navbar />
      <center>
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
              <tr>
                <td scope="row">
                  <img
                    className="itemimage"
                    height="60px"
                    width="60px"
                    src={img1}
                  ></img>
                </td>
                <td>xyz</td>
                <td>
                  <div className="quantitybox w-50 h-25">
                    <button
                      className="mybutton btn btn-outline-primary btn-sm"
                      onClick={decrease}
                    >
                      -
                    </button>
                    <span className="count ml-3 mr-3 p-1">{count}</span>
                    <button
                      className="mybutton btn btn-outline-primary btn-sm"
                      onClick={increase}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>Lorem ipsum dolor</td>
                <td>
                  <button className="btn btn-danger btn-sm">X</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="itemimage"
                    height="60px"
                    width="60px"
                    src={img1}
                  ></img>
                </th>
                <td></td>
                <td>
                  <div className="quantitybox w-50 h-25">
                    <button
                      className="mybutton btn btn-outline-primary btn-sm"
                      onClick={decrease}
                    >
                      -
                    </button>
                    <span className="count ml-3 mr-3 p-1">{count}</span>
                    <button
                      className="mybutton btn btn-outline-primary btn-sm"
                      onClick={increase}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>Lorem ipsum dolor</td>
                <td>
                  <button className="btn btn-danger btn-sm">X</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="itemimage"
                    height="60px"
                    width="60px"
                    src={img1}
                  ></img>
                </th>
                <td></td>
                <td>
                  <div className="quantitybox w-50 h-25">
                    <button
                      className="mybutton btn btn-outline-primary btn-sm"
                      onClick={decrease}
                    >
                      -
                    </button>
                    <span className="count ml-3 mr-3  p-1">{count}</span>
                    <button
                      className="mybutton btn btn-outline-primary btn-sm"
                      onClick={increase}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>Lorem ipsum dolor</td>
                <td>
                  <button className="btn btn-danger btn-sm">X</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-danger float-right">
            Proceed to checkout
          </button>
        </div>
      </center>

      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://st4.depositphotos.com/1001941/22330/v/1600/depositphotos_223302142-stock-illustration-weekend-sale-website-header-design.jpg"
          />
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {/*basket Items*/}
          </div>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
