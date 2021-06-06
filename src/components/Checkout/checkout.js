import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { authenticate } from "passport";
function Checkout() {
  const history = useHistory();

  useEffect(() => {
    checkout();
  });

  function checkout() {
    axios
      .get("/checkout")
      .then((response) => {
        console.log(response.data);
        if (response.data == "authenticate") {
          //console.log("login successfull"),
          history.push("/checkout");
        } else {
          history.push("/login");
        }
      })
      .catch((error) => {
        console.log("Erroorrrr oops");
      });
  }

  return <div>Welcome to checkout</div>;
}

export default Checkout;
