import { Request, Response } from 'express';
import AuthService from '../../domain/service/auth.service';

export default class AuthController {
  static async signIn(req: Request, res: Response) {
    return await AuthService.signIn(req.body, res);
  }

  static async signUp(req: Request, res: Response) {
    return await AuthService.signUp(req.body, res);
  }

  static signOut(req: Request, res: Response) {
    return res.json(AuthService.signOut());
  }
}
