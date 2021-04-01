const express = require("express");

const router = express.Router();

const BlogPost = require("../models/blogpost");

//Routes for checking server
router.get("/api", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      console.log("Data", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("No data found");
    });
});

router.post("/save", (req, res) => {
  console.log("body", req.body);
  const data = req.body;
  const newBlogPost = new BlogPost(data);
  newBlogPost.save((error) => {
    if (error) {
      console.log("Sorry Error");
    } else {
      console.log("Data saved to mongoose");
    }
  });
  res.json({
    msg: "We received your data",
  });
});

router.get("/api/name", (req, res) => {
  const data = {
    username: "naaz",
    age: 10,
  };
  res.json(data);
});

module.exports = router;
