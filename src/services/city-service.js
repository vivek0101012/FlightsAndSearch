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
            console.log("something went wrong at the service  layer  ")
        }
    }
    
    async deleteCity(cityId){

        try {
            const response =await this.CityRepository.deleteCity(cityId);
            return response;
            
        } catch (error) {
            console.log("something went wrong at the service  layer  ")
        }
    }

    
    async updateCity(cityId,data){

        try {
            const city=await this.CityRepository.updateCity(cityId,data);
            return city;
            
        } catch (error) {
            console.log("something went wrong at the service  layer  ")
        }
    }

    
    async getCity(cityId){

        try {

            const city= await this.CityRepository.getCity(cityId);
            return city;
            
        } catch (error) {
            console.log("something went wrong at the service  layer  ")
        }
    }





}

module.exports=CityService;