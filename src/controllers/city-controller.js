const CityServiceClass = require("../services/city-service");

const CityService =new CityServiceClass();

const create = async (req,res)=>{
try {
    const city=await CityService.createCity(req.body);
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


const destroy= async (req,res)=>{
try {
    
     const result =await CityService.deleteCity(req.params.id);
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
        const city=await CityService.getCity(req.params.id);
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
   

              const city=await CityService.updateCity(req.params.id,req.body);
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
   

              const cities=await CityService.getAllCities();
    return res.status(200).json({

     data:cities,
     success:true,
     message:"successfully updated the changes  in city ",
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




module.exports={

    create,
    update,
    get,
    destroy,
    getAll
}