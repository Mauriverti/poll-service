import VoteRepository from '../../data/vote.repository';

/**
 * Business logic for Migrate Vote Use Case
 */
export default class MigrateVoteUseCase {
  /**
   * Migrates all votes from a user to another
   * @param { string } oldUserId User's id that will have the votes changed
   * @param { string } newUserId User's id that will receive the votes
   */
  static async migrateVotes(oldUserId: string, newUserId: string) {
    await VoteRepository.migrateVote(oldUserId, newUserId);
  }
}
