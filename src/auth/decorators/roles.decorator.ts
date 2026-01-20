import { SetMetadata } from '@nestjs/common';
import { userRoles } from 'src/users/entities/user.entity';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: userRoles[]) => SetMetadata(ROLES_KEY, roles);
