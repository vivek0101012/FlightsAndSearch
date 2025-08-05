
const { where } = require("sequelize");
const {City}=require("../models/index");

class CityRepository {


    async createcity({name} ){

try {
const city =await City.create({name});

return city;
    
} catch (error) {

    throw {error};
    
}
  }


async deleteCity (cityId) { 

try {
    
    cit

     await  City.destroy({
        where:{
            id:cityId
        }
     });
     
} catch (error) {
    
    throw error;
}



}


}



module.exports=CityRepository;