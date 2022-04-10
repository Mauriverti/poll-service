import {Response} from 'express';
import MigratePollUseCase from '../../../poll/domain/use-cases/migrate-poll.use-case';
import MigrateVoteUseCase from '../../../vote/domain/use-cases/migrate-vote.use-case';

/**
 * Business logic to merge users Use Case
 */
export default class MergeUserUseCase {
  /**
   * Migrates all polls and votes from a user to another
   * @param { string } oldUserId User's id that will have the votes changed
   * @param { string } newUserId User's id that will receive the votes
   * @param { Response } res Request response
   */
  static async mergeUser(oldUserId: string, newUserId: string, res: Response): Promise<void> {
    await MigratePollUseCase.migratePolls(oldUserId, newUserId);
    await MigrateVoteUseCase.migrateVotes(oldUserId, newUserId);
    res.send({status: 'successful'});
  }
}
