import { Request, Response } from 'express';

export function getMonthlyData(req: Request, res: Response) {
  res.send({ data: 'data' });
}
