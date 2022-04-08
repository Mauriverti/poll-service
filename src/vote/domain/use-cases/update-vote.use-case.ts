import { Response } from 'express';
import { Vote } from '../../../poll/domain/models/vote';
import VoteRepository from '../../data/vote.repository';

export default class UpdateVoteUseCase {
  static async updateVote(vote: Vote, res: Response) {
    return res.send(await VoteRepository.updateVote(vote));
  }
}
