const database = require("./database");
const ExameRepository = require("./repository");

const repository = new ExameRepository(database);

async function getAllExames(request, reply) {
  const responseDB = await repository.getAllExames();

  if (responseDB.error) return reply.status(404).json(responseDB.error);

  reply.json(responseDB);
}

async function getExamesById(request, reply) {
  const id = request.params.id;

  const responseExames = await repository.getExamesById(id);
  const responseavalicoes = await repository.getAvalicoesById(id);

  if (responseExames.error) return reply.status(404).json(responseExames.error);

  const response = {
    Exames: responseExames,
    Avaliações: responseavalicoes,
  };

  reply.json(response);
}

async function setConsulta(request, reply) {
  const consultaInfo = request.body;

  const responseDB = await repository.setConsulta(consultaInfo);

  if (responseDB.error) return reply.status(404).json(responseDB.error);

  reply.json(responseDB);
}

async function getHistory(request, reply) {
  const responseDB = await repository.getHistory();

  if (responseDB.error) return reply.status(404).json(responseDB.error);

  reply.json(responseDB);
}


module.exports = {getAllExames, getExamesById, setConsulta, getHistory};