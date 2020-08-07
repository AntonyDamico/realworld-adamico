import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import IClientDTO from './interfaces/IClientDTO';
@Entity()
export default class Client implements IClientDTO {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  lastname: string;
}
