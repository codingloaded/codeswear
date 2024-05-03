import User_model from "@/models/User_model";
import connectDB from "../middlewares/moongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method == "POST") {
        let data = req.body;
        
        let user = await User_model.findOne({ email: data.email });
        if(user) {
            const bytes  = CryptoJS.AES.decrypt(user.password, 'secret key 123');
            let decryptPassword = bytes.toString(CryptoJS.enc.Utf8);
            if (data.email == user.email && data.password == decryptPassword) {
                var token = jwt.sign({id: user._id, email: user.email }, 'secret123', {expiresIn:"2d"});
                return res.status(200).json({success:true, token})
            } else {
                return res.status(200).json({ msg: "check your credentials" })
            }
        } else {
            return res.status(200).json({ msg: "No user found" })
        }



    } else {
        return res.status(400).json({ msg: "Bad Request" })
    }
    // let products = await ProductModel.find()

}


export default connectDB(handler)