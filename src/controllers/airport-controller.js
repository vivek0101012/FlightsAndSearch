const {AirportService }=require("../services/index")

const airportService=new AirportService();

const create=async (req,res)=>{

    try {


        

        const airport=await airportService.create(req.body);
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

        const result=await airportService.destroy(req.params.id);
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

        const airport=await airportService.get(req.params.id);
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

const getAll=async (req,res)=>{

    try {

        const airport=await airportService.getAll();
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

        const result=await airportService.update(req.body,req.params.id);
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
        update,
        getAll
    }