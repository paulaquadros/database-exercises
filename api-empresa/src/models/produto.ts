import {
  Model,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Categoria from "./categoria";

@Table
class Produto extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  idProduto!: number;

  @Column({
    type: DataType.STRING,
  })
  descricao!: string;

  @Column({
    type: DataType.STRING,
  })
  valor!: string;

  @Column({
    type: DataType.INTEGER,
  })
  quantidade!: number;

  //Colunas createdAt e updatedAt são criadas automaticamente pelo Sequelize

  @ForeignKey(() => Categoria)
  @Column({
    type: DataType.INTEGER,
  })
  idCategoria!: number;
}

export default Produto;
