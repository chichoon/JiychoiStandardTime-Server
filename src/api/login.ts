import { Request, Response } from 'express';

export function getLogin(req: Request, res: Response) {
  res.send({ data: 'login' });
}
