import mongoose, { model } from "mongoose";




const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    }, 
    password: {
        type: String,
        require: true,
    },
    img:{
        type: String
    },
    isAdmin:{
        type: Boolean,
        default:true,
    }
    
},{timestamps:true})


export default mongoose.model("User",userSchema);