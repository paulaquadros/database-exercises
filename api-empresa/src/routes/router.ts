import { Router } from "express";
import { Request, Response } from "express";
import { Funcionarios } from "../models/funcionario";

const router: Router = Router();
router.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Sequelize Example " });
});

export { router };
