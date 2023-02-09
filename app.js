const express=require('express')
const Joi=require('joi')
const app=express()
const port=process.env.port || 5300

app.use(express.json())

app.post("/signup",(req,res)=>{

})

app.listen(port,()=>{
    console.log(`listening to port number ${port} goto http://localhost:${port}/signup`);
})