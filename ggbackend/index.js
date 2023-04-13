const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const bp = require("body-parser");
/** PERSISTENT LOGIN LIBS */
const es = require("express-session");
const cookie = require("cookie-parser");

/** STRIPE PAYMENT ADDITIONS */
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

/** Connect to MYSQL Database */
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Cadamopi11448#",
  database: "getupngo",
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(cookie());
app.use(
  es({
    key: "userID",
    secret: "some-secret-in-here",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 1000,
    },
  })
);

/** Get users that are already in the DB to send to the FE.*/
app.get("/getUsers", (req, res) => {
  var sqlGetUsers = "select * from members;";
  db.query(sqlGetUsers, (err, tups) => {
    if (err) return console.error("Get Users Query failed!");
    res.send(tups);
  });
});

/** STORES REGISTERED USERS INTO MYSQL DB. */
app.post("/registerUser", (req, res) => {
  /** var NameInQueryMethod = req.body.varNameInFEPostMethod. */
  var WebID = req.body.webID;
  var Username = req.body.Username;
  var Pass = req.body.Pass;
  var email = req.body.email;
  var isLoggedIn = req.body.isLoggedIn;

  var sqlRegister =
    "insert into members (WebID, Username, Pass, email) values (?, ?, ?, ?);";
  db.query(
    sqlRegister,
    [WebID, Username, Pass, email, isLoggedIn],
    (err, tups) => {
      if (err) {
        res.send({ message: "Registration query failed" });
      }
    }
  );
  var updateUserCount =
    "update website set no_of_users = (no_of_users) + 1 where WebID = 1";
  db.query(updateUserCount, (err, tups) => {
    if (err) {
      res.send({ message: "Registration query failed" });
    }
  });
});

/** MAKE A SERVER REQUEST TO SEE IF THE USER IS STILL LOGGED IN OR NOT. */
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  var username = req.body.Username;
  var password = req.body.Pass;

  var sqlLogin = "select * from members where Username = ? and Pass = ?;";
  db.query(sqlLogin, [username, password], (err, tups) => {
    if (err) {
      req.setEncoding({ err: err });
    } else {
      if (tups.length > 0) {
        req.session.user = tups;
        res.send(tups);
      } else {
        res.send({
          message: "Username or password is incorrect or non-existent!",
        });
      }
    }
  });
});

/** GET BIKE INFORMATION */
app.get("/bikes", (req, res) => {
  var sqlGetBikes = "select * from bike;";
  db.query(sqlGetBikes, (err, tups) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send(tups);
    }
  });
});

/** GET BIKE STORAGE INFORMATION IN TOTAL. */
app.get("/bikeStore", (req, res) => {
  let sqlStoredBikes = "select * from stores;";
  db.query(sqlStoredBikes, (err, tups) => {
    if (err) {
      res.send({ err: err });
    } else {
      res.send(tups);
    }
  });
});

/** STORE QUERY FROM FE TO BE */
app.post("/bikeStore", (req, res) => {
  let sqlGetBikesInStation =
    "select b.license_plate_no from bike as b, stores as s where s.StationID = ? and b.license_plate_no = s.license_plate_no and b.availability = 1;";
  let stationID = req.body.stationID;
  db.query(sqlGetBikesInStation, [stationID], (err, tups) => {
    if (err) {
      res.send({ message: "Query for getting bikes from station failed!" });
    } else {
      res.send(tups);
    }
  });
});

/** ADD PAYMENT REQUEST */
app.get("/payment", cors(), (req, res) => {
  var sqlGetBikes = "select * from bike;";
  db.query(sqlGetBikes, (err, tups) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send(tups);
    }
  });
});
app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  let license_plate_no = req.body.license_plate_no;
  let email = req.body.email;
  let Fname = req.body.Fname;
  let Lname = req.body.Lname;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "CAD",
      description: "GetUpNGo",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment Successful!",
      success: true,
    });
    let updateBikeAvailability =
      "update bike set availability = 0 where license_plate_no = ?;";
    db.query(updateBikeAvailability, [license_plate_no], (err, tups) => {
      if (err) {
        res.send({ message: "Updating bike availability failed!" });
      }
    });
    let addRenter =
      "insert into renter (license_plate_no, email, Fname, Lname) values(?, ?, ?, ?);";
    db.query(
      addRenter,
      [license_plate_no, email, Fname, Lname],
      (err, tups) => {
        if (err) {
          res.send({ message: "Cannot update renters!" });
        }
      }
    );
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment Failed!",
      success: false,
    });
  }
});

app.get("/bikeCounting", (req, res) => {
  var getBikeCount =
    "select s.StationID, COUNT(b.license_plate_no) as bikeCount from stores as s, bike as b where s.license_plate_no = b.license_plate_no and availability = 1 group by s.StationID;";
  db.query(getBikeCount, (err, tups) => {
    if (err) {
      res.send({ error: "Error getting query" });
    } else {
      res.send(tups);
    }
  });
});
app.post("/bikeCounting", (req, res) => {
  var getBikeCount =
    "select s.StationID, COUNT(b.license_plate_no) as bikeCount from stores as s, bike as b where s.license_plate_no = b.license_plate_no and availability = 1 group by s.StationID;";
  db.query(getBikeCount, (err, tups) => {
    if (err) {
      res.send({ error: "Error getting query" });
    } else {
      res.send(tups);
    }
  });
});

//Listen on given port
app.listen(port, () => {
  console.log("Listening on port " + port + "!");
});
