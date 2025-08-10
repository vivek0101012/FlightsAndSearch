const {CityRepository}=require("../repositry/index")

class CityService {

    constructor (){
        this.CityRepository=new CityRepository();
    }

    async createCity(data){

        try {

            const city=await this.CityRepository.createCity(data);
            return city;
            
        } catch (error) {
            throw(error)
            console.log("something went wrong at the service  layer  ")
        }
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
    

    async deleteCity(cityId){

        try {
            const response =await this.CityRepository.deleteCity(cityId);
            return response;
            
        } catch (error) {
                        throw(error)

            console.log("something went wrong at the service  layer  ")
        }
    }

    
    async updateCity(cityId,data){

        try {
            const city=await this.CityRepository.updateCity(cityId,data);
            return city;
            
        } catch (error) {
                        throw(error)

            console.log("something went wrong at the service  layer  ")
        }
    }

    
    async getCity(cityId){

        try {

            const city= await this.CityRepository.getCity(cityId);
            return city;
            
        } 
        catch (error) {

                        console.log("something went wrong at the service  layer  ")

                        throw(error)

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