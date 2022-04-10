import {Response} from 'express';
import PollRepository from '../../data/poll.repository';
import {Poll} from '../models/poll';

/**
 * Business logic for update Poll Use Case
 */
export default class UpdatePollUseCase {
  /**
   * Update poll values
   * @param { Poll } poll poll that will be updated
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async updatePoll(poll: Poll, res: Response): Promise<Response> {
    return res.send(await PollRepository.updatePoll(poll));
  }
}
