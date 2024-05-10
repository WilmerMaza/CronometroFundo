import { Response } from "express";
export interface IClients {
  [key: string]: Response[];
}
