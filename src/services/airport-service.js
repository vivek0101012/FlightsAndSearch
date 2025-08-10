const  {  AirportRepository }=require("../repositry/index")

class AirportService{


        constructor (){
       
        this.AirportRepository=new AirportRepository();
    }

    async createAirport(data){

      
        try {
        
           const airport= await this.AirportRepository.createAirport(data);

           return airport;

             
        }
         catch (error) {
            console.log("some error at the airport-service layer ")
            throw(error)
        }
         
    }
      async deleteAirport(airportId){

      
        try {
        
           const response= await this.AirportRepository.deleteAirport(airportId)

           return response;

             
        }
         catch (error) {
            
            console.log("some error at the airport-service layer ")
            throw(error)
        }
         
    }

      async getAirport(airportId){

      
        try {
        
           const airport= await this.AirportRepository.getAirport(airportId);

           return airport;

             
        }
         catch (error) {
            
            console.log("some error at the airport-service layer ")
            throw(error)
        }
         
    }

      async updateAirport(data,airportId){

      
        try {
        
           const airport= await this.AirportRepository.updateAirport(data,airportId)

           return airport;

             
        }
         catch (error) {
            
            console.log("some error at the airport-service layer ")
            throw(error)
        }
         
    }












}

module.exports=AirportService;