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
const axios = require("axios");



    const options = {
      method: 'POST',
      url: 'https://nexmo-nexmo-sms-verify-v1.p.rapidapi.com/send-verification-code',
      params: {phoneNumber: '+917272096364', brand: 'myApp.com'},
      headers: api
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

// app.post("/otp",(req,res)=>{
//     const phoneNumber=req.body.phoneNumber
//     const options = {
//         method: 'POST',
//         url: 'https://nexmo-nexmo-sms-verify-v1.p.rapidapi.com/send-verification-code',
//         body: {phoneNumber: '7272096364', brand: 'myApp.com'},
//         headers: {
//           'X-RapidAPI-Key': '2d584490d7msh9f933009904afcfp1592a7jsn4568e2eef33c',
//           'X-RapidAPI-Host': 'nexmo-nexmo-sms-verify-v1.p.rapidapi.com'
//         }
//       };
// })

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

app.listen(port,()=>{
    console.log(`listening to port number ${port} goto http://localhost:${port}/signup`);
})