import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div class="col-xl-2 ml-5 col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6 products mb-3">
      <div className="card" id="eachcard">
        <div className="card-body" id="cardbody">
          <img
            className="product-img"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
          <a>
            <h5 className="text-center mt-3 product-name">
              {props.product_title}
            </h5>
          </a>
          <h6 className="text-center mt-2 mb-2 product-price">
            <i class="fas fa-rupee-sign"></i>
            {props.product_price}
          </h6>
          <a href="#" className=" btn btn-danger w-100 text-center addcart">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
