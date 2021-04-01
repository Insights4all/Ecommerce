import React from "react";
import "../Product/Product.css";
import Product from "../Product/Product";
import productdata from "../../productdata";
import Navbar from "../Navbar/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import Footer from "../Footer/Footer";

function Category(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div>
      <Navbar />

      <br />
      <br />
      <Carousel
        responsive={responsive}
        itemClass="h-25 w-50"
        autoPlay={true}
        autoPlaySpeed={1500}
        keyBoardControl={false}
        showDots={false}
        removeArrowOnDeviceType={"mobile"}
      >
        <div className="ml-4">
          <img
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
        </div>
        <div className="ml-4">
          <Image
            className="product-category rounded-circle"
            src="https://cdn.mos.cms.futurecdn.net/pbMyEg3zPtnEmVsN4qv2dM-1200-80.jpg"
          />
        </div>
        <div className="ml-4">
          <Image
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
        </div>
        <div className="ml-4">
          <Image
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
        </div>
        <div className="ml-4">
          <Image
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
        </div>
        <div className="ml-4">
          <Image
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
        </div>
        <div className="ml-4">
          <Image
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
        </div>
      </Carousel>
      <br />
      <br />
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
    </div>
  );
}

export default Category;
