const{CityRepository}=require("../repositry/index")
const CrudService=require("./crud-service")
class CityService extends CrudService {

    constructor (){
                super(new CityRepository());

        this.CityRepository=new CityRepository();
    }

 
    


    
    async createCities(data){

        try {

            const cities=await this.CityRepository.createCities(
                data,
                 { ignoreDuplicates: true }
            );
            return cities;
            
        } catch (error) {
            throw(error)
            console.log("something went wrong at the service  layer  ")
        }
    }
    



    




async getAllCities(filter){


       try {

            const cities= await this.CityRepository.getAllCities(filter);
            return cities;
            
        } catch (error) {
                        throw(error)

            console.log("something went wrong at the service  layer  ")
        }

}




async getAllAirports(cityId){


       try {

            const airports= await this.CityRepository.getAllAirport(cityId);
            return airports;
            
        } 
        catch (error) {
                        console.log("something went wrong at the service  layer  ")

                        throw(error);


        }

}






}



module.exports=CityService;