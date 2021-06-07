import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal (0 items) : <strong>0</strong>
          </p>
        )}
        decimalScale={2}
        value={25689}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
