# 🏃 Running Life

## Descripción del proyecto

Running Life es una aplicación web orientada a carreras de trail running. Su objetivo es permitir que los corredores conozcan las distancias disponibles, consulten información relacionada con las competencias y puedan realizar su inscripción.

El proyecto cuenta con un frontend desarrollado con React y un backend desarrollado con Node.js, Express y MongoDB. El backend expone una API REST que permite administrar categorías, usuarios, resultados e inscripciones, inclusive de ediciones anteriores. 

## Tecnologías utilizadas

### Frontend
- React
- JavaScript
- Vite
- HTML5
- CSS3
- Bootstrap

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- CORS
- bcryptjs

### Herramientas
- Visual Studio Code
- MongoDB Compass
- Thunder Client
- Git y GitHub

## Estructura del proyecto

```text
running-life/
│
├── front/
│   └── running-react/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── ...
│
├── back/
│   └── running-backend/
│       ├── src/
│       │   ├── config/
│       │   ├── controllers/
│       │   ├── models/
│       │   ├── routes/
│       │   └── services/
│       │
│       ├── models/
│       ├── app.js
│       ├── .env.example
│       └── package.json
│
└── README.md
```

## Base de datos

Se utiliza MongoDB como sistema de gestión de base de datos y Mongoose para definir los esquemas, validar los datos y administrar las operaciones sobre las colecciones.

La base de datos utilizada se denomina `runningdDB`.

El proyecto cuenta con cuatro colecciones principales:

### 1. Categories

Almacena las categorías o distancias disponibles para las carreras.

| Campo | Tipo | Descripción |
|---|---|---|
| _id | ObjectId | Identificador de la categoría. |
| distancia | String | Distancia de la carrera. |
| descripcion | String | Descripción de la categoría. |

Las distancias utilizadas son 21K y 50K.

### 2. Users

Almacena la información de los usuarios registrados.

| Campo | Tipo | Descripción |
|---|---|---|
| _id | ObjectId | Identificador del usuario. |
| nombre | String | Nombre del usuario. |
| email | String | Correo electrónico único. |
| password | String | Contraseña almacenada mediante hash. |
| rol | String | Rol del usuario. Por defecto: corredor. |
| createdAt | Date | Fecha de creación del usuario. |

La contraseña se encripta utilizando `bcryptjs` mediante un middleware `pre("save")` de Mongoose, antes de guardar el usuario en la base de datos.

### 3. Results

Almacena los resultados obtenidos por los corredores en las distintas ediciones de las carreras.

| Campo | Tipo | Descripción |
|---|---|---|
| _id | ObjectId | Identificador del resultado. |
| tiempoOficial | String | Tiempo oficial del corredor. |
| puestoGeneral | Number | Posición en la clasificación general. |
| anioEdicion | Number | Año de la edición de la carrera. |
| categoriaId | ObjectId | Referencia a Categories. |
| usuarioId | ObjectId | Referencia a Users. |

**Relaciones:** los campos `categoriaId` y `usuarioId` utilizan referencias de MongoDB mediante `ObjectId` y `ref`.

Se utiliza `populate` de Mongoose para obtener información relacionada de las colecciones Categories y Users al consultar los resultados.

### 4. Inscriptions

Almacena los datos de las personas que realizan una inscripción a las carreras.

| Campo | Tipo | Descripción |
|---|---|---|
| _id | ObjectId | Identificador de la inscripción. |
| nombre | String | Nombre del corredor. |
| email | String | Correo electrónico. |
| telefono | String | Número de teléfono. |
| distancia | String | Distancia seleccionada: 21KM o 50KM. |
| experiencia | String | Nivel de experiencia: Principiante o Avanzado. |
| comentario | String | Comentario opcional. |
| createdAt | Date | Fecha de creación de la inscripción. |

Los campos `distancia` y `experiencia` cuentan con valores permitidos mediante validaciones `enum`.

## API REST

El backend expone los siguientes endpoints:

URL base:

```text
http://localhost:3000
```

### Categories

| Método HTTP | Endpoint | Descripción |
|---|---|---|
| GET | `/api/categories` | Obtener todas las categorías. |
| POST | `/api/categories` | Crear una categoría. |
| PUT | `/api/categories/:id` | Actualizar una categoría. |
| DELETE | `/api/categories/:id` | Eliminar una categoría. |

**Ejemplo POST:**

```json
{
  "distancia": "21K",
  "descripcion": "Carrera de trail running de 21 kilómetros"
}
```

**Ejemplo PUT:**

```json
{
  "distancia": "50K",
  "descripcion": "Carrera de trail running de 50 kilómetros"
}
```

### Users

| Método HTTP | Endpoint | Descripción |
|---|---|---|
| GET | `/api/users` | Obtener todos los usuarios. |
| GET | `/api/users/:id` | Obtener un usuario por ID. |
| POST | `/api/users` | Crear un usuario. |
| PUT | `/api/users/:id` | Actualizar un usuario. |
| DELETE | `/api/users/:id` | Eliminar un usuario. |

**Ejemplo POST:**

```json
{
  "nombre": "Juan Pérez",
  "email": "juan@email.com",
  "password": "123456",
  "rol": "corredor"
}
```

La contraseña se recibe como texto en la solicitud y se almacena en la base de datos mediante un hash generado con bcryptjs.

**Ejemplo PUT:**

```json
{
  "nombre": "Juan Pérez",
  "email": "juanperez@email.com",
  "rol": "corredor"
}
```

### Results

| Método HTTP | Endpoint | Descripción |
|---|---|---|
| GET | `/api/results` | Obtener todos los resultados. |
| GET | `/api/results/:id` | Obtener un resultado por ID. |
| POST | `/api/results` | Crear un resultado. |
| PUT | `/api/results/:id` | Actualizar un resultado. |
| DELETE | `/api/results/:id` | Eliminar un resultado. |

**Ejemplo POST:**

```json
{
  "tiempoOficial": "02:35:40",
  "puestoGeneral": 15,
  "anioEdicion": 2026,
  "categoriaId": "ID_DE_CATEGORIA",
  "usuarioId": "ID_DE_USUARIO"
}
```

Los valores `ID_DE_CATEGORIA` e `ID_DE_USUARIO` deben reemplazarse por los ObjectId existentes en MongoDB.

**Ejemplo PUT:**

```json
{
  "tiempoOficial": "02:30:15",
  "puestoGeneral": 12,
  "anioEdicion": 2026,
  "categoriaId": "ID_DE_CATEGORIA",
  "usuarioId": "ID_DE_USUARIO"
}
```

### Inscriptions

| Método HTTP | Endpoint | Descripción |
|---|---|---|
| POST | `/api/inscripciones` | Crear una inscripción. |
| GET | `/api/inscripciones` | Obtener todas las inscripciones. |
| GET | `/api/inscripciones/:id` | Obtener una inscripción por ID. |
| PUT | `/api/inscripciones/:id` | Actualizar una inscripción. |
| DELETE | `/api/inscripciones/:id` | Eliminar una inscripción. |

**Ejemplo POST:**

```json
{
  "nombre": "María López",
  "email": "maria@email.com",
  "telefono": "1123456789",
  "distancia": "21KM",
  "experiencia": "Principiante",
  "comentario": "Es mi primera carrera"
}
```

**Ejemplo PUT:**

```json
{
  "nombre": "María López",
  "email": "maria@email.com",
  "telefono": "1123456789",
  "distancia": "50KM",
  "experiencia": "Avanzado",
  "comentario": "Actualización de inscripción"
}
```

## Instalación y ejecución

### Requisitos previos

- Node.js y npm instalados.
- MongoDB instalado y funcionando localmente.
- Git instalado.

### 1. Clonar el repositorio

```bash
git clone https://github.com/milagrosrojasfalcucci7-ai/running-life.git
```

Ingresar a la carpeta del proyecto:

```bash
cd running-life
```

### 2. Configurar el backend

Ingresar a la carpeta:

```bash
cd back/running-backend
```

Instalar las dependencias:

```bash
npm install
```

Crear un archivo `.env` tomando como referencia `.env.example`:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/runningdDB
```

Iniciar el servidor:

```bash
node app.js
```

El servidor se ejecutará en el puerto 3000 y se conectará a MongoDB.

### 3. Configurar el frontend

Abrir una nueva terminal e ingresar a:

```bash
cd front/running-react
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

El frontend estará disponible en la dirección local que indique Vite en la terminal.

## Funcionalidades implementadas

- Administración de categorías de carreras.
- Creación, consulta, actualización y eliminación de usuarios.
- Encriptación de contraseñas con bcryptjs.
- Administración de resultados de corredores.
- Relaciones entre Users, Categories y Results mediante referencias de MongoDB.
- Consultas con `populate` para recuperar información relacionada.
- Registro, consulta, actualización y eliminación de inscripciones.
- Formulario de inscripción desarrollado en React y conectado con la API REST.
- Conexión entre frontend y backend.
- Configuración de variables de entorno mediante dotenv.
- Configuración de CORS para permitir la comunicación entre frontend y backend.

## Posibles mejoras futuras

- Implementar autenticación de usuarios mediante JWT.
- Incorporar middleware para verificar permisos y roles.
- Mejorar las validaciones de los datos recibidos por la API.
- Incorporar filtros y búsquedas de resultados.
- Agregar nuevas funcionalidades para la administración de carreras.

## Autor

Proyecto desarrollado como trabajo práctico de la Diplomatura en Programación Web Full Stack.

**Running Life – Trail Running**

Repositorio: https://github.com/milagrosrojasfalcucci7-ai/running-life
