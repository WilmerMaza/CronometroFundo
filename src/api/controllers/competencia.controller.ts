

import { Request, Response } from "express";
import { RequestEventData } from "../../models/RequestEventData";
import { CronometroService } from "../services/cronometro.service";


// Las funciones para manejar las peticiones HTTP
export const eventCronometro = async (req: Request, res: Response) => {
  try {
    const {
      params: { event, partidaId, platform }, body
    } = req;

    const request: RequestEventData = { event, partidaId, platform, body }

    CronometroService.actionCronometro(request);
    res.status(200).json({ message: "Event iniciado" });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar el evento" });
  }
};

export const getCronometroEvents = (req: Request, res: Response) => {
  const {
    params: { partidaId, platform },
  } = req;

  CronometroService.addClient(partidaId, res, platform);
};
