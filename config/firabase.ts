import { initializeApp } from 'firebase/app';
import dbConfig from './poll-db.config.json';

export default function FirebaseConfig() {
  return initializeApp(dbConfig);
}
