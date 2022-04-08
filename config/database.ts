import { getFirestore } from 'firebase/firestore';
import FirebaseConfig from './firabase';

export default function Database() {
  return getFirestore(FirebaseConfig());
}
