import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Owner)
    private ownersRepository: Repository<Owner>,
  ) {}

  async findOwnerById(id: string) {
    const user = await this.ownersRepository.findOneByOrFail({ id });
    return user;
  }

  async findOwnerByEmail(email: string) {
    const user = await this.ownersRepository.findOneByOrFail({ email });
    return user;
  }
}
