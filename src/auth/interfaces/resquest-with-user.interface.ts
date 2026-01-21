export interface RequestWithUser extends Request {
  user: {
    userId: string;
    email: string;
    roles: string[];
    refreshToken?: string; // Optional, present in refresh token requests only
  };
}
