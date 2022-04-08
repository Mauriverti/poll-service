import VoteRepository from '../../data/vote.repository';

export default class MigrateVoteUseCase {
  static async migrateVotes(oldUserId: string, newUserId: string) {
    await VoteRepository.migrateVote(oldUserId, newUserId);
  }
}
