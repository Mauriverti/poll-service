import { getAuth } from 'firebase/auth';
import FirebaseConfig from './firabase';

export default function AuthDatabase() {
  return getAuth(FirebaseConfig());
}
