const express = require("express");
const mongoose = require("mongoose");
const Result = require("./models/Result");
const categoryRoutes = require("./src/routes/categoryRoute");
const resultRoutes = require("./src/routes/resultRoute");
const userRoutes = require("./src/routes/userRoute");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/categories", categoryRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/users", userRoutes);

// Conexión con MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/runningdDB")
  .then(() => {
    console.log("Conectado a MongoDB correctamente");

    app.listen(PORT, () => {
      console.log(`Servidor funcionando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar con MongoDB:", error.message);
  });

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Bienvenidos a Running Life!");
});

// Consultar resultados
app.get("/api/results", (req, res) => {
  res.send("Acá estarán los resultados de Running Life");
});

// Crear una inscripción
app.post("/api/inscripciones", async (req, res) => {
  try {
    const nuevoResultado = new Result(req.body);

    await nuevoResultado.save();

    return res.status(201).json({
      mensaje: "Inscripción guardada correctamente",
      resultado: nuevoResultado
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al guardar la inscripción",
      error: error.message
    });
  }
});