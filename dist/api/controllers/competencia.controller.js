"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCronometroEvents = exports.eventCronometro = void 0;
const cronometro_service_1 = require("../services/cronometro.service");
// Las funciones para manejar las peticiones HTTP
const eventCronometro = async (req, res) => {
    try {
        const { params: { event, partidaId, platform }, body } = req;
        const request = { event, partidaId, platform, body };
        cronometro_service_1.CronometroService.actionCronometro(request);
        res.status(200).json({ message: "Event iniciado" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al enviar el evento" });
    }
};
exports.eventCronometro = eventCronometro;
const getCronometroEvents = (req, res) => {
    const { params: { partidaId, platform }, } = req;
    cronometro_service_1.CronometroService.addClient(partidaId, res, platform);
};
exports.getCronometroEvents = getCronometroEvents;
//# sourceMappingURL=competencia.controller.js.map