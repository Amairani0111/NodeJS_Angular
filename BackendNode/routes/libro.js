const express = require("express");
const ruta = express.Router();

const {
  getLibro,
  getLibros,
  crearLibro,
  actualizarLibro,
  eliminarLibro,
} = require("../controllers/libro");

ruta
    .route('/')
    .get(getLibros)
    .post(crearLibro)

ruta
    .route('/:id')
    .get(getLibro)
    .put(actualizarLibro)
    .delete(eliminarLibro)    

//Se exportara a otras rutas
module.exports = ruta;

//Las rutas van sin el /api/Libro ya que se declaro en el archivo server.js
/*ruta.get('/', (req, res) => {
    res.status(200).json({status:200, mensaje: 'Se proceso correctamente'});
});

ruta.get('/:id', (req, res) => {
    res.status(200).json({status:200, mensaje: 'Se devuelve el libro por id'});
});

ruta.post('/', (req, res) => {
    res.status(200).json({status:200, mensaje: 'Se ha creado el libro correctamente'});
});

ruta.put('/:id', (req, res) => {
    res.status(200).json({status:200, mensaje: 'Se actualizo el libro'});
});

ruta.delete('/:id', (req, res) => {
    res.status(200).json({status:200, mensaje: 'Se ha eliminado el libro correctamente'});
});*/
