import {Request, Response} from 'express';
import MergeUserUseCase from '../../domain/user-cases/merge-user.use-case';

/**
 * Entry point of User API
 */
export default class UserController {
  /**
   * Entry point for merge users
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<void> }
   */
  static async mergeUsers(req: Request, res: Response): Promise<void> {
    const {oldUserId, newUserId} = req.body;
    return await MergeUserUseCase.mergeUser(oldUserId, newUserId, res);
  }
}
