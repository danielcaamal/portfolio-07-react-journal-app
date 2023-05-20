import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateNoteInput {
  @IsString()
  @Field(() => String, { description: 'title', nullable: false })
  title: string;

  @IsString()
  @Field(() => String, { description: 'body', nullable: false })
  body: string;

  @IsUUID()
  @Field(() => ID, { description: 'userId' })
  userId: string;
}
