import express from "express";
import Produto from "../models/produto";

const router = express.Router();

// Listar todos os produtos
router.get("/produtos", async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
});

// Criar um novo produto
router.post("/produtos", async (req, res) => {
  const produto = await Produto.create(req.body);
  res.json(produto);
});

// Obter detalhes de um produto por ID
router.get("/produtos/:id", async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ message: "Produto não encontrado" });
  }
});

// Atualizar um produto por ID
router.put("/produtos/:id", async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  if (produto) {
    await produto.update(req.body);
    res.json(produto);
  } else {
    res.status(404).json({ message: "Produto não encontrado" });
  }
});

// Excluir um produto por ID
router.delete("/produtos/:id", async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  if (produto) {
    await produto.destroy();
    res.json({ message: "Produto excluído com sucesso" });
  } else {
    res.status(404).json({ message: "Produto não encontrado" });
  }
});

export default router;
