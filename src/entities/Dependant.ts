import {  Client } from "./Client";
import { Entity, Column } from "typeorm";

@Entity('dependant')
export class Dependant extends Client {
    
    @Column()
    salary: number;
}
