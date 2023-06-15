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
  @IsUUID("all")
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
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
