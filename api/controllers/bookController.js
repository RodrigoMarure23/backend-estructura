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
const updateBookById = async (req, res) => {
    try {
        const {id }= req.params
        const updatedBook = await Book.findByIdAndUpdate(id,req.body,{new:true});// filtro de busqueda, que se actualiza, mostrar el nuevo objeto actualizado
        return res.json({
            msg:"Libro actualizado por id ",
            data:{Book:updatedBook},
        });
    } catch (error) {
        return res.status(500).json({
            msg:"Error al actualizar el libro por id",
            error: error
        });
    };
 };
const deleteBookById = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            return res.status(404).json({
                msg:"Libro no encontrado"
            })
        }
        return res.json({
            msg:"Libro borrado exitosamente",
            data:{deletedBook:deletedBook}
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Error al borrar libro por id",
            error:error
        })
    } 
    
};
export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById };

