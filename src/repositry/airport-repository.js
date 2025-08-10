

const {Airport}=require('../models/index')

class AirportRepository{



    async createAirport({name,cityId}){

    
        try {
            const airport=await Airport.create({
                name,
                cityId
            }) ;
             
             return airport;
            
        } 
        catch (error) {


         
            console.log("some error at repo layer in airport-repo")
            throw(error)
        }

    }


        async deleteAirport(airportId){

    
        try {
           await Airport.destroy(
             {
                where:{
                    id:airportId
                }
             }
            ) ;
             
             return true;
            
        } 
        catch (error) {

            console.log("some error at repo layer in airport-repo")
            throw(error)
        }

    }


        async getAirport(airportId){

    

        try {
            const airport=await Airport.findByPk(airportId) ;
             
             return airport;
            
        } 
        catch (error) {

            console.log("some error at repo layer in airport-repo")
            throw(error)
        }

    }



        async updateAirport(data,airportId){

    
        try {
            const airport=await Airport.update(data,{
                where:{
                    id:airportId
                }
            }) ;
             
             return airport;
            
        } 
        catch (error) {

            console.log("some error at repo layer in airport-repo")
            throw(error)
        }

    }














}


module.exports=AirportRepository;