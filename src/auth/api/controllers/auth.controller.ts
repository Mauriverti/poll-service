import {Request, Response} from 'express';
import AuthService from '../../domain/service/auth.service';

/**
 * Entry point of Authentication API
 */
export default class AuthController {
  /**
   * Entry point to sign in user
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<void> }
   */
  static async signIn(req: Request, res: Response): Promise<void> {
    return await AuthService.signIn(req.body, res);
  }

  /**
   * Entry point to sign up user
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<void> }
   */
  static async signUp(req: Request, res: Response): Promise<void> {
    return await AuthService.signUp(req.body, res);
  }

  /**
   * Entry point to sign out user
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Response }
   */
  static signOut(req: Request, res: Response): Response {
    return res.json(AuthService.signOut());
  }
}
