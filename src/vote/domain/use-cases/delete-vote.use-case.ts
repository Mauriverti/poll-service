import { Response } from 'express';
import VoteRepository from '../../data/vote.repository';

export default class DeleteVoteUseCase {
  static async deleteVote(voteId: string, res: Response) {
    return res.send(await VoteRepository.deleteVote(voteId));
  }
}
