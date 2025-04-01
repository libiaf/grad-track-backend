import { Sequelize } from "sequelize-typescript";
import { Evaluado } from "../models/evaluado";

const connection = new Sequelize({
  database: 'sisweb_db',
  dialect: 'mysql',
  username: 'root',
  password: '123456',
  storage: ':memory:',
  models: [
    Evaluado
  ]
});

async function connectionDB() {
  try {
    await connection.sync();
  } catch (e) {
    console.log(e);
  }
}

export default connectionDB;