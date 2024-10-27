const express = require('express');
const router = express.Router();
const CategoryController = require('../cateogories/controllers');

// Endpoint para crear una nueva categoría
router.post('/createCategory', (req, res) => {
    const requiredParams = ["name"];
    const { name } = req.body;

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
    CategoryController.createCategory(name)
        .then((result) => res.status(200).send(result))
        .catch((error) => {
            if (error.httpCode) {
                res.status(error.httpCode).send({ code: error.errCode, message: error.messageCode });
            } else {
                res.status(500).send({ code: 'createCategory', message: 'unexpectedError' });
            }
        });
});

// Endpoint para obtener todas las categorias 
router.get('/getAllCategories', (req, res) => {
    // Llamar al controlador
    CategoryController.getAllCategories()
        .then((result) => res.status(200).send(result))
        .catch((error) => {
            if (error.httpCode) {
                res.status(error.httpCode).send({ code: error.errCode, message: error.messageCode });
            } else {
                res.status(500).send({ code: 'getAllCategories', message: 'unexpectedError' });
            }
        });
});

// Endpoint para obtener informacion de una categoria basado en su ID
router.post('/getCategoryById', (req, res) => {
    const requiredParams = ["id"];
    const { id } = req.body;

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

    // Llamar al controlador p
    CategoryController.getCategoryById(id)
        .then((result) => res.status(200).send(result))
        .catch((error) => {
            if (error.httpCode) {
                res.status(error.httpCode).send({ code: error.errCode, message: error.messageCode });
            } else {
                res.status(500).send({ code: 'getCategoryById', message: 'unexpectedError' });
            }
        });
});

// Endpoint para eliminar informacion de una categoria basado en su ID
router.post('/deleteCategoryById', (req, res) => {
    const requiredParams = ["id"];
    const { id } = req.body;

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
    CategoryController.deleteCategoryById(id)
        .then((result) => res.status(200).send(result))
        .catch((error) => {
            if (error.httpCode) {
                res.status(error.httpCode).send({ code: error.errCode, message: error.messageCode });
            } else {
                res.status(500).send({ code: 'deleteCategoryById', message: 'unexpectedError' });
            }
        });
});

module.exports = router;