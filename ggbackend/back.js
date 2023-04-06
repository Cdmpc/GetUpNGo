const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send("This is now working... and then some!");
});

app.listen(port, () => {
  console.log("Listening at http://localhost:" + port);
});
