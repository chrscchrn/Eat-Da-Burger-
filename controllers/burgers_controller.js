var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        var indexObject = {
            burgers: data
        };
        console.log(indexObject, "get");
        res.render("index", indexObject);
    });
});
// the focus should be on bringing the data back onto the page.
//Read some handlebars documentation to see what the partial is and common 
//troubleshooting techniques for the index.handlebars.

router.post("/api/burgers", (req, res) => {
    burger.create(
        ["burger_name", "devoured"], 
        [req.body.name, req.body.devoured], 
        (result) => {
            res.json({ id: result.insertId });
        }
    );
});

module.exports = router;