import joi from "joi";

/**
 * para crear un Schema ocupamos
 */

// const genres = [
//     'drama',
//     'comedia',
//     'horror'
// ]
const createBookSchema = joi.object({
    //libros a validar
    author: joi.string().required(),
    title: joi.string().required(),
    genre: joi.string()/*.valid(genres) .optional(se puede o no poner )*/,
    category: joi.string() ,
    language: joi.string() ,
    editorial: joi.string() ,
    printingDate:joi.date(),
    pages: joi.number().integer().positive() ,
    isbn: joi.string() ,
    coverage: joi.string(),
    

})
 //.objet() sirve para crear nuestro esquema
export default async (req,res,next) =>{
    try {
        await createBookSchema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            msg:"Error de validacion",
            error:error
        })
    }
    
}; 