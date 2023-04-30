import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false, length: 255 })
    password: string;

    @Column({ unique: false, nullable: false, length: 25 })
    username: string;

    @Column({ nullable: false, length: 50 })
    displayName: string;

    @Column({ nullable: true, length: 255 })
    photoURL?: string;
}
