import express from "express";
import {
    eventCronometro,
    getCronometroEvents,
} from "../api/controllers/competencia.controller";

const router = express.Router();

// Iniciar cronómetro
router.post("/cronometro/:platform/:event/:partidaId", eventCronometro);
router.get("/cronometro/:platform/:partidaId", getCronometroEvents);

export default router;
