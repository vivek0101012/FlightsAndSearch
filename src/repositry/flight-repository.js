const { injectReplacements } = require("sequelize/lib/utils/sql");
const {Flight}=require("../models/index")
const {Op, where}=require("sequelize")

class FlightRepository{

#createFilter(data){

    if(data.arrivalAirportId){
        filter.arrivalAirportId=data.arrivalAirportId;
    }
    if(data.departureAirportId){
        filter.departureAirportId=data.departureAirportId;
    }
    let priceFilter =[]
    if(data.minPrice){
        priceFilter.push({price:{[Op.gte]:data.minPrice}})
    }
      if(data.maxPrice){
        priceFilter.push({price:{[Op.lte]:data.maxPrice}})
    }

    if(priceFilter.length>0){
            Object.assign(filter,{[Op.and]:priceFilter})


    }


    return filter;

}





    async createFlight(data){
           try {

            const flight=await Flight.create(data);

        return flight;
        } 
        catch (error) {
            console.log("some error at repo layer of flight");
            throw(error) 
        }


    }



    async deletFlight(flightId){

        try {
            
        const result=await Flight.create(flightId);
        return result

        } 
        catch (error) {
            console.log("some error at repo layer ")
            throw (error)
            
        }

    }

    async getFlight(flightId){

        try {
            
        const flight=await Flight.findByPk(flightId);
        return flight

        } 
        catch (error) {
            console.log("some error at repo layer ")
            throw (error)
            
        }

    }


  async getAllFlight(filter){

        try {
            
        const filterObject= this.#createFilter(filter);
    console.log(filterObject)
        const flight=await Flight.findAll({
            where:filterObject
        })
        return flight

        } 
        catch (error) {
            console.log("some error at repo layer ")
            throw (error)
            
        }

    }














}



module.exports=FlightRepository;


// filter  includes
// src - and dstn airports
// seats
// price 