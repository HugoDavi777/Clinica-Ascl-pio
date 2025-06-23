class ExameRepository {
  constructor(database) {
    this.database = database;
  }

  async getAllExames() {
    try {
      const sql = "select * from Exames";
      const responseDB = await this.database.query(sql);

      return responseDB.rows;
    } catch (error) {
      return { error: error.message };
    }
  }

async getExamesById(id) {
    try {
      const sql = "select name from Exames where id = $1";
      const responseDB = await this.database.query(sql, [id]);

      return responseDB.rows;
    } catch (error) {
      return { error: error.message };
    }
  }

    async getAvalicoesById(id) {
    try {
      const sql = "select name, price from Avaliacoes where id_Exames = $1";
      const responseDB = await this.database.query(sql, [id]);

      return responseDB.rows;
    } catch (error) {
      return { error: error.message };
    }
  }

  async setConsulta(consultaInfo) {
    try {
      const sql = `insert into consulta(id_Exame, cpf, date, hora, description, price)
          values($1, $2, $3, $4, $5, $6)`;

      const response = await this.database.query(sql, [
        consultaInfo.id_Exame,
        consultaInfo.cpf,
        consultaInfo.date,
        consultaInfo.hora,
        consultaInfo.description,
        consultaInfo.price,
      ]);

      return "Consulta marcada!";
    } catch (error) {
      return { error: error.message };
    }
  }

   async getHistory() {
    try {
      const sql = "select * from consulta";
      const responseDB = await this.database.query(sql);

      return responseDB.rows;
    } catch (error) {
      return { error: error.message };
    }
  }
  

}

module.exports = ExameRepository;