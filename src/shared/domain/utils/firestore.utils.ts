import {
  collection,
  doc,
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import database from '../../../../config/database';

const db = database();

export const converter = <T>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: T): DocumentData => ({...data}),
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): T => snapshot.data(options) as T,
});

export const getCollection = <T>(table: string) => collection(db, table).withConverter(converter<T>());
export const getRef = (table: string, id: string) => doc(db, table, id);
