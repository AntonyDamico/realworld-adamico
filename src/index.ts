import 'reflect-metadata';
import express, { Request, Application, Response } from 'express';
import dotenv from 'dotenv';
// import { typeOrmConfg } from './config/typeorm';
import './config/typeorm';
import './shared/container';
import routes from './shared/routes';

dotenv.config();
const port = parseInt(process.env.SERVER_PORT, 10);

const app: Application = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ response: true });
});

app.use(routes);

app.listen(port, () => {
  console.log(`Starting on port ${port}`);
});
