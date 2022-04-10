import PollRepository from '../../data/poll.repository';

/**
 * Business logic for Migrate Polls Use Case
 */
export default class MigratePollUseCase {
  /**
   * Migrates all polls from a user to another
   * @param { string } oldUserId User's id that will have the polls changed
   * @param { string } newUserId User's id that will receive the polls
   */
  static async migratePolls(oldUserId: string, newUserId: string) {
    await PollRepository.migratePoll(oldUserId, newUserId);
  }
}
