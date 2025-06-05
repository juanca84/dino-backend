import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Dinosaur {
  @PrimaryGeneratedColumn()
  occurrence_no!: number;

  @Column()
  name!: string;

  @Column()
  diet!: string;

  @Column()
  type!: string;

  @Column("float")
  length_m!: number;

  @Column("float")
  max_ma!: number;

  @Column("float")
  min_ma!: number;

  @Column()
  region!: string;

  @Column("float")
  lng!: number;

  @Column("float")
  lat!: number;

  @Column()
  class!: string;

  @Column()
  family!: string;
}