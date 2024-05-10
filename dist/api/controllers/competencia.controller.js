"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCronometroEvents = exports.eventCronometro = void 0;
const cronometro_service_1 = require("../services/cronometro.service");
// Las funciones para manejar las peticiones HTTP
const eventCronometro = async (req, res) => {
    try {
        const { params: { event, partidaId }, } = req;
        await cronometro_service_1.CronometroService.actionCronometro(event, partidaId);
        res.status(200).json({ message: "Cronómetro iniciado" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al iniciar el cronómetro" });
    }
};
exports.eventCronometro = eventCronometro;
const getCronometroEvents = (req, res) => {
    const { params: { partidaId }, } = req;
    cronometro_service_1.CronometroService.addClient(partidaId, res);
};
exports.getCronometroEvents = getCronometroEvents;
//# sourceMappingURL=competencia.controller.js.map