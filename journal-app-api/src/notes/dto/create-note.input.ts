import { InputType, Field, ID } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateNoteInput {
  @IsString()
  @Field(() => String, { description: 'title', nullable: false })
  title: string;

  @IsString()
  @Field(() => String, { description: 'body', nullable: false })
  body: string;

  @IsArray()
  @IsOptional()
  @Field(() => [NoteFileInput], { description: 'files', nullable: true })
  files?: NoteFileInput[];

  @IsUUID()
  @Field(() => ID, { description: 'userId' })
  userId: string;
}

@InputType()
export class NoteFileInput {
  @IsString()
  @Field(() => String, { description: 'title', nullable: false })
  title: string;

  @IsString()
  @Field(() => String, { description: 'base64', nullable: false })
  base64: string;
}
