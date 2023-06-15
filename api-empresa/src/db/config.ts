import { Sequelize } from "sequelize-typescript";
import { Funcionarios } from "../models/funcionario";
const connection = new Sequelize({
  dialect: "mysql",
  host: HOST,
  username: USUARIO_MYSQL,
  password: SENHA,
  database: BANCO,
  logging: false,
  models: [Funcionarios],
});
export default connection;
