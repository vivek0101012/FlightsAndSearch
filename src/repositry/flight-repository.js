const {Flight}=require("../models/index")


class FlightRepository{
    async createFlight(data){
   


        try {
            
            

         
        const flight=await Flight.create(data);

        return flight;
        } 
        catch (error) {
            console.log("some error at repo layer of flight");
            throw(error) 
        }


    }



    async deletFlight(flightId){

        try {
            
        const result=await Flight.create(flightId);
        return result

        } 
        catch (error) {
            console.log("some error at repo layer ")
            throw (error)
            
        }

    }

    async getFlight(flightId){

        try {
            
        const flight=await Flight.findByPk(flightId);
        return flight

        } 
        catch (error) {
            console.log("some error at repo layer ")
            throw (error)
            
        }

    }

















}



module.exports=FlightRepository;
