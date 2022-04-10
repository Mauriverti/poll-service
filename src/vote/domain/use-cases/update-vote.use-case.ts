import {Response} from 'express';
import {Vote} from '../models/vote';
import VoteRepository from '../../data/vote.repository';

/**
 * Business logic for Update Vote Use Case
 */
export default class UpdateVoteUseCase {
  /**
   * Update vote values
   * @param { Vote } vote vote that will be updated
   * @param { Request} res Request response
   * @return { Promise<void> }
   */
  static async updateVote(vote: Vote, res: Response): Promise<Response> {
    return res.send(await VoteRepository.updateVote(vote));
  }
}
