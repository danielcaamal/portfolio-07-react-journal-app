import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesResolver } from './notes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './entities/note.entity';
import { AuthModule } from 'src/auth/auth.module';
import { NotesFileEntity } from './entities/notes-file.entity';

@Module({
  providers: [NotesResolver, NotesService],
  imports: [
    TypeOrmModule.forFeature([
      NoteEntity,
      NotesFileEntity
    ]),
    AuthModule
  ]
})
export class NotesModule {}
