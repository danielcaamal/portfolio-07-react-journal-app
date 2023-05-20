import { ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { NotesService } from './notes.service';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { NoteEntity } from './entities/note.entity';

@Resolver(() => NoteEntity)
export class NotesResolver {
  constructor(private readonly notesService: NotesService) {}

  @Mutation(() => NoteEntity)
  createNote(@Args('createNoteInput') createNoteInput: CreateNoteInput): Promise<NoteEntity> {
    return this.notesService.create(createNoteInput);
  }

  @Query(() => [NoteEntity], { name: 'findAllNotes' })
  findAll(): Promise<NoteEntity[]> {
    return this.notesService.findAll();
  }

  @Query(() => [NoteEntity], { name: 'findAllNotesByUserId' })
  findAllByUserId(@Args('id', { type: () => String }, ParseUUIDPipe) id: string): Promise<NoteEntity[]> {
    return this.notesService.findAllByUserId(id);
  }

  @Query(() => NoteEntity, { name: 'findOneNoteById' })
  findOneById(@Args('id', { type: () => String }, ParseUUIDPipe) id: string): Promise<NoteEntity> {
    return this.notesService.findOneById(id);
  }

  @Mutation(() => NoteEntity)
  updateNote(@Args('updateNoteInput') updateNoteInput: UpdateNoteInput) {
    return this.notesService.update(updateNoteInput.id, updateNoteInput);
  }

  @Mutation(() => NoteEntity)
  removeNote(@Args('id', { type: () => String }, ParseUUIDPipe) id: string) {
    return this.notesService.remove(id);
  }
}
