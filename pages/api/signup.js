import User_model from "@/models/User_model";
import connectDB from "../middlewares/moongoose";

const handler = async(req,res)=>{
    console.log(req.method)
    if(req.method =="POST"){
        let data = req.body;
        // data = data.json()  
        let user = new User_model(data);
        console.log(user)
        await user.save()     
        return res.status(200).json({ msg:"successfully added"})
    }else{
       return res.status(400).json({ msg:"Bad Request"})
    }
    // let products = await ProductModel.find()
    
}


export default connectDB(handler)