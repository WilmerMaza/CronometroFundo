import express from "express";
import competenciaRoutes from "./routes/competencia.routes";

const app = express();

app.use(express.json());

app.use(competenciaRoutes);

// Iniciar el servidor
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
