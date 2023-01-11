var express = require("express");
var router = express.Router();
var path = require("path");

router.use(express.static(path.join(__dirname, "..")));

router.get("/:newUser", function (req, res, next) {
  res.render("index", { newUser: req.params.newUser });
});

router.get("/add/:number1/:number2", function (req, res, next) {
  res.send(
    parseInt(req.params.number1) + parseInt(req.params.number2).toString()
  );
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "New title" });
});

module.exports = router;
