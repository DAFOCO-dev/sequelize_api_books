// INITIAL IMPORTS
const express = require('express');
const { sequelize, Book, Category } = require('./models'); 
const categoryRoutes = require("./routes/cateogories/routes");
const bookRoutes = require("./routes/books/routes");

const app = express();
const PORT = 3000;
app.use(express.json());

// Función para insertar datos de ejemplo
async function seedData() {
  const categories = [
    { name: "Clásicos" },
    { name: "Ficción" },
    { name: "Aventura" }
  ];

  const createdCategories = await Promise.all(
    categories.map(category => Category.create(category))
  );

  const books = [
    { title: "Cien Años de Soledad", author: "Gabriel García Márquez", categoryId: createdCategories[1].id },
    { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", categoryId: createdCategories[0].id },
    { title: "La Odisea", author: "Homero", categoryId: createdCategories[2].id }
  ];

  await Promise.all(
    books.map(bookData => Book.create(bookData))
  );

  console.log('Libros, categorías y relaciones de ejemplo insertados en la base de datos');
}

sequelize.sync({ force: true })
  .then(async () => {
    console.log('Base de datos y modelos sincronizados');
    await seedData();
  })
  .catch(err => console.error('Error al sincronizar la base de datos:', err));
 
// RUTAS CREADAS
app.use("/category", categoryRoutes); 
app.use("/books", bookRoutes); 

// RUTA DE TESTEO
app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});