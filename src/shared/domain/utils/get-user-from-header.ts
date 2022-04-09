import { Request } from 'express';

export default function getUserFromHeader(req: Request): string {
  return req.headers.authorization?.split(' ')[1] || '';
}
