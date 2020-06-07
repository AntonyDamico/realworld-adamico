import 'reflect-metadata';
import { ClientRepository } from './modules/client/ClientRepository';
import express, { Request, Application, Response } from 'express';
import dotenv from 'dotenv';
// import { typeOrmConfg } from './config/typeorm';
import './config/typeorm';
import routes from './shared/routes';

dotenv.config();
const port = parseInt(process.env.SERVER_PORT, 10);

// createConnection(typeOrmConfg)
//     .then((connection) => {
const app: Application = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ response: true });
});

app.use(routes);

// app.get('/customerIndex', (req, res) => {
//     const clientRepo = new ClientRepository();
//     clientRepo.getClientsList().then((result) => res.send(result));
// });

// app.post('/customer', (req: Request, res) => {
//     console.log(req.params);
//     clientRepo.createClient(req.body).then((result) => res.send(result));
// });

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
});
// })
// .catch((error) => console.log(error));
