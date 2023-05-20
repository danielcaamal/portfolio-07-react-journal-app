import { Field, ID, ObjectType } from '@nestjs/graphql';
import { NoteEntity } from 'src/notes/entities/note.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
@ObjectType()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string;

    @Column({ unique: true, nullable: false })
    @Field(() => String)
    email: string;

    @Column({ nullable: false, length: 255 })
    password: string;

    @Column({ unique: false, nullable: false, length: 25 })
    @Field(() => String)
    username: string;

    @Column({ nullable: false, length: 50 })
    @Field(() => String)
    displayName: string;

    @Column({ nullable: true, length: 255 })
    @Field(() => String, { nullable: true })
    photoURL?: string;

    @OneToMany(() => NoteEntity, note => note.user, { lazy: true })
    // @Field(() => [NoteEntity])
    notes: NoteEntity[];
}
