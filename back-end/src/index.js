import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './app/controllers/index';

const app = express();
app.disable('x-powered-by');

const port = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando no link http://localhost:${port}`);
});
