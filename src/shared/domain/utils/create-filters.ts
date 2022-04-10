import {QueryConstraint, where} from 'firebase/firestore';

/**
 * Creates firebase filter array based on an Object's key, value
 * @param { any } filter Object with key-value used to create filter
 * @return { QueryConstraint[] }
 */
export function createFilter(filter: any): QueryConstraint[] {
  return Object.entries(filter).map(([key, value]) => where(key, '==', value));
}
