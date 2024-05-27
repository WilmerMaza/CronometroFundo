import dotenv from "dotenv";
import express from "express";
import competenciaRoutes from "./routes/competencia.routes";
dotenv.config();
const app = express();

app.use(express.json());

app.use(competenciaRoutes);

// Iniciar el servidor
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
