import {Response} from 'express';
import {User} from '../../../user/domain/models/user';
import AuthRepository from '../../data/auth.repository';
import AuthErrorService from './auth-error.service';

/**
 * Service for authentication
 */
export default class AuthService {
  /**
   * Sign in user at Authenticator server
   * @param { User} user User credentials
   * @param { Response } res Request response
   */
  static async signIn(user: User, res: Response) {
    try {
      res.send(await AuthRepository.signIn(user));
    } catch (e) {
      res.status(400).send(AuthErrorService.parseCreateUserError(e));
    }
  }

  /**
   * Sign up user at Authenticator server
   * @param { User} user user credentials
   * @param { Response } res request response
   */
  static async signUp(user: User, res: Response) {
    try {
      res.send(await AuthRepository.signUp(user));
    } catch (e) {
      res.status(400).send(AuthErrorService.parseCreateUserError(e));
    }
  }

  /**
   * Sign out user at Authenticator server
   * @return { Promise<void> }
   */
  static signOut(): Promise<void> {
    return AuthRepository.signOut();
  }
}
