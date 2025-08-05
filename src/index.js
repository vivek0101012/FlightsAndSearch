const express = require("express")
const { PORT } = require('./config/serverConfig');
const bodyParser = require("body-parser");


const setupAndStartServer= async ()=>{

const app= express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
    logger.info("hellow this is the work j")
})





}
setupAndStartServer() ;











