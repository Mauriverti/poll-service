import {Response} from 'express';
import PollRepository from '../../data/poll.repository';

/**
 * Business logic for Load Poll Use Case
 */
export default class LoadPollUseCase {
  /**
   * Load poll by it's id
   * @param { string } pollId id of poll that will be loaded
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async loadPollById(pollId: string, res: Response): Promise<Response> {
    return res.send(await PollRepository.loadPollById(pollId));
  }

  /**
   * Load poll by creator
   * @param { string } userId creator's identifier
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async loadPollByUser(userId: string, res: Response): Promise<Response> {
    return res.send(await PollRepository.loadPollByCreator(userId));
  }
}
