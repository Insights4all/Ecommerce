import React, { useState, useEffect } from "react";
import axios from "axios";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      title: title,
      desc: desc,
      price: price,
    };
    console.log(payload);

    axios({
      url: "/save",
      method: "POST",
      data: payload,
    });
    reset();
  }

  function reset() {
    setTitle("");
    setdesc("");
    setprice(0);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="desc"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
