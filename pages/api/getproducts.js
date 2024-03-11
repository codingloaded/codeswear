import ProductModel from "@/models/Product_model";
import connectDB from "../middlewares/moongoose";

const handler = async(req,res)=>{
    let products = await ProductModel.find()
    res.status(200).json({ products})
}


export default connectDB(handler)
  