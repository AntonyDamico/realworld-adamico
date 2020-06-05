import express, { Request, Application, Response } from "express";
import dotenv from "dotenv";

dotenv.config()
const port = parseInt(process.env.SERVER_PORT, 10)

const app: Application = express()


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ response: true })
})

app.listen(port, () => {
    console.log(`Starting on port ${port}`)
})
