import express from 'express';
import bookRoutes from './routes/bookRoutes.js'
import clientRoutes from './routes/clientRoutes.js'
import userRoutes from './routes/authRoutes.js'
const api = express();
//TODO : Configurar Middlewares
api.use(express.json());// es la manera de hacer que nuestra app acepte JSON's

api.get('/status', (req, res) => {
    return res.json({
        msg: 'Api en linea y funcionando'
    });
});

//TODO : Aca se registran las rutas
api.use(bookRoutes)
api.use(clientRoutes)
api.use(userRoutes)
export default api;
