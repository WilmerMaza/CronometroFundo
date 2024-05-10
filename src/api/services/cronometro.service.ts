import { Response } from "express";
import { IClients } from "../../models/IClients";

export class CronometroService {
  private static clients: IClients = {};

  public static addClient(partidaId: string, client: Response) {
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
      this.clients[partidaId] = this.clients[partidaId].filter(
        (c) => c !== client
      );
      if (this.clients[partidaId].length === 0) {
        delete this.clients[partidaId];
      }
      client.end();
    });
  }

  public static actionCronometro(
    actionCronometro: string,
    competitionId: string
  ): void {
    console.log(
      `Cronómetro ${actionCronometro} para la competición: ${competitionId}`
    );

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
