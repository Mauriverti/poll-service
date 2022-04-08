import { Response } from 'express';
import MigratePollUseCase from '../../../poll/domain/use-cases/migrate-poll.use-case';
import MigrateVoteUseCase from '../../../vote/domain/use-cases/migrate-vote.use-case';

export default class MergeUserUseCase {
  static async mergeUser(oldUserId: string, newUserId: string, res: Response) {
    await MigratePollUseCase.migratePolls(oldUserId, newUserId);
    await MigrateVoteUseCase.migrateVotes(oldUserId, newUserId);
    res.send({ status: 'successful'});
  }
}
