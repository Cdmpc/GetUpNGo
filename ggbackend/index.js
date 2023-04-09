const express = require("express");
const bp = require("body-parser");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Cadamopi11448#",
  database: "getupngo",
});
app.use(cors());
app.use(express.json());
app.use(bp.urlencoded({ extended: true }));

/** Get users that are already in the DB to send to the FE.*/
app.get("/getUsers", (req, res) => {
  var sqlGetUsers = "select * from members;";
  db.query(sqlGetUsers, (err, rows) => {
    res.send(rows);
  });
});

/** Send data from FE TO THE BE, this is similar syntax to app.get() */
app.post("/registerUser", (req, res) => {
  /** var "Name in .query" = req.body.varNameInFEPostMethod. */
  var WebID = req.body.webID;
  var Username = req.body.Username;
  var Pass = req.body.Pass;
  var email = req.body.email;
  var sqlRegister =
    "insert into members (WebID, Username, Pass, email) values (?, ?, ?, ?);";
  db.query(sqlRegister, [WebID, Username, Pass, email], (err, rows) => {
    console.log(rows);
  });
});

//Listen on given port
app.listen(port, () => {
  console.log("Listening on port " + port + "!");
});
