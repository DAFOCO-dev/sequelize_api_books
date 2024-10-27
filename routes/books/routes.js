const express = require('express');
const router = express.Router();
const BooksController = require('../books/controllers');

// Endpoint para crear una nueva categoría
router.post('/createBook', (req, res) => {
    const requiredParams = ["title", "author", "categoryId"];
    const { title, author, categoryId } = req.body;

    // Validación de parámetros requeridos
    for (const param of requiredParams) {
        if (!req.body[param]) {
            return res.status(400).send({
                httpCode: 400,
                messageCode: `Missing parameter: ${param}`,
                errCode: 'ValidationError'
            });
        }
    }

    // Llamar al controlador
    BooksController.createBook(title, author, categoryId)
        .then((result) => res.status(200).send(result))
        .catch((error) => {
            if (error.httpCode) {
                res.status(error.httpCode).send({ code: error.errCode, message: error.messageCode });
            } else {
                res.status(500).send({ code: 'createBook', message: 'unexpectedError' });
            }
        });
});

// Endpoint para obtener todos los libros
router.get('/getAllBooks', (req, res) => {
    // Llamar al controlador
    BooksController.getAllBooks()
        .then((result) => res.status(200).send(result))
        .catch((error) => {
            if (error.httpCode) {
                res.status(error.httpCode).send({ code: error.errCode, message: error.messageCode });
            } else {
                res.status(500).send({ code: 'getAllBooks', message: 'unexpectedError' });
            }
        });
});



module.exports = router;