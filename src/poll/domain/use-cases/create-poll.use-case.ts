import { Response } from 'express';
import { Poll } from '../models/poll';
import { v4 as uuidv4 } from 'uuid';
import PollRepository from '../../data/poll.repository';

export default class CreatePollUseCase {
  static async createPoll(poll: Poll, userId: string, res: Response) {
    poll.createdBy = userId,
    poll.id = uuidv4();
    return res.send(await PollRepository.createPoll(poll));
  }
}
