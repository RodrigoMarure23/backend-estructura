import express from 'express';
import bookRoutes from './routes/bookRoutes.js'
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

export default api;
