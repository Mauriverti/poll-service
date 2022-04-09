import { Response } from 'express';
import { User } from '../../../user/domain/models/user';
import AuthRepository from '../../data/auth.repository';
import AuthErrorService from './auth-error.service';

export default class AuthService {
  static async signIn(user: User, res: Response) {
    try {
      res.send(await AuthRepository.signIn(user));
    } catch(e) {
      console.log('error', JSON.stringify(e));
      res.status(400).send(AuthErrorService.parseCreateUserError(e));
    }
  }

  static async signUp(user: User, res: Response) {
    try {
      res.send(await AuthRepository.signUp(user));
    } catch(e) {
      console.log('error', JSON.stringify(e));
      res.status(400).send(AuthErrorService.parseCreateUserError(e));
    }
  }

  static signOut() {
    return AuthRepository.signOut();
  }
}
