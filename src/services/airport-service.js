const  {  AirportRepository }=require("../repositry/index")
const CrudService = require("./crud-service")

class AirportService extends CrudService {

   constructor(){
     
      super(new AirportRepository())
   }

}


module.exports=AirportService;