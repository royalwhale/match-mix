const express = require("express");
const router = express.Router();

const db = require("../models");

/* Root route /bars */
router.get("/", function (req, res) {
  db.Bar.find({}, function (error, allBars) {
    if(error) {
      console.log(error);
      res.send({message:"Internal Server Error"});
    } else {
      const context = {bars: allBars};
      res.render("bars/index", context);
    }
  });
});

/* New bar route */
router.get("/new", function (req, res) {
  db.Ingredient.find({}, function (error, allIngredients) {
    if(error) {
      console.log(error);
      res.send({message:"Internal Server Error"});
    } else {
      const context = {ingredients: allIngredients};
      res.render("bars/new", context);
    }
  });
});

/* Create new bar */
router.post("/", function (req, res) {
  db.Bar.create(req.body, function (error, createdBar) {
    if(error) {
      console.log(error);
      res.send({message: "Internal Server Error"});
    } else {
      res.redirect("/bars");
    }
  });    
});

/* Bar show route */
router.get("/:id",  function (req, res) {
  db.Bar.findById(req.params.id).populate("ingredient").exec(function (error, foundBar) {
    if(error) {
      console.log(error);
      res.send({message: "Internal Server Error"});
    } else {
      const context = {bar: foundBar};
      res.render("bars/show", context);
    }
  });
});

/* Edit bar route */
router.get("/:id/edit",  function (req, res) {
  db.Bar.findById(req.params.id, function (error, foundBar) {
    if(error) {
      console.log(error);
      res.send({message: "Internal Server Error"});
    } else {
      const context = {bar: foundBar};
      res.render("bars/edit", context);
    }
  });
});

/* Update bar */
router.put("/:id",  function (req, res) {
  db.Bar.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (error, updatedBar) {
    if(error) {
      console.log(error);
      res.send({message: "Internal Server Error"});
    } else {
      res.redirect(`bars/${updatedBar._id}`);
    }
  });
});

/* Delete bar */
router.delete("/:id",  function (req, res) {
  db.Bar.findByIdAndDelete(req.params.id, function (error, deletedBar) {
    if(error) {
      console.log(error);
      res.send({message: "Internal Server Error"});
    } else {
      res.redirect("/bars");
    }
  });
});

module.exports = router;