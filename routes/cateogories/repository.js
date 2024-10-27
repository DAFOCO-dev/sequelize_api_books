const Category = require('../../models/category');

const CategoryRepository = {
    // Crear una nueva categoría
    async createCategory(categoryData) {
        return await Category.create(categoryData);
    },

    // Obtener todas las categorías
    async getAllCategories() {
        return await Category.findAll({
            attributes: ['id', 'name']
        });
    },

    // Obtener categoria dado su id 
    async findCategoryById(id) {
        return await Category.findByPk(id, {
            attributes: ['id', 'name'] 
        });
    },

    // eliminacion de una categoria
    async deleteCategoryById(id) {
        return await Category.destroy({
            where: { id }
        });
    },
};

module.exports = CategoryRepository;