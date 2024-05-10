"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronometroService = void 0;
class CronometroService {
    static addClient(partidaId, client) {
        // Asegurarse de que los headers son adecuados para SSE
        client.setHeader("Content-Type", "text/event-stream");
        client.setHeader("Cache-Control", "no-cache");
        client.setHeader("Connection", "keep-alive");
        if (!this.clients[partidaId]) {
            this.clients[partidaId] = [];
        }
        this.clients[partidaId].push(client);
        // Manejar correctamente el cierre de la conexión
        client.on("close", () => {
            this.clients[partidaId] = this.clients[partidaId].filter((c) => c !== client);
            if (this.clients[partidaId].length === 0) {
                delete this.clients[partidaId];
            }
            client.end();
        });
    }
    static actionCronometro(actionCronometro, competitionId) {
        console.log(`Cronómetro ${actionCronometro} para la competición: ${competitionId}`);
        const data = `data: ${JSON.stringify({
            action: actionCronometro,
            time: new Date().toISOString(),
        })}\n\n`;
        if (this.clients[competitionId]) {
            this.clients[competitionId].forEach((client) => {
                client.write(data);
            });
        }
    }
}
exports.CronometroService = CronometroService;
CronometroService.clients = {};
//# sourceMappingURL=cronometro.service.js.map