import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator" 





const loginUser = async(req,res) => {
    
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"User doesn't exisits"})

        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false, message:"Invalid Credentials"})
        }
        const token = createToken(user._id);
        res.json({success:true, token})

    }catch(err){
        console.log(err);
        res.json({success:false,message:"error"})

    }
    
 
}
//generate token 

const createToken = (id) => {
    
   
    return jwt.sign({id},process.env.JWT_SECRET);
  };

const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try{
        //checking is user alderdy exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"user alredy exists"})
        }
        //validating strong password & email format
        if(!validator.isEmail(email)){
        return res.json({success:false, message:"Please enter valid email"})
        }
        if(password.length < 8){
            return res.json({success:false, message:"please enter strong password"})

        }
        //hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        //new user create
          const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
          })
          const user = await newUser.save()
          const token = createToken(user._id)
          res.json({success:true, token});
    }catch(err){
        console.log(err);
        res.json({success:false,message:"err"})

    }

    
}
   



export {loginUser,registerUser}