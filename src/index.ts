import 'reflect-metadata';
import express, { Request, Application, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';
import './config/typeorm';
import './shared/container';
import routes from './shared/routes';
import { AppError, ErrorDTO } from './shared/errors';

dotenv.config();
const port = parseInt(process.env.SERVER_PORT, 10);

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(errors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ response: true });
});

app.use('/api', routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: ErrorDTO, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  if ('joi' in err) {
    return response.status(400).json({
      status: 'error',
      message: err.joi.message,
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
