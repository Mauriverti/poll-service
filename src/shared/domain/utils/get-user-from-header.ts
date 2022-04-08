import { Request } from 'express';
import { QueryConstraint, where } from 'firebase/firestore';

export default function getUserFromHeader(req: Request): string {
  return req.headers.authorization?.split(' ')[1] || '';
}

export function createUserFilter(req: Request, field: string = 'userId'): QueryConstraint {
  return where(field, '==', getUserFromHeader(req));
}
