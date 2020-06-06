import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50
    })
    name: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    lastname: string;
}