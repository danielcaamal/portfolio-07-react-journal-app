import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesResolver } from './notes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './entities/note.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [NotesResolver, NotesService],
  imports: [
    TypeOrmModule.forFeature([
      NoteEntity
    ]),
    AuthModule
  ]
})
export class NotesModule {}
