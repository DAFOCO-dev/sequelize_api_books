const Book = require('../../models/book');
const Category = require('../../models/category');

const BookRepository = {
    // creación de un libro en la DB
    async createBook(bookData) {
        return await Book.create(bookData);
    },

    // retorno de todos los libros con su respectivo nombre de categoria 
    async getAllBooksWithCategory() {
        try {
            const books = await Book.findAll({
                attributes: ['id', 'title', 'author'], // trae solo los campos necesarios de libros 
                include: [
                    {
                        model: Category,
                        attributes: ['name'], 
                        as: 'Category' 
                    }
                ]
            });

            // formatear los resultados 
            const formattedBooks = books.map(book => ({
                id: book.id,
                title: book.title,
                author: book.author,
                category: book.Category?.name || 'No category' 
            }));

            return formattedBooks;
        } catch (error) {
            console.error('Error fetching books with categories:', error);
            throw { httpCode: 500, messageCode: 'unexpectedError', errCode: 'getAllBooksError' };
        }
    }
};

module.exports = BookRepository;