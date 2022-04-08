import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import AuthDatabase from '../../../config/auth-database';
import { User } from '../../user/domain/models/user';

export default class AuthRepository {
  static authDB = AuthDatabase();

  static signUp(user: User): Promise<UserCredential> {
    const { email, password } = user;
    return createUserWithEmailAndPassword(this.authDB, email, password);
  }

  static signIn(user: User): Promise<UserCredential> {
    const { email, password } = user;
    return signInWithEmailAndPassword(this.authDB, email, password);
  }

  static signOut(): Promise<void> {
    return signOut(this.authDB);
  }
}
