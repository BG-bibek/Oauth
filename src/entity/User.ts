import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// import { IsEmail, IsNotEmpty, Length } from "class-validator";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    family_name: string
}
