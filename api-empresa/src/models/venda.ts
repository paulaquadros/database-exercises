import {
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  DataType,
  Table,
} from "sequelize-typescript";
import Cliente from "./cliente";
import Produto from "./produto";

@Table
class Venda extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  idVenda!: number;

  @ForeignKey(() => Cliente)
  @Column({
    type: DataType.INTEGER,
  })
  idCliente!: number;

  @ForeignKey(() => Produto)
  @Column({
    type: DataType.INTEGER,
  })
  idProduto!: number;
}

export default Venda;
