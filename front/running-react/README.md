## 1. Elección del dominio

* **Descripción de la aplicación:** Es una plataforma web para la gestión de una carrera de running (con distancias de 21k y 50k), donde los corredores registrados pueden consultar su perfil y visualizar una grilla interactiva con sus tiempos registrados a lo largo de las diferentes ediciones (por ejemplo: 2023, 2024, 2025 y 2026).

* **Usuarios:**  Corredores que se inscriben, gestionan sus datos y consultan su historial de rendimiento deportivo.



---



## 2. Diagrama del modelo

Estructura de colecciones y sus relaciones en MongoDB:



* **Colección `users` (Usuarios):**

  * `_id` (ObjectId)

  * `nombre` (String)

  * `email` (String, Unique)

  * `password` (String)

  * `rol` (String: `"admin"` o `"runner"`)

  * `createdAt` (Date)



* **Colección `results` (Entidad Principal - El corazón del negocio):**

  * Representa la participación y el tiempo de un usuario en una edición específica de la carrera.

  * `_id` (ObjectId)

  * `anioEdicion` (Number: ej. 2025)

  * `tiempoOficial` (String: ej. `"01:52:30"`)

  * `puestoGeneral` (Number)

  * `usuarioId` (ObjectId $\rightarrow$ Referencia a la colección `users`)

  * `categoriaId` (ObjectId $\rightarrow$ Referencia a la colección `categories`)



* **Colección `categories` (Entidad Referenciada):**

  * Las modalidades o distancias de la carrera en una colección aparte.

  * `_id` (ObjectId)

  * `distancia` (String: ej. `"21k"`, `"50k"`)

  * `descripcion` (String)



### Tipos de relaciones:

1. **Usuarios (1) $\rightarrow$ Resultados (N):** Un usuario tiene multiples registros de participación históricos en las distintas ediciones de la carrera, pero cada resultado pertenece a un único corredor.

2. **Categorías (1) $\rightarrow$ Resultados (N):** Una categoría/distancia (ej. `50k`) agrupa los resultados de muchos corredores a lo largo de las ediciones, cumpliendo con la relación de referencia 1:N obligatoria.



---



## 3. Justificación de embeber vs. referenciar

* **Por qué la Entidad Referenciada (`categories`) va en colección aparte:** 

  Se modela de forma independiente porque las distancias de la carrera son valores fijos que se reutilizan en los resultados de cientos de usuarios diferentes. Si en el futuro se modifica la descripción de una distancia, se actualiza en un único lugar sin alterar cada documento de resultado individual.

* **Por qué la Entidad Principal (`results`) maneja referencias:** 

  Los tiempos e historiales de cada edición crecen de forma dinámica y están fuertemente ligados tanto al usuario como a la categoría, por lo que utilizar referencias (`usuarioId` y `categoriaId`) mantiene la base de datos normalizada, flexible y preparada para consultas cruzadas eficientes en Mongoose.



---



## 4. Índices propuestos

* **Índice único en el email de usuario (`users.email`):** Garantiza la integridad de las cuentas e impide que un corredor se registre dos veces con el mismo correo electrónico.

* **Índice en el campo de referencia del usuario (`results.usuarioId`):** Optimiza de forma drástica las consultas cuando la aplicación de React necesita buscar y renderizar rápidamente toda la grilla de tiempos históricos del corredor que inició sesión.

* **Índice en el campo de referencia de la categoría (`results.categoriaId`):** Acelera los filtros y agrupamientos por distancia (ej. filtrar todos los que corrieron los 50k).



---



## 5. Documentos de ejemplo (JSON)



### Colección `users`

```json

[

  {

    "_id": "65e4a1b2c3d4e5f6a7b8c9d1",

    "nombre": "Milagros Rojas",

    "email": "milagros@running.com",

    "password": "$2b$10$hashedpasswordstring",

    "rol": "runner",

    "createdAt": "2026-03-01T10:00:00Z"

  }

]

Colección categories (Entidad Referenciada)

JSON

[

  {

    "_id": "65e4a2c3d4e5f6a7b8c9d201",

    "distancia": "21k",

    "descripcion": "Media maratón de ruta y semi-trail."

  },

  {

    "_id": "65e4a2c3d4e5f6a7b8c9d202",

    "distancia": "50k",

    "descripcion": "Ultra maratón de montaña y terrenos mixtos."

  }

]

Colección results (Entidad Principal)

JSON

[

  {

    "_id": "65e4a3d4e5f6a7b8c9d30301",

    "anioEdicion": 2024,

    "tiempoOficial": "01:45:12",

    "puestoGeneral": 15,

    "usuarioId": "65e4a1b2c3d4e5f6a7b8c9d1",

    "categoriaId": "65e4a2c3d4e5f6a7b8c9d201"

  },

  {

    "_id": "65e4a3d4e5f6a7b8c9d30302",

    "anioEdicion": 2025,

    "tiempoOficial": "04:20:50",

    "puestoGeneral": 8,

    "usuarioId": "65e4a1b2c3d4e5f6a7b8c9d1",

    "categoriaId": "65e4a2c3d4e5f6a7b8c9d202"

  }

]
