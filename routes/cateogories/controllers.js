const CategoryRepository = require('../cateogories/repository');

const CategoryController = {
    // controlador para la creación de una categoría 
    async createCategory(name) {
        try {
            const newCategory = await CategoryRepository.createCategory({ name });
            return { httpCode: 200, messageCode: 'categoryCreated', category: newCategory };
        } catch (error) {
            if (error.httpCode) {
                throw error;
            }
            const err = { httpCode: 500, messageCode: 'unexpectedError', errCode: 'createCategoryError' };
            throw err;
        }
    },

    // controlador para la obtencion de todas las categorias 
    async getAllCategories() {
        try {
            const categories = await CategoryRepository.getAllCategories();
            return { httpCode: 200, messageCode: 'categoriesRetrieved', categories };
        } catch (error) {
            if (error.httpCode) {
                throw error;
            }
            const err = { httpCode: 500, messageCode: 'unexpectedError', errCode: 'getAllCategoriesError' };
            throw err;
        }
    },

    // controlador para la obtencion de una categoria dado su id
    async getCategoryById(id) {
        try {
            const category = await CategoryRepository.findCategoryById(id);
            
            if (!category) {
                return { httpCode: 404, messageCode: 'categoryNotFound', category: null };
            }
    
            return { httpCode: 200, messageCode: 'categoryRetrieved', category };
        } catch (error) {
            if (error.httpCode) {
                throw error;
            }
            const err = { httpCode: 500, messageCode: 'unexpectedError', errCode: 'getCategoryError' };
            throw err;
        }
    },

    // controlador para la eliminacion de una categoría 
    async deleteCategoryById(id) {
        try {
            const category = await CategoryRepository.findCategoryById(id);
            
            if (!category) {
                return { httpCode: 404, messageCode: 'categoryNotFound', category: null };
            }
    
            // Eliminar la categoría
            await CategoryRepository.deleteCategoryById(id);
    
            return { httpCode: 200, messageCode: 'categoryDeleted'};
        } catch (error) {
            if (error.httpCode) {
                throw error;
            }
            const err = { httpCode: 500, messageCode: 'unexpectedError', errCode: 'deleteCategoryError' };
            throw err;
        }
    }
};

module.exports = CategoryController;