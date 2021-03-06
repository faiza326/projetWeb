const express = require("express");
const controller = require("../controller/hotels.controller");
const router = express.Router();

router.route("/") 

.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
})

.get(controller.getAll)
.post(controller.addOne)
.delete(controller.deleteAll)

router /**Le chemin si il trove un id */
    .route("/:id") 
.all((req,res,next)=>{
      res.statusCode = 200;
      res.setHeader('content-type','text/plain');
      next();
})
  .get(controller.getOne)
  .post(controller.updateOne)
  .delete(controller.deleteOne);

/*
app.use((req,res,next)=>{
    console.log("hello "+ req.params.name);
    next();
}); */

module.exports = router;