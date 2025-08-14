

const {City}=require("../models/index");
const CrudRepository=require("./crud-repository")

class CityRepository extends CrudRepository {

    constructor (){
        super(City)
    }
       
     async getAllCities(filter){

        try {
          if(filter.names){

                const cities= await City.findAll( 

                  {  where:{
                       names:{
                        [ Op.startsWith]:`${filter.names}`
                       }
                    }
                
                
                }
             )
             

             
    return cities;


          }
   const cities= await City.findAll();
            
            return cities;

        } catch (error) {

             console.log("something went wrong in the repo layer ")
              throw {error}
            
            
        }

     }

    
     async getAllAirport(cityId){

        try {
            
            const city= await City.findByPk(cityId);
            
            
            const  airports= await city.getAirports();

            return airports;



        } catch (error) {

             console.log("something went wrong in the repo layer ")
              throw {error}
            
            
        }


     }

     async createCities(data) {

    try {
        const cities=await City.bulkCreate(
            data,
            {
                ignoreDuplicates:true
            }
        );
        return cities
        

    } 
    catch (error) {

        console.log("some error at repo layer ")
        throw(error)
        
    }

  
 

    


        
     }










}



module.exports=CityRepository;