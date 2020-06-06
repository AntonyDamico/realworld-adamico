import 'reflect-metadata';
import { Client } from './entities/Client';
import { ClientRepo } from './repository/ClientRepo';
import express, { Request, Application, Response } from "express";
import dotenv from "dotenv";
import { createConnection } from 'typeorm';
import { typeOrmConfg } from './config/typeorm';


dotenv.config()
const port = parseInt(process.env.SERVER_PORT, 10)


createConnection(typeOrmConfg).then(connection => {


    const clientRepo = new ClientRepo()

    const app: Application = express()
    app.use(express.json());

    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({ response: true })
    })
    
    app.get('/customer', (req, res) => {
        clientRepo.getClientsList().then(result => res.send(result))
    })

    app.post('/customer', (req: Request, res) => {
        console.log(req.params)
        clientRepo.createClient(req.body).then(result => res.send(result))
    })
    
    app.listen(port, () => {
        console.log(`Starting on port ${port}`)
    })
    



 })
    .catch(error => console.log(error))

