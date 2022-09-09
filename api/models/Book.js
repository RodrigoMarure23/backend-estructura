import mongoose from 'moongose'
const schema = new mongoose.Schema({
    author: String,
    title: String,
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