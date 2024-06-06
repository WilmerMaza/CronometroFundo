"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const competencia_controller_1 = require("../api/controllers/competencia.controller");
const router = express_1.default.Router();
// Iniciar cronómetro
router.post("/cronometro/:platform/:event/:partidaId", competencia_controller_1.eventCronometro);
router.get("/cronometro/:platform/:partidaId", competencia_controller_1.getCronometroEvents);
exports.default = router;
//# sourceMappingURL=competencia.routes.js.map