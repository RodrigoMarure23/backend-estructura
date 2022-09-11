import Book from '../models/Book.js';

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find()
        return res.json({
            msg:"Estos son los libros encontrados: ",
            data: allBooks
        })
    } catch (error) {
        return res.staus(500).json({
            msg:"Error al buscar libros: ",
            error:error
        })
    }

};

const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);// req.body es la request y pide el contenido del objeto body
        return res.json({
            msg: 'Libro Nuevo Creado',
            Book: newBook,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al crear el libro',
            error: error
        });
    }
};
const getBookById = async (req, res) => { 
    try {
        const {id} = req.params;// esto es deconstruir
        const book = await Book.findById(id)
        return res.json({
            msg:"Libro encontrado",
            data:{
                book
            } // lo hace un objeto
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Error al buscar el libro por id",
            error:error
        })
    }
};
const updateBookById = (req, res) => { };
const deleteBookById = (req, res) => { };
export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById };

