import { IsUUID } from 'class-validator';
import { CreateNoteInput } from './create-note.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateNoteInput extends PartialType(CreateNoteInput) {
  @IsUUID()
  @Field(() => ID)
  id: string;
}
