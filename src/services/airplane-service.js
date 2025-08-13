
const { AirplaneRepository }=require("../repositry/index")

const airplaneRepository=new AirplaneRepository();


class AirplaneService{


    async getAirplane(airplaneId){

 
        try {
            
        const airplane=await airplaneRepository.getAirplane(airplaneId);
        return airplane;
            
        } 
        catch (error) {
            
            console.log("some error at service layer ")
            throw(error)
              
        }


    }

}


module.exports=AirplaneService;
