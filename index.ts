import path from 'path';
import express from 'express';

function main() {
  const __dirname = path.resolve();
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname + '/src/public'));
  app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  });

  console.log('hihi');
}

main();
