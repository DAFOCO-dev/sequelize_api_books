
# API de Libros y Categorías

Esta API permite gestionar libros y categorías, incluyendo la creación de registros y su consulta.

## Clonado e Instalación

### Paso 1: Clonar el Repositorio

Clona este repositorio y navega al directorio del proyecto.

### Paso 2: Instalar Dependencias

1. **Si ya existe un archivo `package.json`**: instala todas las dependencias listadas en el proyecto con el siguiente comando:

   ```bash
   npm install
   ```

2. **Si no tienes un archivo `package.json`**, instala manualmente las dependencias necesarias:

   ```bash
   npm install express sequelize sqlite3
   ```

### Paso 3: Configurar y Ejecutar la API

1. **Ejecuta la API**:

   ```bash
   node index.js
   ```

   Esto iniciará el servidor en `http://localhost:3000`. Al arrancar la API, se crean automáticamente algunos ejemplos de libros y categorías en la base de datos para facilitar el testeo en un entorno local.

---

## Endpoints

### 1. Crear un Libro
   - **Ruta**: `POST http://localhost:3000/books/createBook`
   - **Descripción**: Crea un nuevo libro en la base de datos.
   - **Body**:
     ```json
     {
       "title": "Nombre del Libro",
       "author": "Nombre del Autor",
       "categoryId": 1
     }
     ```
   - **Respuesta**:
     - Código `201` si se crea exitosamente con el ID y detalles del libro creado.

### 2. Obtener Todos los Libros
   - **Ruta**: `GET http://localhost:3000/books/getAllBooks`
   - **Descripción**: Obtiene todos los libros, incluyendo el nombre de su categoría.
   - **Body**: No recibe ningún parámetro.

### 3. Crear una Categoría
   - **Ruta**: `POST http://localhost:3000/category/createCategory`
   - **Descripción**: Crea una nueva categoría.
   - **Body**:
     ```json
     {
       "name": "Nombre de la Categoría"
     }
     ```

### 4. Obtener Todas las Categorías
   - **Ruta**: `GET http://localhost:3000/category/getAllCategories`
   - **Descripción**: Retorna todas las categorías existentes.
   - **Body**: No recibe ningún parámetro.

### 5. Obtener una Categoría por ID
   - **Ruta**: `POST http://localhost:3000/category/getCategoryById`
   - **Descripción**: Permite obtener los detalles de una categoría específica usando su `id`.
   - **Body**:
     ```json
     {
       "id": 1
     }
     ```

### 6. Eliminar una Categoría por ID
   - **Ruta**: `POST http://localhost:3000/category/deleteCategoryById`
   - **Descripción**: Permite eliminar una categoría específica de la base de datos usando su `id`.
   - **Body**:
     ```json
     {
       "id": 1
     }
     ```
