import ProductModel from "@/models/Product_model";
import connectDB from "../middlewares/moongoose";

const handler = async(req,res)=>{
    let products = await ProductModel.find(req.query)
    let tshirts = {};
    for (let item of products){
        if (item.title in tshirts){
            if(!tshirts[item.title].color.includes(item.color) && item.qty>0){
              tshirts[item.title].color.push(item.color);
            }
            if(!tshirts[item.title].size.includes(item.size) && item.qty>0){
                tshirts[item.title].size.push(item.size);
            }
        }else{
            tshirts[item.title] = JSON.parse(JSON.stringify(item));
            if(item.qty>0){
                tshirts[item.title].color=[item.color];
                tshirts[item.title].size=[item.size];
            }
        }
    }
    res.status(200).json({ tshirts})
}


export default connectDB(handler)
  