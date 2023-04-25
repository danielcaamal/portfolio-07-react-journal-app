import { IsEmail, IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    @Length(8, 20)
    password: string;

    @IsString()
    @MaxLength(25)
    username: string;

    @IsString()
    @MaxLength(50)
    displayName: string;

    @IsString()
    @MaxLength(255)
    @IsOptional()
    photoURL?: string;
}
