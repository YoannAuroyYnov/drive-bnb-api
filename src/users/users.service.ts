import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user for ' + createUserDto.email;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findById(id: string) {
    const user = await this.usersRepository.findOneByOrFail({ id });
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOneByOrFail({ email });
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user for ` + updateUserDto.email;
  }

  async updateRefreshToken(id: string, hashedToken: string | null) {
    if (!hashedToken) return;
    await this.usersRepository.update(id, { currentHashedRefreshToken: hashedToken });
    return `This action updates refresh token for user #${id} with token ${hashedToken}`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
