import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Vote } from '../../../poll/domain/models/vote';
import VoteRepository from '../../data/vote.repository';

export default class CreateVoteUseCase {
  static async createVote(vote: Vote, userId: string, res: Response) {
    vote.voter = userId,
    vote.id = uuidv4();
    return res.send(await VoteRepository.createVote(vote));
  }
}
