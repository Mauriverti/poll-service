import {Response} from 'express';
import VoteRepository from '../../../vote/data/vote.repository';
import PollRepository from '../../data/poll.repository';

/**
 * Business logic for Delete Poll Use Case
 */
export default class DeletePollUseCase {
  /**
   * deletes a poll
   * @param { string } pollId Poll that will be deleted
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async deletePoll(pollId: string, res: Response): Promise<Response> {
    VoteRepository.deleteByPollId(pollId);
    return res.send(await PollRepository.deletePoll(pollId));
  }
}
