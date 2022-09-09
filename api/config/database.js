import mongoose from 'mongoose';

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
    mongoose.connect('mongodb+srv://usuario1:12345Feb@cluster0.4mlvpxs.mongodb.net/Library?retryWrites=true&w=majority')
}