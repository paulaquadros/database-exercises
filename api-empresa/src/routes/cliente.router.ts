import express, { Request, Response, Router } from "express";
import Cliente from "../models/cliente";

const router: Router = Router();

//Listar todos os clientes
router.get(
  "/clientes",
  async (req: Request, res: Response): Promise<Response> => {
    const allClientes: Cliente[] = await Cliente.findAll();
    return res.status(200).json(allClientes);
  }
);

//Listar um cliente por ID
router.get(
  "/clientes/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const cliente: Cliente | null = await Cliente.findByPk(id);
    return res.status(200).json(cliente);
  }
);

//Criar um novo cliente
router.post(
  "/clientes",
  async (req: Request, res: Response): Promise<Response> => {
    const cliente: Cliente = await Cliente.create({ ...req.body });
    return res.status(201).json(cliente);
  }
);

//Atualizar um cliente por ID
router.put(
  "/clientes/:idCliente",
  async (req: Request, res: Response): Promise<Response> => {
    const { idCliente } = req.params;
    await Cliente.update({ ...req.body }, { where: { idCliente } });
    const updatedClientes: Cliente | null = await Cliente.findByPk(idCliente);
    return res.status(200).json(updatedClientes);
  }
);

//Excluir um cliente por ID
router.delete(
  "/clientes/:idCliente",
  async (req: Request, res: Response): Promise<Response> => {
    const { idCliente } = req.params;
    const deletedCliente: Cliente | null = await Cliente.findByPk(idCliente);
    await Cliente.destroy({ where: { idCliente } });
    return res.status(200).json(deletedCliente);
  }
);

export default router;
