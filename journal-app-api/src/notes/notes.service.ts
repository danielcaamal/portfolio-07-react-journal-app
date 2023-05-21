import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteInput, NoteFileInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteEntity } from './entities/note.entity';
import { AuthService } from '../auth/auth.service';
import { Logger } from '@nestjs/common';
import { NotesFileEntity } from './entities/notes-file.entity';

@Injectable()
export class NotesService {
  private readonly logger = new Logger(NotesService.name);

  constructor(
    @InjectRepository(NoteEntity) private noteRepository: Repository<NoteEntity>,
    @InjectRepository(NotesFileEntity) private noteFileRepository: Repository<NotesFileEntity>,
    private authService: AuthService,
  ) {}

  findAll = async () : Promise<NoteEntity[]> => {
    return this.noteRepository.find();
  }

  findAllByUserId = async (id: string) : Promise<NoteEntity[]> => {
    return this.noteRepository.find({ 
      where: { user: { id } },
      order: { date: 'DESC' },
    });
  }

  findOneById = async (id: string) : Promise<NoteEntity> => {
    return this.noteRepository.findOneBy({ id });
  }

  create = async (createNoteInput: CreateNoteInput) : Promise<NoteEntity> => {
    const newNote = await this.noteRepository.create({ ...createNoteInput, user: { id: createNoteInput.userId } });
    await this.noteRepository.save(newNote);
    if (createNoteInput.files) await this.createFiles(createNoteInput.files, newNote);
    this.logger.log(`Note with id ${newNote.id} created`);
    return newNote;
  }

  update = async (id: string, updateNoteInput: UpdateNoteInput) : Promise<NoteEntity> => {
    const updatedNote = await this.noteRepository.preload({ id, ...updateNoteInput, date: new Date() });
    if (!updatedNote) throw new NotFoundException(`Note with id ${id} not found`);
    if (updateNoteInput.files) await this.createFiles(updateNoteInput.files, updatedNote);
    return this.noteRepository.save(updatedNote);
  }

  remove = async (id: string) : Promise<NoteEntity> => {
    const noteToRemove = await this.noteRepository.findOneBy({ id });
    if (!noteToRemove) throw new NotFoundException(`Note with id ${id} not found`); 
    return this.noteRepository.remove(noteToRemove);
  }

  createFiles = async (files: NoteFileInput[], note: NoteEntity) : Promise<NotesFileEntity[]> => {
    const newFiles = [];
    files.forEach(async (file) => {
      const newFile = await this.noteFileRepository.create({ ...file });
      newFile.note = note;
      newFiles.push(newFile);
      await this.noteFileRepository.save(newFile);
    });
    return newFiles;
  }

  deleteFile = async (id: string) : Promise<NotesFileEntity> => {
    const fileToRemove = await this.noteFileRepository.findOneBy({ id });
    if (!fileToRemove) throw new NotFoundException(`File with id ${id} not found`); 
    await this.noteFileRepository.remove(fileToRemove);
    return { ...fileToRemove, id };
  }
}
