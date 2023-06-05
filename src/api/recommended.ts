import { Request, Response } from 'express';

export function getRecommendedSongList(req: Request, res: Response) {
  res.send({ data: 'data' });
}

export function postRecommendedSong(req: Request, res: Response) {
  const {} = req.body;
  res.send();
}

export function putRecommendedSong(req: Request, res: Response) {
  const {} = req.body;
  res.send();
}

export function putRecommendedSongStatus(req: Request, res: Response) {
  const {} = req.body;
  res.send();
}

export function deleteRecommendedSong(req: Request, res: Response) {
  const {} = req.body;
  res.send();
}
