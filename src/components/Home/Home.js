import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import Footer from "../Footer/Footer";

function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <Navbar />

      <div class="p-5 text-left bg-light myImage ">
        <h1 class="mb-3 text-white">Shopymart</h1>
        <h4 class="mb-3 text-white">
          We Ship over 45 millions products over world
        </h4>
        <a class="btn btn-outline-dark" href="" role="button">
          Shop Now
        </a>
      </div>

      <br />
      <br />
      <h3 class="text-primary text-center p-2">Categories</h3>

      <Carousel
        responsive={responsive}
        itemClass="h-75"
        autoPlay={true}
        autoPlaySpeed={1500}
        keyBoardControl={false}
        showDots={false}
        removeArrowOnDeviceType={"mobile"}
      >
        <div>
          <img
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
        </div>
        <div>
          <img
            className="product-category rounded-circle"
            src="https://cdn.mos.cms.futurecdn.net/pbMyEg3zPtnEmVsN4qv2dM-1200-80.jpg"
          />
        </div>
        <div>
          <img
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
        </div>
        <div>
          <img
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
          <p className="ml-5">Dresses</p>
        </div>
        <div className="ml-4">
          <img
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
          <p className="ml-5">Dresses</p>
        </div>
        <div className="ml-4">
          <img
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
          <p className="ml-5">Dresses</p>
        </div>
        <div className="ml-4">
          <img
            className="product-category rounded-circle"
            src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
          />
          <p className="ml-5">Dresses</p>
        </div>
      </Carousel>
      <div>
        <h3 class="text-primary text-center p-2">Our Products</h3>
        <div class="row ml-2 mr-2" id="product-row">
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 products mb-3">
            <div className="card" id="eachcard">
              <div className="card-body" id="cardbody">
                <img
                  className="product-img"
                  src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
                />
                <a>
                  <h5 className="text-center mt-3 product-name">
                    Women Fit and Flare
                  </h5>
                </a>
                <h6 className="text-center mt-2 mb-2 product-price">
                  <i class="fas fa-rupee-sign"></i>599 | 15% off
                </h6>
                <a
                  href="#"
                  className=" btn btn-danger w-100 text-center addcart"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 products mb-3">
            <div className="card" id="eachcard">
              <div className="card-body" id="cardbody">
                <img
                  className="product-img"
                  src="https://cdn.mos.cms.futurecdn.net/pbMyEg3zPtnEmVsN4qv2dM-1200-80.jpg"
                />

                <a>
                  <h5 class="text-center mt-3 product-name">
                    Women Fit and Flare
                  </h5>
                </a>
                <h6 class="text-center mt-2 mb-2 product-price">
                  <i class="fas fa-rupee-sign"></i>599 | 15% off
                </h6>
                <a href="#" class=" btn btn-danger w-100 text-center addcart">
                  Add to cart
                </a>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 products mb-3">
            <div className="card" id="eachcard">
              <div className="card-body" id="cardbody">
                <img
                  className="product-img"
                  src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
                />
                <a>
                  <h5 class="text-center mt-3 product-name">
                    Women Fit and Flare
                  </h5>
                </a>
                <h6 class="text-center mt-2 mb-2 product-price">
                  <i class="fas fa-rupee-sign"></i>599 | 15% off
                </h6>
                <a href="#" class=" btn btn-danger w-100 text-center addcart">
                  Add to cart
                </a>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 products mb-3">
            <div className="card" id="eachcard">
              <div className="card-body" id="cardbody">
                <img
                  className="product-img"
                  src="https://s7d1.scene7.com/is/image/BHLDN/52924438_011_a?$zoom$"
                />
                <a>
                  <h5 class="text-center mt-3 product-name">
                    Women Fit and Flare
                  </h5>
                </a>
                <h6 class="text-center mt-2 mb-2 product-price">
                  <i class="fas fa-rupee-sign"></i>599 | 15% off
                </h6>
                <a href="#" class=" btn btn-danger w-100 text-center addcart">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default Home;
