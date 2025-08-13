const { Airplane }=require("../models/index")

class AirplaneRepository{

async getAirplane(airplaneId){
  
    try {
    
        
        const airplane=await Airplane.findByPk(airplaneId);
        return airplane;

    }
     catch (error) {

        //   const airplane=await Airplane.findByPk(airplaneId);
        //     console.log(airplane);


        console.log("some error at the repo layer of plane")
        throw (error)
        
    }   

}

}
module.exports=AirplaneRepository