import {
  Model,
  Column,
  IsEmail,
  DataType,
  PrimaryKey,
  Sequelize,
  Table,
  IsDate,
} from "sequelize-typescript";

@Table
class Cliente extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  idCliente!: number;

  @Column({
    type: DataType.STRING,
  })
  nome!: string;

  @Column({
    type: DataType.STRING,
  })
  endereco!: string;

  @IsEmail
  @Column({
    type: DataType.STRING,
  })
  email!: string;

  //Colunas createdAt e updatedAt são criadas automaticamente pelo Sequelize
}

export default Cliente;
