import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    title: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    artist: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    tracklist: String[]
}