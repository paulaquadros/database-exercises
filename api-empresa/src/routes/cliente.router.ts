import express from "express";
import Cliente from "../models/cliente";

const router = express.Router();

// Listar todos os clientes
router.get("/clientes", async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});

// Criar um novo cliente
router.post("/clientes", async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.json(cliente);
});

// Obter detalhes de um cliente por ID
router.get("/clientes/:id", async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (cliente) {
    res.json(cliente);
  } else {
    res.status(404).json({ message: "Cliente não encontrado" });
  }
});

// Atualizar um cliente por ID
router.put("/clientes/:id", async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (cliente) {
    await cliente.update(req.body);
    res.json(cliente);
  } else {
    res.status(404).json({ message: "Cliente não encontrado" });
  }
});

// Excluir um cliente por ID
router.delete("/clientes/:id", async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (cliente) {
    await cliente.destroy();
    res.json({ message: "Cliente excluído com sucesso" });
  } else {
    res.status(404).json({ message: "Cliente não encontrado" });
  }
});

export default router;
