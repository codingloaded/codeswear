import ProductModel from "@/models/Product_model";
import connectDB from "../middlewares/moongoose";

const handler = async(req,res)=>{
    if(req.method =="POST"){
        for(let i=0; i<req.body.length;i++){
            let products = new ProductModel({
                title : req.body[i].title,
                slug : req.body[i].slug,
                description : req.body[i].description,
                img : req.body[i].img,
                category : req.body[i].category,
                size : req.body[i].size,
                color : req.body[i].color,
                price : req.body[i].price,
                qty : req.body[i].qty,
            })
            products.save();
        }
        return res.status(200).json({ msg:"successfully added"})
    }else{
       return res.status(400).json({ msg:"Bad Request"})
    }
    // let products = await ProductModel.find()
    
}


export default connectDB(handler)
  