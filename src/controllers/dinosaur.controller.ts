import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Dinosaur } from '../entity/Dinosaur';

export const getAllDinosaurs = async (req: Request, res: Response) => {
  try {
    const dinosaurRepository = AppDataSource.getRepository(Dinosaur);
    const dinosaurs = await dinosaurRepository.find();
    res.json(dinosaurs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dinosaurs', error });
  }
};