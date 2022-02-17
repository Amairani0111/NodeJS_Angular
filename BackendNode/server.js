const dotenv = require('dotenv');
const express = require('express')

dotenv.config({path: './config/config.env'});

const app = express();

app.get('/api/Libro', (req, res) => {
    res.status(200).json({status:200, mensaje: 'Se proceso correctamente'});
});

app.get('/api/Libro/:id', (req, res) => {
    res.status(200).json({status:200, mensaje: 'Se devuelve el libro por id'});
});

app.post('/api/Libro', (req, res) => {
    res.status(200).json({status:200, mensaje: 'Se ha creado el libro correctamente'});
});

app.put('/api/Libro/:id', (req, res) => {
    res.status(200).json({status:200, mensaje: 'Se actualizo el libro'});
});

app.delete('/api/Libro/:id', (req, res) => {
    res.status(200).json({status:200, mensaje: 'Se ha eliminado el libro correctamente'});
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('El servidor se ejecuta en ambiente', process.env.NODE_ENV));