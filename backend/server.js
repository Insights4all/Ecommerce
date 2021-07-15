//Importing packages
//package.json created using npm init -y

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const AllProduct = require("./models/allproducts");
const User = require("./models/User");

var session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

//Initializing express
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser("secretcode"));

app.use(passport.initialize());
app.use(passport.session());
//Using Mongodb atlas
const mongodburi =
  "mongodb+srv://snaaz30:Safiya123@cluster1.kbo1i.mongodb.net/ecommerce?retryWrites=true&w=majority";
mongoose.connect(mongodburi || "mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!");
});

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());





app.get("/getproduct", (req, res) => {
  const data = req.body;
  console.log("got this body", data, "---", data.title);

  AllProduct.find({ title: data.title })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("No data found", error);
      res.json("error", error);
    });
});

//Routes for checking server
app.get("/api", (req, res) => {
  console.log("Inside gET API");

  AllProduct.find({})
    .then((data) => {
      console.log("Data", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("No data found");
    });
});

app.post("/save", (req, res) => {
  console.log("body", req.body);
  const data = req.body;
  const newProduct = new AllProduct(data);
  newProduct.save((error) => {
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

app.post("/user", (req, res) => {
  console.log("body", req.body);
  const data = req.body;
  const newUser = new User(data);
  newUser.save((error) => {
    if (error) {
      console.log("Sorry Error");
    } else {
      console.log("User Registered");
    }
  });
  res.json({
    msg: "We received your data",
  });
});

app.get("/user", (req, res) => {});

app.post("/register", (req, res) => {
  console.log(req.body);

  User.register(
    { username: req.body.username },
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.json("register");
        });
      }
    }
  );
});

app.get("/checklogin", function (req, res) {
  if (req.isAuthenticated()) {
    //console.log(req.isAuthenticated());
    res.json("Yes");
  } else {
    res.json("No");
  }
});

app.get("/checkout", function (req, res) {
  if (req.isAuthenticated()) {
    //console.log(req.isAuthenticated());
    res.json("authenticate");
  } else {
    res.json("noauthenticate");
  }
});

app.post("/login", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  console.log(req.body, "------recieved data is", req.body.username);
  req.login(user, function (err) {
    if (err) {
      console.log(err);
      //   res.json("errrros is", err);
    }
    // if (user == null) {
    //   res.json("aaa");
    // }
    else {
      passport.authenticate("local")(req, res, function () {
        res.json("loginsuccess");
        // res.status(200).json({ error: "boo:(" });
      });
    }
  });
});
app.get("/logout", function (req, res) {
  req.logout();
  //console.log("Logout sucess");
  res.json("done");
});

app.use(morgan("tiny"));
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
