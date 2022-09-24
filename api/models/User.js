
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique:true, //el email debe ser unico no puede haber dos usuarios con el mismo email 
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }
});

export default mongoose.model('User',userSchema);