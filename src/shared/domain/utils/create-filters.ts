import { QueryConstraint, where } from 'firebase/firestore';

export function createFilter(filter: any): QueryConstraint[] {
  return Object.entries(filter).map(([key, value]) => where(key, '==', value));
}
