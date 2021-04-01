import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import Footer from "../Footer/Footer";

function Cart() {
  const [img1, setImage1] = useState(
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-paper-flowers-1582662788.jpg?crop=0.631xw:0.945xh;0.0128xw,0.0504xh&resize=640:*"
  );

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
                <td>Lorem ipsum dolor</td>
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
                <td>Lorem ipsum dolor</td>
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
                <td>Lorem ipsum dolor</td>
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
    </div>
  );
}

export default Cart;
