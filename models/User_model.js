const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
   
},{timestamps:true});

mongoose.models = {}

// export default  mongoose.models.user||mongoose.model('user',userSchema)
export default  mongoose.model('user',userSchema)
// const userModel = mongoose.model('user',userSchema)

// export default userModel