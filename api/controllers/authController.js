import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from 'jwt-simple';
import config from '../config/index.js'
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
        next()
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

const login = async (req,res,next) => {
    /**
     * 1 validar que venga pass y correo 👌🏼
     * 2 buscar un usuario con ese correo
     * 3 comparar contrasenas con bcrypt
     * 4 si todo coincide crear token y regresarlo al cliente
     * 5 si no coincide regresar un 401
     */ 

    try {
        const user = await User.findOne({
            email: req.body.email // aqui se busca al usuario dentro de los usuarios registrados 
        });
        if (!user){
            return res.status(404).json({
                msg:"Usuario no encontrado" // si no se encuentra BYE
            })
        }
       const passCorrect = await  bcrypt.compare(req.body.password, user.password) //aqui hace la comparacion entre contrasena enviada y almacenada
       if(!passCorrect){ 
        return res.status(401).json({
            msg:"Credenciales invalidas" // si la constrasena no es igual BYE
        })}
        //TODO: crear token y regresarlo al cliente
        const payload = {
            userId:user.id,
        };
        const token  = await jwt.encode(payload,config.jwt.secret)
        return res.json({
            msg:"Login Correcto ✅",
            data:{token}
        })

    } catch (error) {
        return res.status(500).json({
            msg:"Error al hacer login", // error en el login GENERAL 
            error:error
        })
        
    }

};

export{login,register}; 