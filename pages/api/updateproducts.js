import ProductModel from "@/models/Product_model";
import connectDB from "../middlewares/moongoose";

const handler = async(req,res)=>{
    if(req.method =="POST"){
        
        for(let i=0; i<req.body.length;i++){
            let products = await ProductModel.findByIdAndUpdate(req.body[i]._id, req.body[i])
            // products.save();
        }
        return res.status(200).json({ msg:"successfully added"})
    }else{
       return res.status(400).json({ msg:"Bad Request"})
    }
   
    
}


export default connectDB(handler)