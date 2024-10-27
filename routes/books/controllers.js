const BookRepository = require('../books/repository');
const CategoryRepository = require('../cateogories/repository'); 

const CategoryController = {
    // controlador para la creacion de un libro asociado a una categoria 
    async createBook(title, author, categoryId) {
        try {
            const category = await CategoryRepository.findCategoryById(categoryId); // funcion de base de datos 
            if (!category) {
                return { httpCode: 404, messageCode: 'categoryNotFound', category: null }; // validacion de resultados, la categoria dada debe existir
            }

            const newBook = await BookRepository.createBook({ title, author, categoryId }); // creacion del libro 

            return { httpCode: 200, messageCode: 'bookCreated', book: newBook };
        } catch (error) {
            if (error.httpCode) {
                throw error;
            }
            const err = { httpCode: 500, messageCode: 'unexpectedError', errCode: 'createBookError' };
            throw err;
        }
    },

    // controlador para la obtencion de todos los libros con su respectiva categoria 
    async getAllBooks() {
        try {
            const books = await BookRepository.getAllBooksWithCategory(); // funcion de base de datos 
            return { httpCode: 200, messageCode: 'booksRetrieved', books };
        } catch (error) {
            if (error.httpCode) {
                throw error;
            }
            const err = { httpCode: 500, messageCode: 'unexpectedError', errCode: 'getAllBooksError' };
            throw err;
        }
    }
};

module.exports = CategoryController;