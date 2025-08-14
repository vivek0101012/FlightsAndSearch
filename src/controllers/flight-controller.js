const {Flightservice} =require("../services/index")

const {SuccessCodes}=require("../utils/error-codes")

const flightService= new Flightservice();


const create = async (req,res)=>{

    try{

        
             const flightData = {
                            
                            flightNumber:req.body.flightNumber,
                            airplaneId:req.body.airplaneId,
                            departureAirportId:req.body.departureAirportId,
                            arrivalAirportId:req.body.arrivalAirportId,
                            arrivalTime:req.body.arrivalTime,
                            departureTime: req.body.departureTime,
                            price:req.body.price
              
                                         };

        const flight = await flightService.createFlight(flightData);
        return res.status(SuccessCodes.CREATED).json({
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

const getAll = async (req,res)=>{

    try{

        const flight = await flightService.getAllFlightData(req.body);
        return res.status(201).json({
           data:flight,
           success:true,
           err:{},
           message:"successfully fetched the flight list"
        });
    }   catch(error){
 

    
          return res.status(500).json({
           data:{},
           success:false,
           err:error,

           message:"failed to get the flight list"
        });


    }

}






module.exports={

    create,
    getAll
    
}