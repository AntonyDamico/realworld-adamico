import 'reflect-metadata';
import express, { Request, Application, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'express-async-errors';
import './config/typeorm';
import './shared/container';
import routes from './shared/routes';
import { AppError } from './shared/errors';

dotenv.config();
const port = parseInt(process.env.SERVER_PORT, 10);

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ response: true });
});

app.use(routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(port, () => {
  console.log(`Starting on port ${port}`);
});
