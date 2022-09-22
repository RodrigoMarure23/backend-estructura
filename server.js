import http from 'http';
import api from './api/api.js'
import database from './api/config/database.js';
import config from './api/config/index.js';



const port = config.server.port ;
const server = http.createServer(api);


server.on('listening',()=>{
    console.log(`Servidor escuchando en el puerto: ${port} 🟢`)
})

server.on('error',()=>{
    if(error.code === 'EADDRINUSE'){
        console.log(`Elige otro puerto, el puerto ${port} ya esta en uso`)
    }

    console.log(`Ha ocurrido un error en el servidor 😡 ${error.code}`)
})




server.listen(port);
database();
