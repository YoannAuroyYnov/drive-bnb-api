import { SetMetadata } from '@nestjs/common';
import { ownerRoles } from 'src/users/entities/owner.entity';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: ownerRoles[]) => SetMetadata(ROLES_KEY, roles);
