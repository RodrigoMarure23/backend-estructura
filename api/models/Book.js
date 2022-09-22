import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    author: 
        {type:String,
        required:true,}, // hace este campo obligatorio en el request
    title: {
        type:String,
        required:true
    },
    genre: String,
    category: String,
    language: String,
    editorial: String,
    printingDate: Date,
    pages: Number,
    isbn: String,
    coverage: String,
});

export default mongoose.model('Book',schema)