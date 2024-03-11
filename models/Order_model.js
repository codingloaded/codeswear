const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    products :[
        {
            productId:{
                type : String
            },
            quantity:{
                type : Number,
                default : 1
            }
        },
    ],
    address:{
        type : String,
        require : true
    },
    amount:{
        type : Number,
        require : true
    },
    status:{
        type : String,
        require : true,
        default : "Pending"
    }

}, {timestamps:true})

mongoose.models={}
export default mongoose.model('order',orderSchema)
// const orderModel = mongoose.model('order',orderSchema)

// export default orderModel

