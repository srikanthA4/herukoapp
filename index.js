const express=require("express");
//const res = require("express/lib/response");
const app=express();
 
app.get('/',(req,res)=>{
    res.status(200).send("hi floks").end();
});
const PORT=process.env.PORT ||8080;
app.listen(PORT,()=>{
    console.log('App is running on port ${PORT}');
    console.log("Use CTrl+C to exit");
})