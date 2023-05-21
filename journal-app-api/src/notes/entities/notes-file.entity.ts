import { ObjectType, Field, ID } from '@nestjs/graphql';
import { NoteEntity } from 'src/notes/entities/note.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'note-files' })
@ObjectType()
export class NotesFileEntity {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'File id' })
  id: string;

  @Column()
  @Field(() => String, { description: 'File title' })
  title: string;

  @Column()
  @Field(() => String, { description: 'File base64' })
  base64: string;

  @ManyToOne(() =>  NoteEntity, note => note.files, { nullable: false, lazy: true })
  @Field(() => NoteEntity, { nullable: false })
  note: NoteEntity;
}
