"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronometroService = void 0;
class CronometroService {
    static addClient(partidaId, client, platform) {
        // Asegurarse de que los headers son adecuados para SSE
        client.setHeader("Content-Type", "text/event-stream");
        client.setHeader("Cache-Control", "no-cache");
        client.setHeader("Connection", "keep-alive");
        if (!this.clients[partidaId]) {
            this.clients[partidaId] = {};
        }
        if (!this.clients[partidaId][platform]) {
            this.clients[partidaId][platform] = [];
        }
        this.clients[partidaId][platform].push(client);
        // Manejar correctamente el cierre de la conexión
        // Manejar correctamente el cierre de la conexión
        client.on("close", () => {
            this.clients[partidaId][platform] = this.clients[partidaId][platform].filter((c) => c !== client);
            if (this.clients[partidaId][platform].length === 0) {
                delete this.clients[partidaId][platform];
            }
            // Si todas las plataformas están vacías, eliminar la partidaId
            if (Object.keys(this.clients[partidaId]).length === 0) {
                delete this.clients[partidaId];
            }
            client.end();
        });
    }
    static actionCronometro({ event, partidaId, platform, body }) {
        console.log(`Cronómetro ${event} para la competición: ${partidaId}`);
        const data = `data: ${JSON.stringify({
            action: event,
            time: new Date().toISOString(),
            body
        })}\n\n`;
        if (this.clients[partidaId] && this.clients[partidaId][platform]) {
            this.clients[partidaId][platform].forEach((client) => {
                client.write(data);
            });
        }
    }
}
exports.CronometroService = CronometroService;
CronometroService.clients = {};
//# sourceMappingURL=cronometro.service.js.map