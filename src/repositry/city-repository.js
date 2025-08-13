

const {City}=require("../models/index");

class CityRepository {


     async createCity({names}){
        
        try{
          const city=await City.create({
            names
        });
 
        return city;
        
        }
        
        catch (error){
              console.log("something went wrong in the repo layer ")
              throw {error}
        
         }

     }

      
     async deleteCity (cityId){
        try {
            await City.destroy({
                where:{
                    id: cityId
                }
                
            })
            return true ;
        } catch (error) {
               console.log("something went wrong in the repo layer ")
              throw {error}
            
        }

     }

     
     async updateCity( cityId,data){

     try {
            const city=await City.update( data,{
        where:{
            id:cityId
        }
    } )

    return city;
          

        } catch (error) {

             console.log("something went wrong in the repo layer ")
              throw {error}
            
            
        }




     }

    
     async getCity(cityId){

        try {
            
            const city= await City.findByPk(cityId);
            
            return city;

        } catch (error) {

             console.log("something went wrong in the repo layer ")
              throw {error}
            
            
        }


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