import { Response } from 'express';
import PollRepository from '../../data/poll.repository';
import { Poll } from '../models/poll';

export default class UpdatePollUseCase {
  static async updatePoll(poll: Poll, res: Response) {
    return res.send(await PollRepository.updatePoll(poll));
  }
}
