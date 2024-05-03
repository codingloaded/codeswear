import User_model from "@/models/User_model";
import connectDB from "../middlewares/moongoose";
var CryptoJS = require("crypto-js");

const handler = async(req,res)=>{
        if(req.method =="POST"){
        let {name, email, password} = req.body;
        // data = data.json()  
        let user = new User_model({name, email,password:CryptoJS.AES.encrypt(password, 'secret key 123').toString()});
        
        await user.save()     
        return res.status(200).json({ msg:"successfully added"})
    }else{
       return res.status(400).json({ msg:"Bad Request"})
    }
    // let products = await ProductModel.find()
    
}


export default connectDB(handler)