import PollRepository from '../../data/poll.repository';

export default class MigratePollUseCase {
  static async migratePolls(oldUserId: string, newUserId: string) {
    await PollRepository.migratePoll(oldUserId, newUserId);
  }
}
