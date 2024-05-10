import { Request, Response } from "express";

import { CronometroService } from "../services/cronometro.service";

// Las funciones para manejar las peticiones HTTP
export const eventCronometro = async (req: Request, res: Response) => {
  try {
    const {
      params: { event, partidaId },
    } = req;
    await CronometroService.actionCronometro(event, partidaId);
    res.status(200).json({ message: "Cronómetro iniciado" });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar el cronómetro" });
  }
};

export const getCronometroEvents = (req: Request, res: Response) => {
  const {
    params: { partidaId },
  } = req;

  CronometroService.addClient(partidaId, res);
};
