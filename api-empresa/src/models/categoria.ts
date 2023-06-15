import {
  DataType,
  IsUUID,
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import Produto from "./produto";

@Table
class Categoria extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  idCategoria!: number;

  @Column({
    type: DataType.STRING,
  })
  descricao!: string;

  @ForeignKey(() => Produto)
  idProduto!: number;
}

export default Categoria;
