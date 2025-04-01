import { Table, Model, Column, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript';
import { Optional } from 'sequelize';

interface EvaluadoAttributes {
  id: number;
  nombre: string;
  apellidos: string;
  curp: string;
  genero: string;
  graduado: string;
}

interface EvaluadoCreationAttributes extends Optional<EvaluadoAttributes, 'id'> {}

@Table({
  tableName: "Evaluados",
})
export class Evaluado extends Model<EvaluadoAttributes, EvaluadoCreationAttributes> {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column
  nombre!: string;

  @Column
  apellidos!: string;

  @Column
  curp!: string;

  @Column
  genero!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  graduado!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}