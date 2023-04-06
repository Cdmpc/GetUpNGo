var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  res.send("API is up and running, hooray!");
});
module.exports = router;
