import mongoose from 'mongoose';
import config from './index.js';
const db = mongoose.connection;

db.on('connecting', () => {
    console.log('Intentando conectar a la base de datos ⚡')
})
db.on('connected', () => {
    console.log('Se ha conectado a la base de datos 👾')
})
db.on('error', () => {
    console.error('Error en la conexion a la base de datos 🤬')
})

export default () => {
    mongoose.connect(config.database.uri)
}
