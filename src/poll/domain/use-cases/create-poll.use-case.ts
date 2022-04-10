import {Response} from 'express';
import {Poll} from '../models/poll';
import {v4 as uuidv4} from 'uuid';
import PollRepository from '../../data/poll.repository';

/**
 * Business logic for Create Poll Use Case
 */
export default class CreatePollUseCase {
  /**
   * Saves a new Poll
   * @param { Poll } poll Poll values
   * @param { string } userId creator ID
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async createPoll(poll: Poll, userId: string, res: Response) {
    poll = this.preparePoll(poll, userId);
    return res.send(await PollRepository.createPoll(poll));
  }

  /**
   * Creates a new id and sets creator ID to poll
   * @param { Poll } poll Poll values
   * @param { string } userId Creator ID
   * @return { Promise<Response> }
   */
  static preparePoll(poll: Poll, userId: string): Poll {
    poll.createdBy = userId,
    poll.id = uuidv4();
    return poll;
  }
}
