const express= require("express")

const {cityController,airportController}=require("../../controllers");

const router= express.Router();


// city routes 

router.post("/cities" ,cityController.create);

router.post("/cities/bulk",cityController.createCities);

router.delete("/cities/:id" ,cityController.destroy);

router.get("/cities/:id" ,cityController.get);

router.get("/cities",cityController.getAll )

router.patch("/cities/:id" ,cityController.update);

router.get("/cities/:id/airports",cityController.getAllAirports);



// airport routes 

router.post("/airports",airportController.create);



router.delete("/airports/:id",airportController.destroy);

router.patch("/airports/:id",airportController.update);

router.get("/airports/:id",airportController.get)





module.exports=router

