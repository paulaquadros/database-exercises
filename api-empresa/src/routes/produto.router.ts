import express, { Request, Response, Router } from "express";
import Produto from "../models/produto";

const router: Router = Router();

//Listar todos os produtos
router.get(
  "/produtos",
  async (req: Request, res: Response): Promise<Response> => {
    const allProdutos: Produto[] = await Produto.findAll();
    return res.status(200).json(allProdutos);
  }
);

//Listar um produto por ID
router.get(
  "/produtos/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const produto: Produto | null = await Produto.findByPk(id);
    return res.status(200).json(produto);
  }
);

//Criar um novo produto
router.post(
  "/produtos",
  async (req: Request, res: Response): Promise<Response> => {
    const produto: Produto = await Produto.create({ ...req.body });
    return res.status(201).json(produto);
  }
);

//Atualizar um produto por ID
router.put(
  "/produtos/:idProduto",
  async (req: Request, res: Response): Promise<Response> => {
    const { idProduto } = req.params;
    await Produto.update({ ...req.body }, { where: { idProduto } });
    const updatedProdutos: Produto | null = await Produto.findByPk(idProduto);
    return res.status(200).json(updatedProdutos);
  }
);

//Excluir um produto por ID
router.delete(
  "/produtos/:idProduto",
  async (req: Request, res: Response): Promise<Response> => {
    const { idProduto } = req.params;
    const deletedProdutos: Produto | null = await Produto.findByPk(idProduto);
    await Produto.destroy({ where: { idProduto } });
    return res.status(200).json(deletedProdutos);
  }
);

export default router;
