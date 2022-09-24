import Client from '../models/Client.js'
const getAllClients = async (req,res) =>{
    try {
        const allClients = await Client.find()
        return res.json({
        msg:"Estos son todos los clientes",
        data:allClients
    })
    } catch (error) {
        return res.json({
            msg:"Error al obtener los clientes",
            error:error
        })
    }
    
};

export {getAllClients};