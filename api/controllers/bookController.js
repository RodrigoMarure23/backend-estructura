const getAllBooks = (req, res) => {
    return res.json({
        msg: "Esta es la ruta GET de todos los libros"
    });
    
};
const createBook = (req, res) => { };
const getBookById = (req, res) => { };
const updateBookById = (req, res) => { };
const deleteBookById = (req, res) => { };
export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById };

