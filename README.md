# Running Life 🏃‍♀️

## Descripción del proyecto

Running Life es una aplicación web desarrollada para gestionar inscripciones y resultados de una carrera de trail running.

El proyecto permite a los participantes completar un formulario de inscripción y almacenar sus datos en una base de datos. También cuenta con una API REST para administrar usuarios, categorías, resultados e inscripciones de ediciones anteriores. 

## Tecnologías utilizadas

### Frontend
- React
- JavaScript
- HTML
- CSS
- Vite

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- bcryptjs
- dotenv
- CORS

## Estructura del proyecto

```text
running-life/
│
├── front/
│   └── running-react/
│       ├── src/
│       └── package.json
│
├── back/
│   └── running-backend/
│       ├── models/
│       ├── src/
│       │   ├── controllers/
│       │   ├── routes/
│       │   └── services/
│       ├── app.js
│       ├── .env
│       └── package.json
│
└── README.md
```

## Funcionalidades

- Gestión de usuarios.
- Gestión de categorías de carrera (21K y 50K).
- Gestión de resultados.
- Registro de inscripciones.
- Consulta, modificación y eliminación de inscripciones.
- Validación de datos mediante esquemas de Mongoose.
- Encriptación de contraseñas mediante bcryptjs.
- Comunicación entre frontend y backend mediante solicitudes HTTP.

## API REST

La API permite realizar operaciones CRUD sobre los siguientes recursos:

| Recurso | Endpoint |
|---|---|
| Categorías | `/api/categories` |
| Resultados | `/api/results` |
| Usuarios | `/api/users` |
| Inscripciones | `/api/inscripciones` |

### Operaciones de inscripciones

| Método HTTP | Endpoint | Función |
|---|---|---|
| POST | `/api/inscripciones` | Crear inscripción |
| GET | `/api/inscripciones` | Obtener todas |
| GET | `/api/inscripciones/:id` | Obtener por ID |
| PUT | `/api/inscripciones/:id` | Actualizar inscripción |
| DELETE | `/api/inscripciones/:id` | Eliminar inscripción |

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/milagrosrojasfalcucci7-ai/running-life.git
```

### 2. Configurar el backend

Ingresar a la carpeta:

```bash
cd running-life/back/running-backend
```

Instalar las dependencias:

```bash
npm install
```

Crear un archivo `.env` con las siguientes variables:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/runningdDB
```

Iniciar el servidor:

```bash
node app.js
```

### 3. Configurar el frontend

Abrir una segunda terminal e ingresar a:

```bash
cd running-life/front/running-react
```

Instalar las dependencias:

```bash
npm install
```

Iniciar React:

```bash
npm run dev
```

Abrir en el navegador la dirección local que proporciona Vite.

## Base de datos

El proyecto utiliza MongoDB como sistema de gestión de base de datos y Mongoose para definir los modelos y administrar las operaciones sobre las colecciones.

## Autoría

Proyecto académico desarrollado como parte de la formación en programación Full Stack.