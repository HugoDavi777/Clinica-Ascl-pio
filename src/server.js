const express = require("express");
const Controller = require("./controller");
const cors = require("cors");

const server = express();
const PORT = 8070;

server.use(cors());
server.use(express.json());

server.get("/exames", Controller.getAllExames);
server.get("/exames/:id", Controller.getExamesById);
server.post("/consulta", Controller.setConsulta);
server.get("/history", Controller.getHistory);
// server.get("/history/:id", Controller.getConsultaById);

/* TODO: Implementar a rota de históricos 
de pagamentos de um cliente */
// server.get("/history", Controller.getHistoryByCpf);

server.listen(PORT, () => console.log("Server ON"));