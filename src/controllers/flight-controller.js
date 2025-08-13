const {Flightservice} =require("../services/index")

const flightService= new Flightservice();



const create = async (req,res)=>{

    try{

        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
           data:flight,
           success:true,
           err:{},
           message:"successfully created a flight"
        });
    }   catch(error){
 

    
          return res.status(500).json({
           data:{},
           success:false,
           err:error,

           message:"failed to create  a flight"
        });


    }




}

module.exports={

    create
}