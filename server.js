const express=require("express");
const bcrypt=require("bcrypt");
const saltRounds=10;//explqain how much machine will be executing
const jwt=require("jsonwebtoken");

const app= express();

//secret key
const SECRET_KEY="yehdhdue233342"

//create api
//hashing :generate salt,this generate dsalt will be used to hash the pswd
app.post("/register",(req,res)=>{
    // console.log(req.query);
    // bcrypt.genSalt(saltRounds,(err,salt)=>{
    //     if(err) console.log(err);
    //     else 
    //     {
    //         bcrypt.hash(req.query.password,salt,(err,hashPswd)=>{
    //             if(err) console.log(err);
    //             else console.log("hashedpwd",hashPswd);
    //         })}
    //         // console.log("salt**",salt);
    // });

    bcrypt.hash(req.query.pass,saltRounds,(err,hashPswd)=>{
        if(err) console.log(err);
        else console.log("pswd",hashPswd);
    })
    res.send({
        status:"user register success"
    })
   
})

app.post("/login",(req,res)=>{
    // console.log(req.query);//query prmtr
    const token=jwt.sign(req.query,SECRET_KEY);
    console.log(token);
    res.send({
        token:token
    })
    const decodeUser=jwt.decode(token,SECRET_KEY);
    console.log(decodUser);

})

app.listen(process.env.PORT || 5000,()=>{
    console.log("app running");
})