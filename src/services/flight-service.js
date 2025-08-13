const {FlightRepository, AirplaneRepository}=require("../repositry/index")
const { compareTime}=require("../utils/helper")

class Flightservice {

    constructor (){
        this.airplaneRepository =new AirplaneRepository();
        this.flightRepository=new FlightRepository();
    }
    async createFlight (data){
        try {


            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error:"departure > arrival: not allowed"}
            }

            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            
            const flight =await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity})

            return flight;
        } 
        catch (error) {

            console.log("something wrong with the flights service layer")
            throw (error)
            
            
        }
    }

    async getAllFlightData(data){

        try {
            const flights=this.flightRepository.getAllFlight(data)
            return flights
        } 
        catch (error) {
            console.log("something is wrong at the service layer")

            throw(error)
            
        }

    }


}


module.exports=Flightservice;