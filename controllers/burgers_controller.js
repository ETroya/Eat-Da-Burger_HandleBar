const express = require("express");
const router =express.Router();

//import the model burger.js
const burger =require ("../models/burger")

//create all routes
router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
});

router.post('/burgers/create', (req, res) => {
    burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function(){
      // Send back the ID of the new quote
      res.redirect("/")
    });
});

router.put("/api/burgers/:id", function(req,res){
    const condition= "id = " + req.params.id;
    console.log("Updating:", condition);

    burger.update({ devoured: req.body.devoured}, condition, function(){
        res.redirect("/");
    })
})

module.exports = router;

