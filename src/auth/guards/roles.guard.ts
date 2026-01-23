import { Request } from 'express';
import { clerkClient } from '@clerk/clerk-sdk-node';
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

export type ClerkUser = {
  userId: string;
  sessionId: string;
  [key: string]: any;
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as ClerkUser | undefined;

    if (!user || !user.userId) {
      throw new ForbiddenException('User not authenticated');
    }

    const clerkUser = await clerkClient.users.getUser(user.userId);
    const userRoles = (clerkUser.publicMetadata?.roles as string[]) || [];

    const hasRole = requiredRoles.some((role) => userRoles.includes(role));

    if (!hasRole) {
      throw new ForbiddenException('Accès refusé : rôle insuffisant');
    }

    return true;
  }
}
