const express=require('express')
const Joi=require('joi')
const api=require('./header')
const { validateSignup } = require('./validator')
const app=express()
const port=process.env.port || 5300

app.use(express.json())

app.post("/signup",(req,res)=>{
    const {error,value}=validateSignup(req.body)
    if(error){
        console.log(error);
        return res.send(error.details)
    }
    res.send('signed up succesfully');
    console.log(value);
})

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

app.listen(port,()=>{
    console.log(`listening to port number ${port} goto http://localhost:${port}/signup`);
})