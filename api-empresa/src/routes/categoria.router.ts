import express, { Request, Response, Router } from "express";
import Categoria from "../models/categoria";

const router: Router = Router();

//Listar todas as categorias
router.get(
  "/categorias",
  async (req: Request, res: Response): Promise<Response> => {
    const allCategorias: Categoria[] = await Categoria.findAll();
    return res.status(200).json(allCategorias);
  }
);

//Lista uma categoria por ID
router.get(
  "/categorias/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const categoria: Categoria | null = await Categoria.findByPk(id);
    return res.status(200).json(categoria);
  }
);

//Criar uma nova categoria
router.post(
  "/categorias",
  async (req: Request, res: Response): Promise<Response> => {
    const categoria: Categoria = await Categoria.create({ ...req.body });
    return res.status(201).json(categoria);
  }
);

//Atualizar uma categoria por ID
router.put(
  "/categorias/:idCategoria",
  async (req: Request, res: Response): Promise<Response> => {
    const { idCategoria } = req.params;
    await Categoria.update({ ...req.body }, { where: { idCategoria } });
    const updatedCategorias: Categoria | null = await Categoria.findByPk(
      idCategoria
    );
    return res.status(200).json(updatedCategorias);
  }
);

//Excluir uma categoria por ID
router.delete(
  "/categorias/:idCategoria",
  async (req: Request, res: Response): Promise<Response> => {
    const { idCategoria } = req.params;
    const deletedCategoria: Categoria | null = await Categoria.findByPk(
      idCategoria
    );
    await Categoria.destroy({ where: { idCategoria } });
    return res.status(200).json(deletedCategoria);
  }
);

export default router;
