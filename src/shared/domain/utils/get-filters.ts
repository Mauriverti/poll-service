import { Request } from 'express';
import { QueryConstraint, where } from 'firebase/firestore';

export default function getFilters(req: Request) {
  return parseFilter(req.query);
}

export function parseFilter(filter: any): QueryConstraint[] {
  return Object.entries(filter).map(([key, value]) => where(key, '==', value));
}
