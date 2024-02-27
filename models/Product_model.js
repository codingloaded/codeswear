const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unque: true
    },
    description:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    size:{
        type: String,
    },
    color:{
        type: String,
    },
    price:{
        type: Number,
        required : true
    },
    qty:{
        type: Number,
        required : true
    },
},{timestamps:true})

const productModel = mongoose.model('product',productSchema)

export default productModel