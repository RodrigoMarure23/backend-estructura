import bcrypt from "bcrypt";
import User from "../models/User.js";

const register = async (req,res,next) =>{
    try {
        /**
         * middleware de validacion
         * encriptar el password
         * guardar el usuario nuevo con el password encriptado
         */
        const encryptedPass = await bcrypt.hash(req.body.password,4) // aqui se encripta la constrasena 
        req.body.password = encryptedPass; // aqui se crea el nuevo usuario con una constrasena encriptada
        const newUSer = await User.create(req.body)
        newUSer.password = undefined;
        return res.json({
            msg:":Usuario creado correctamente",
            data:{newUSer}
        })
    } catch (error) {
        if(error.code===11000){
            return res.status(400).json({
                msg:"Ya existe un usuario registrado con ese email"
            })
        }
        return res.status(500).json({
            msg:"Ocurrio un error al registrar el usuario",
            error:error
        });
    };
};

const login = async (req,res) => {
    
};

export{login,register}; 