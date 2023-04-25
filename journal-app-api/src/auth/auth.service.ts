// Nest imports
import { Injectable, Logger, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// External imports
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

// Local imports
import { CreateUserDto, LoginDto, UserResponseDto } from './dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {
    this.logger.log(`${AuthService.name} created`);
  }

  login = async (loginDto: LoginDto) : Promise<UserResponseDto>  => {
    const user = await this.findOneByEmailOrError(loginDto.email);
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    delete user.password;
    if (!isPasswordValid) throw new BadRequestException('Invalid credentials');
    const response: UserResponseDto = {
      ...user,
    }
    return response;
  }


  register = async (createUserDto: CreateUserDto) : Promise<UserResponseDto> => {
    const userExists = await this.userRepository.findOneBy({ email: createUserDto.email });
    if (userExists) throw new BadRequestException('User already exists');
    const user = await this.userRepository.create({
      ...createUserDto,
    });
    user.password = await bcrypt.hash(user.password, 10);
    const savedUser = await this.userRepository.save(user);
    delete savedUser.password;
    const response: UserResponseDto = {
      ...savedUser,
    }
    return response;
  }

  findOneByEmailOrError = async (email: string) : Promise<UserEntity> => {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) throw new NotFoundException(`User with email ${email} not found`);
    return user;
  }
}
