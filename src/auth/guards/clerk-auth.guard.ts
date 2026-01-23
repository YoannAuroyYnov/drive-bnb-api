import { Request } from 'express';
import { clerkClient } from '@clerk/clerk-sdk-node';
import { Reflector } from '@nestjs/core';
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token && isPublic) {
      return true;
    }

    if (!token) {
      throw new UnauthorizedException('Token manquant');
    }

    try {
      // Vérification du token avec Clerk
      const sessionClaims = await clerkClient.verifyToken(token, {
        secretKey: process.env.CLERK_SECRET_KEY,
      });

      // Attacher les informations utilisateur à la requête
      request.user = {
        userId: sessionClaims.sub,
        sessionId: sessionClaims.sid,
        ...sessionClaims,
      };

      return true;
    } catch (error) {
      if (error instanceof Error && error.message.includes('Token is expired'))
        throw new UnauthorizedException('Token expiré');

      throw new UnauthorizedException('Token invalide');
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
