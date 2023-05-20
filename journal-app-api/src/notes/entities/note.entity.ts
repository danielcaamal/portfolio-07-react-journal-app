import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../auth/entities/user.entity';

@Entity({ name: 'notes' })
@ObjectType()
export class NoteEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  body: string;

  @Column()
  @Field(() => Date)
  date: Date = new Date();

  // FK
  @ManyToOne(() => UserEntity, user => user.notes, { nullable: false, lazy: true })
  @Index("note_user_id_index")
  @Field(() => UserEntity, { nullable: false })
  user: UserEntity;
}
