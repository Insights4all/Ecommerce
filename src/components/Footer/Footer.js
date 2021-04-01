import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="row p-3  footer-row ">
        <div class="col">
          About
          <br />
          <a href="#">Contact us</a>
          <br />
          <a href="#">About us</a>
          <br />
        </div>
        <div class="col">
          Policy
          <br />
          <a href="#">Privacy</a> <br />
          <a href="#">Terms of Use</a>
          <br />
          <a href="#">Return Policy</a>
          <br />
        </div>
        <div class="col">
          Social
          <br />
          <a href="#">Facebook</a> <br />
          <a href="#">Twitter</a>
          <br />
          <a href="#">Instagram</a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
