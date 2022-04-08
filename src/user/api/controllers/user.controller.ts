import { Request, Response } from 'express';
import MergeUserUseCase from '../../domain/user-cases/merge-user.use-case';

export default class UserController {
  static async mergeUsers(req: Request, res: Response) {
    const { oldUserId, newUserId } = req.body;
    return await MergeUserUseCase.mergeUser(oldUserId, newUserId, res);
  }
}
