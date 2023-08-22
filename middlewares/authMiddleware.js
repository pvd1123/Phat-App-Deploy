const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");
//Protect Routes token base

const requireSignIn = async(req,res,next)=>{
    try{
        const decode = JWT.verify(
            req.headers.authorization, 
            process.env.JWT_SECRET
        );
        req.user = decode;
        next();
    }
    catch(error){
        console.log(error)
    }
}

//admin access
const isAdmin = async(req,res, next)=>{
    try{
        const user = await userModel.findById(req.user._id)
        if(user.role !== "admin"){
            return res.status(401).send({
                success: false,
                message: 'Bạn không phải ADMIN'
            })
        }
        else{
            next();
        }
    }
    catch(error){
        console.log(error)
        res.status(401).send({
            success: false,
            message: 'Error Admin',
            error,
        })
    }
}


module.exports = {requireSignIn, isAdmin}