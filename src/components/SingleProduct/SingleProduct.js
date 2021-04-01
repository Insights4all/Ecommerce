import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./SingleProduct.css";
import Product from "../Product/Product";
import productdata from "../../productdata";
import Footer from "../Footer/Footer";

function SingleProduct() {
  const [img1, setImage1] = useState(
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-paper-flowers-1582662788.jpg?crop=0.631xw:0.945xh;0.0128xw,0.0504xh&resize=640:*"
  );
  const [imgsrc, setImgsrc] = useState(
    "https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg"
  );
  function handleClick(e) {
    e.preventDefault();
    setImgsrc(img1);
  }
  return (
    <div className="bg-light">
      <Navbar />

      <div class="flex-container">
        <div class="flex-item-left">
          <div class="row">
            <div className="col firstcol">
              <a onClick={handleClick}>
                <img className="mb-2 eachimage" src={img1} />
              </a>
              <br />
              <a onClick={handleClick}>
                <img className="mb-2 eachimage" src={img1} />
              </a>
              <br />
              <a onClick={handleClick}>
                <img className="mb-2 eachimage" src={img1} />
              </a>
              <br />
              <a onClick={handleClick}>
                <img className="mb-2 eachimage" src={img1} />
              </a>
            </div>
            <div class="col secondcol">
              <img id="myImage" className="my-product-img" src={imgsrc} />
            </div>
          </div>
        </div>
        <div className="flex-item-right">
          <h1>Loreal Paris</h1>
          <h4 className="mt-2 mb-2 product-price">
            <i class="fas fa-rupee-sign"></i>599 | 15% off
          </h4>

          <div className="form-inline">
            <h6>Select Size</h6>
            <div className="form-group w-50 ml-5">
              <select class="form-control" id="sel1">
                <option>Small</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>

          <div className="form-inline mt-3">
            <h6>Choose color</h6>
            <div className="form-group w-50 ml-4">
              <select class="form-control" id="sel1">
                <option>Black</option>
                <option>Red </option>
                <option>Maroon</option>
                <option>white</option>
              </select>
            </div>
          </div>

          <div className="form-inline mt-3">
            <h6>Quantity</h6>
            <div className="form-group w-50 ml-5">
              <select class="form-control ml-3" id="sel1">
                <option>1</option>
                <option>2 </option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>

          <a className="btn btn-primary w-100">Add to Cart</a>
        </div>
      </div>
      <div className="productdesc">
        <h1 className="ml-3">Product description</h1>
        <p className="ml-3">
          Tired of unmanageable, dull hair and frizzy hair? L'Oreal Paris's new
          launch is your solution. Introducing the L'Oreal Paris Extraordinary
          Elseve Oil Serum, a luxurious multi-use hair serum that will give your
          hair a complete transformation! Infused with a blend of 6 rare flower
          oils - rose, chamomile, lotus, tiare, flax and sunflower, this
          leave-in hair treatment leaves you with extraordinarily soft, smooth,
          frizz free hair. Its lightweight formula provides deep nourishment
          without weighing your hair down. Features: Luxurious hair serum that
          provides deep nourishment to hair Infused with rose, chamomile, lotus,
          tiare, flax and sunflower oils Lightweight and non-greasy formula that
          does not weigh the hair down Helps detangle unmanageable hair and
          makes them 6x shinier Provides easy hair styling and also protects the
          hair from heat Leave-in complete hair treatment that can be used in
          multiple ways Suitable for all hair types
        </p>
        <h5 class="ml-4">Features</h5>
        <ul class="ml-5">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
          <li>Feature 5</li>
          <li>Feature 6</li>
        </ul>
      </div>
      <h5 className="browse">Browse more product</h5>
      <div class="row ml-3 mr-3" id="product-row">
        {productdata.map((x) => (
          <Product
            key={x.id}
            product_title={x.product_title}
            product_desc={x.product_desc}
            product_price={x.product_price}
          />
        ))}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Footer />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default SingleProduct;
