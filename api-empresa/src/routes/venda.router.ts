import express from "express";
import Venda from "../models/venda";

const router = express.Router();

// Listar todas as vendas
router.get("/vendas", async (req, res) => {
  const vendas = await Venda.findAll();
  res.json(vendas);
});

// Criar uma nova venda
router.post("/vendas", async (req, res) => {
  const venda = await Venda.create(req.body);
  res.json(venda);
});

// Obter detalhes de uma venda por ID
router.get("/vendas/:id", async (req, res) => {
  const venda = await Venda.findByPk(req.params.id);
  if (venda) {
    res.json(venda);
  } else {
    res.status(404).json({ message: "Venda não encontrada" });
  }
});

// Atualizar uma venda por ID
router.put("/vendas/:id", async (req, res) => {
  const venda = await Venda.findByPk(req.params.id);
  if (venda) {
    await venda.update(req.body);
    res.json(venda);
  } else {
    res.status(404).json({ message: "Venda não encontrada" });
  }
});

// Excluir uma venda por ID
router.delete("/vendas/:id", async (req, res) => {
  const venda = await Venda.findByPk(req.params.id);
  if (venda) {
    await venda.destroy();
    res.json({ message: "Venda excluída com sucesso" });
  } else {
    res.status(404).json({ message: "Venda não encontrada" });
  }
});

export default router;
