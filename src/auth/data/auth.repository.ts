import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential} from 'firebase/auth';
import authDatabase from '../../../config/auth-database';
import ErrorResponse from '../../shared/domain/model/error-message';
import {User} from '../../user/domain/models/user';

/**
 * Authentication Persistence layer
 */
export default class AuthRepository {
  static authDB = authDatabase();

  /**
   * Sign up user at authentication server
   * @param { User } user user values
   * @return { Promise<UserCredential | ErrorResponse> }
   */
  static signUp(user: User): Promise<UserCredential | ErrorResponse> {
    const {email, password} = user;
    return createUserWithEmailAndPassword(this.authDB, email, password);
  }

  /**
   * Sign in user at authentication server
   * @param { User } user user values
   * @return { Promise<UserCredential | ErrorResponse> }
   */
  static signIn(user: User): Promise<UserCredential | ErrorResponse> {
    const {email, password} = user;
    return signInWithEmailAndPassword(this.authDB, email, password);
  }

  /**
   * Sign out user at authentication server
   * @return { Promise<void> }
   */
  static signOut(): Promise<void> {
    return signOut(this.authDB);
  }
}
