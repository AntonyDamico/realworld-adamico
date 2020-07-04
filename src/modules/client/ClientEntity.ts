import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface ClientDTO {
  id?: string;
  name: string;
  lastname: string;
}
@Entity()
export class Client implements ClientDTO {
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
