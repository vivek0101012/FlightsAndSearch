const{ CityService }= require("../services/index");


const cityService=new CityService();

const create = async (req,res)=>{
try {
    const city=await cityService.create(req.body);
    return res.status(200).json({

     data:city,
     success:true,
     message:"successfully created a city ",
     err:{}
     

    })

} catch (error) {
    
    console.log(error)

    return res.status(500).json({
        data:{},
        message:{},
        success:false,
        err:error
    })
}


}

const createCities = async (req,res)=>{
try {
    const cities=await cityService.createCities(req.body);
    return res.status(200).json({

     data:cities,
     success:true,
     message:"successfully created the cities",
     err:{}

    })

} catch (error) {
    
    console.log(error)

    return res.status(500).json({
        data:{},
        message:"failed to create",
        success:false,
        err:error
    })
}


}




const destroy= async (req,res)=>{
try {
    
     const result =await cityService.destroy(req.params.id);
     return res.status(200).json({
            data:result,
        message:"succesfully deleted a city",
        success:true,
        err:{}
     })




} catch (error) {
    
    console.log(error)

    return res.status(500).json({
        data:{},
        message:{},
        success:false,
        err:error
    })
}

}
    


const get =async  (req,res)=>{
try {
        const city=await cityService.get(req.params.id);
    return res.status(200).json({

     data:city,
     success:true,
     message:"successfully fetched the  city details  ",
     err:{}

    })



} catch (error) {
    
    console.log(error)
    return res.status(500).json({
        data:{},
        message:{},
        success:false,
        err:error
    })
}
    

}





const update =async  (req,res)=>{

    try {
   

              const city=await cityService.update(req.params.id,req.body);
    return res.status(401).json({

     data:city,
     success:true,
     message:"successfully updated the changes  in city ",
     err:{}

    })

    

    
} catch (error) {
    
    console.log(error)
    return res.status(500).json({
        data:{},
        message:{},
        success:false,
        err:error
    })
}

}

const getAll =async  (req,res)=>{

    try {
   

              const cities=await cityService.getAllCities(req.query);


       if(cities.length===0){
        return res.status(200).json({

     data:"no such city exist",
     success:true,
     message:"no such city exist ",
     err:{}

    })
       }


          
    return res.status(200).json({

     data:cities,
     success:true,
     message:"successfully fetched all the cities ",
     err:{}

    })

    

    
} catch (error) {
    
    console.log(error)
    return res.status(500).json({
        data:{},
        message:"failed to fetch all the cities",
        success:false,
        err:error
    })
}

}



const getAllAirports=async (req,res)=>{

    try {
        
    const airports=await cityService.getAllAirports(req.params.id);
    
           
    return res.status(200).json({

     data:airports,
     success:true,
     message:"successfully fetched all the airports of this city ",
     err:{}

    })



    } catch (error) {

     console.log(error)
    return res.status(500).json({
        data:{},
        message:"failed to fetch all the airports",
        success:false,
        err:error
    })

        
    }


    
}





module.exports={

    create,
    createCities,
    update,
    get,
    destroy,
    getAll,
    getAllAirports
}