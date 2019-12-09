const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("GET in places");
  res.json({ message: "It works" });
});

module.exports = router;
