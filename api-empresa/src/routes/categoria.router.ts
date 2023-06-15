import express from "express";
import Categoria from "../models/categoria";

const router = express.Router();

// Listar todas as categorias
router.get("/categorias", async (req, res) => {
  const categorias = await Categoria.findAll();
  res.json(categorias);
});

// Criar uma nova categoria
router.post("/categorias", async (req, res) => {
  const categoria = await Categoria.create(req.body);
  res.json(categoria);
});

// Obter detalhes de uma categoria por ID
router.get("/categorias/:id", async (req, res) => {
  const categoria = await Categoria.findByPk(req.params.id);
  if (categoria) {
    res.json(categoria);
  } else {
    res.status(404).json({ message: "Categoria não encontrada" });
  }
});

// Atualizar uma categoria por ID
router.put("/categorias/:id", async (req, res) => {
  const categoria = await Categoria.findByPk(req.params.id);
  if (categoria) {
    await categoria.update(req.body);
    res.json(categoria);
  } else {
    res.status(404).json({ message: "Categoria não encontrada" });
  }
});

// Excluir uma categoria por ID
router.delete("/categorias/:id", async (req, res) => {
  const categoria = await Categoria.findByPk(req.params.id);
  if (categoria) {
    await categoria.destroy();
    res.json({ message: "Categoria excluída com sucesso" });
  } else {
    res.status(404).json({ message: "Categoria não encontrada" });
  }
});

export default router;
