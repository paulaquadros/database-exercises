import { Sequelize } from "sequelize-typescript";
import Categoria from "../models/categoria";
import Cliente from "../models/cliente";
import Produto from "../models/produto";
import Venda from "../models/venda";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "@Momo1337",
  database: "LojaVirtual",
  logging: false,
  models: [Categoria, Cliente, Produto, Venda],
});

export default connection;
