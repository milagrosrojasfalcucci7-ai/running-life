require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Result = require("./models/Result");
const categoryRoutes = require("./src/routes/categoryRoute");
const resultRoutes = require("./src/routes/resultRoute");
const userRoutes = require("./src/routes/userRoute");
const inscriptionRoutes = require("./src/routes/inscriptionRoute");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/users", userRoutes);
app.use("/api/inscripciones", inscriptionRoutes);


// Conexión con MongoDB
mongoose
  mongoose
  .connect(process.env.MONGO_URI)
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
