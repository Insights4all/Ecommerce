import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import axios from "axios";
import Footer from "../Footer/Footer";

function AllProduct() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    getAllProduct();
  });

  function getAllProduct() {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        console.log("Fetched Data");
        setProducts(data);
        console.log("My products", products);
      })
      .catch((error) => {
        console.log("Erroorrrr");
      });
  }

  return (
    <div>
      <div class="row ml-3 mr-3" id="product-row">
        {products.map((x) => (
          <Product
            key={x.id}
            product_title={x.title}
            product_desc={x.desc}
            product_price={x.price}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
