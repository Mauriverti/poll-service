import {Response} from 'express';
import VoteRepository from '../../data/vote.repository';

/**
 * Business logic for Delete Vote Use Case
 */
export default class DeleteVoteUseCase {
  /**
   * deletes a vote
   * @param { string } voteId Vote that will be deleted
   * @param { Response } res Request response
   * @return { Promise<Request> }
   */
  static async deleteVote(voteId: string, res: Response) {
    return res.send(await VoteRepository.deleteVote(voteId));
  }
}
