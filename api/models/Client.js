import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    name:String,
    lastName:String,
    Birthday:Date,
    Age:Date,
    Address:{
        Street:String,
        Number:Number,
        Interior:Number,
        
    }
})