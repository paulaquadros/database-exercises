import express from "express";
import bodyParser from "body-parser";
import categoriaRouter from "./routes/categoria.router";
import clienteRouter from "./routes/cliente.router";
import produtoRouter from "./routes/produto.router";
import vendaRouter from "./routes/venda.router";

const app = express();

export class Api {
  public server: express.Application;
  constructor() {
    this.server = app;
    this.middleware();
    this.router();
  }
  private middleware() {
    this.server.use(express.json());
  }
  private router() {
    this.server.use(bodyParser.json());
    this.server.use(categoriaRouter);
    this.server.use(clienteRouter);
    this.server.use(produtoRouter);
    this.server.use(vendaRouter);
  }
}
