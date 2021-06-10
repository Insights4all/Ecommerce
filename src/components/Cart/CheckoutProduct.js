import React, { useState } from "react";
import "./CheckoutProduct.css";
import "./Cart.css";

function CheckoutProduct(props) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(props.product_price);

  const [img1, setImage1] = useState(
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-paper-flowers-1582662788.jpg?crop=0.631xw:0.945xh;0.0128xw,0.0504xh&resize=640:*"
  );

  function increase(e) {
    e.preventDefault();
    setCount(count + 1);
    setPrice(props.product_price * (count + 1));
    console.log(count, props.product_price);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <tr>
      <td scope="row">
        <img className="itemimage" height="60px" width="60px" src={img1}></img>
      </td>
      <td>{props.product_title}</td>
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
      <td>{price}</td>
      <td>
        <button className="btn btn-danger btn-sm">X</button>
      </td>
    </tr>
  );
}

export default CheckoutProduct;
