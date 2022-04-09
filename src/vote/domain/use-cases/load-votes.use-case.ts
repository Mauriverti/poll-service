import { Response } from 'express';
import VoteRepository from '../../data/vote.repository';

export default class LoadVotesUseCase {
  static async loadVotesByPoll(pollId: string, res: Response) {
    return res.send(await VoteRepository.loadVotesByPoll(pollId));
  }

  static async loadById(voteId: string, res: Response) {
    return res.send(await VoteRepository.loadById(voteId));
  }

  static async loadVotes(filters: unknown, res: Response) {
    return res.send(await VoteRepository.loadVotesByFilter(filters));
  }
}
