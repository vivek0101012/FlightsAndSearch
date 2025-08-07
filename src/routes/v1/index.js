const express= require("express")

const {cityController}=require("../../controllers")

const router= express.Router();



router.post("" ,cityController.create());

router.delete("" ,cityController.destroy());

router.get("/" ,cityController.get());

router.patch("" ,cityController.update());


module.exports={router}