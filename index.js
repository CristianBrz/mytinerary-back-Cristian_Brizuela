import 'dotenv/config.js'
import express, { request } from "express"
import indexRouter from "./router/IndexRouter.js";
import cors from 'cors'
import './config/database.js'

// genero el servidor (instancia de express)
const server = express();

server.use(cors()); 

server.use(express.json());

server.use('/api', indexRouter);

server.get("/", (req, res, next) => {
  res.send("Welcome en /");
});

server.listen(process.env.PORT, () => {console.log("Server running... Port " + process.env.PORT);});
