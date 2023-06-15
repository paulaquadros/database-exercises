import express, { Request, Response, Router } from "express";
import Venda from "../models/venda";

const router: Router = Router();

//Listar todas as vendas
router.get(
  "/vendas",
  async (req: Request, res: Response): Promise<Response> => {
    const allVendas: Venda[] = await Venda.findAll();
    return res.status(200).json(allVendas);
  }
);

//Listar uma venda por ID
router.get(
  "/vendas/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const vendas: Venda | null = await Venda.findByPk(id);
    return res.status(200).json(vendas);
  }
);

//Criar uma venda
router.post(
  "/vendas",
  async (req: Request, res: Response): Promise<Response> => {
    const vendas: Venda = await Venda.create({ ...req.body });
    return res.status(201).json(vendas);
  }
);

//Atualizar uma venda por ID
router.put(
  "/vendas/:idVenda",
  async (req: Request, res: Response): Promise<Response> => {
    const { idVenda } = req.params;
    await Venda.update({ ...req.body }, { where: { idVenda } });
    const updatedVendas: Venda | null = await Venda.findByPk(idVenda);
    return res.status(200).json(updatedVendas);
  }
);

//Excluir uma venda por ID
router.delete(
  "/vendas/:idVenda",
  async (req: Request, res: Response): Promise<Response> => {
    const { idVenda } = req.params;
    const deletedVendas: Venda | null = await Venda.findByPk(idVenda);
    await Venda.destroy({ where: { idVenda } });
    return res.status(200).json(deletedVendas);
  }
);

export default router;
