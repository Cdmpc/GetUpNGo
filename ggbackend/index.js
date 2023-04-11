const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
/** PERSISTENT LOGIN LIBS */
const bp = require("body-parser");
const es = require("express-session");
const cookie = require("cookie-parser");

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
    "insert into members (WebID, Username, Pass, email, isLoggedIn) values (?, ?, ?, ?, ?);";
  db.query(
    sqlRegister,
    [WebID, Username, Pass, email, isLoggedIn],
    (err, tups) => {
      if (tups) {
        res.send(tups);
      } else {
        res.send({ message: "Registration query failed" });
      }
    }
  );
});

/** LOGIN CONNECTION TO DB AND CHECKING. */
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ isLoggedIn: true, user: req.session.user });
  } else {
    res.send({ isLoggedIn: false });
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
        console.log(req.session.user);
        res.send(tups);
      } else {
        res.send({
          message: "Username or password is incorrect or non-existent!",
        });
      }
    }
  });
});

//Listen on given port
app.listen(port, () => {
  console.log("Listening on port " + port + "!");
});
