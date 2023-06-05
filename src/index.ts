import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { getMonthlyData } from 'api/monthly';
import {
  deleteRecommendedSong,
  getRecommendedSongList,
  postRecommendedSong,
  putRecommendedSong,
  putRecommendedSongStatus,
} from 'api/recommended';
import { getLogin } from 'api/login';
import { deleteExistingSong, postNewSongs, putExistingSong } from 'api/song';

import { API_URLS } from 'utils/constants';

const PORT = process.env.PORT || 8080;

function main() {
  const __dirname = path.resolve();
  dotenv.config();
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname + '/src/public'));
  console.log(process.env.PROD);
  app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.PROD ? process.env.URL_PROD : process.env.URL_DEV);
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  app.get(API_URLS.MONTHLY, getMonthlyData);
  app.get(API_URLS.LOGIN, getLogin);
  app.get(API_URLS.RECOMMENDED, getRecommendedSongList);
  app.post(API_URLS.RECOMMENDED, postRecommendedSong);
  app.post(API_URLS.SONG, postNewSongs);
  app.put(API_URLS.RECOMMENDED, putRecommendedSong);
  app.put(API_URLS.RECOMMENDED_STATUS, putRecommendedSongStatus);
  app.put(API_URLS.SONG, putExistingSong);
  app.delete(API_URLS.SONG, deleteExistingSong);
  app.delete(API_URLS.RECOMMENDED, deleteRecommendedSong);

  app.listen(PORT, () => console.log('listening on ' + PORT));
}

main();
