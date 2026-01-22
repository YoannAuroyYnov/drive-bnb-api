import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findById(id: string) {
    const user = await this.usersRepository.findOneByOrFail({ id });
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOneByOrFail({ email });
    return user;
  }

  async updateRefreshToken(id: string, hashedToken: string | null) {
    if (!hashedToken) return;
    return await this.usersRepository.update(id, { currentHashedRefreshToken: hashedToken });
  }
}
