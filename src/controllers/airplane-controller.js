
const {AirplaneService}=require("../services/index")

const airplaneService=new  AirplaneService();


const get= async (req,res)=>{

    
    try {

        const airplane=await airplaneService.getAirplane(req.params.id)
         return res.status(200).json({

         data:airplane,
         success:true,
         message:"successfully fetched a airplane detail ",
         err:{}

        })

    } catch (error) {
        return res.status(500).json({

         data:{},
         success:false,
         message:"failed to fetch the details for a plane",
         err:error

        })
        
    }


}







