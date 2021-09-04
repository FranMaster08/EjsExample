var express = require("express");
let platosdb =require("../database/platos.json")
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {platos: platosdb})
 
});
router.get("/about", function (req, res, next) {
  res.render("about", {
    title: "Dr Manhattan",
    nombre: "Itati",
    alumnos: ["a", "a", "a", "a", "a", "a"],
  });
});
router.get("/detalle/:id", function (req, res, next) {
  const plato = platosdb.find(item => item.id == req.params.id)
  res.render('detalleMenu',{plato:plato})
});


module.exports = router;
