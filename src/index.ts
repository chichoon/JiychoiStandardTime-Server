import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

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
  app.get(API_URLS.MONTHLY, (req, res) => console.log(req, res));
  app.get(API_URLS.LOGIN, (req, res) => console.log(req, res));
  app.get(API_URLS.RECOMMENDED, (req, res) => console.log(req, res));
  app.get(API_URLS.SONG, (req, res) => console.log(req, res));
  app.post(API_URLS.RECOMMENDED, (req, res) => console.log(req, res));
  app.post(API_URLS.SONG, (req, res) => console.log(req, res));
  app.put(API_URLS.RECOMMENDED, (req, res) => console.log(req, res));
  app.put(API_URLS.RECOMMENDED_STATUS, (req, res) => console.log(req, res));
  app.put(API_URLS.SONG, (req, res) => console.log(req, res));
  app.delete(API_URLS.SONG, (req, res) => console.log(req, res));
  app.delete(API_URLS.RECOMMENDED, (req, res) => console.log(req, res));

  app.listen(PORT, () => console.log('listening on ' + PORT));
}

main();
