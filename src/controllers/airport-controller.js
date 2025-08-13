const {AirportService }=require("../services/index")

const AirportServicecClass=new AirportService();

const create=async (req,res)=>{

    try {


        

        const airport=await AirportServicecClass.createAirport(req.body);
         return res.status(200).json({

         data:airport,
         success:true,
         message:"successfully created a airport",
         err:{}

        })

        
        
    } catch (error) {
        return res.status(500).json({

         data:{},
         success:false,
         message:"failed to create",
         err:error

        })
        
    }

}

    const destroy=async (req,res)=>{

    try {

        const result=await AirportServicecClass.deleteAirport(req.params.id);
         return res.status(200).json({

         data:result,
         success:true,
         message:"successfully deleted the airport",
         err:{}

        })

        
        
    } catch (error) {
        return res.status(500).json({

         data:{},
         success:false,
         message:"failed to delete ",
         err:error

        })
        
    }

}




const get=async (req,res)=>{

    try {

        const airport=await AirportServicecClass.getAirport(req.params.id);
         return res.status(200).json({

         data:airport,
         success:true,
         message:"successfully fetched the airport",
         err:{}

        })

        
        
    } catch (error) {
        return res.status(500).json({

         data:{},
         success:false,
         message:"failed to fetch the airport ",
         err:error

        })
        
    }

}





const update=async (req,res)=>{

    try {

        const result=await AirportServicecClass.updateAirport(req.body,req.params.id);
         return res.status(200).json({

         data:result,
         success:true,
         message:"successfully updated  the airport",
         err:{}

        })

        
        
    } catch (error) {
        return res.status(500).json({

         data:{},
         success:false,
         message:"failed to update this airport",
         err:error

        })
        
    }

}





    module.exports={

        create,
        destroy,
        get,
        update
    }