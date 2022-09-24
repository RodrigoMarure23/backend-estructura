//que se necesita para un modelo? SCHEMA + NAME
import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    name:String,
    birthday:Date,
    addresses:String,
    references:[{
        name:String,
        phone: Number,
    }], //es un objeto dentro de un arreglo 
    email:String,
    phone:String, // que tal si viene +52 y asi...
})

export default mongoose.model('Client',schema)

// nombre
// fecha de nacimiento
// edad
// direcciones
// referencias (nombre y telefono)
// correo electronico
// telefono