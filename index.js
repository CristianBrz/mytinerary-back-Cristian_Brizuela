import 'dotenv/config.js'
import express, { request } from "express"
import indexRouter from "./router/IndexRouter.js";
import cors from 'cors'


// genero el servidor (instancia de express)
const server = express();

server.use('/api', indexRouter);

server.get("/", (request, response, next) => {
  response.send("Welcome to the jungle en /");
});

server.listen(process.env.PORT, () => {console.log("Server running... Port " + process.env.PORT);});
