import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export interface ArticleDTO {
  id?: string;
  slug?: string;
  title: string;
  description: string;
  body: string;
  createdAt?: Date;
  updatedAt?: Date;
  favorited?: boolean;
  favoritesCount?: number;
}

@Entity()
export class Article implements ArticleDTO {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  slug: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  title: string;

  @Column({ type: 'varchar', length: 50 })
  description: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  body: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({
    type: 'boolean',
    nullable: false,
    default: false,
  })
  favorited: boolean;

  @Column({
    type: 'integer',
    nullable: false,
    default: 0,
  })
  favoritesCount: number;
}
