import { Response } from 'express';
import PollRepository from '../../data/poll.repository';

export default class LoadPollUseCase {
  static async loadPollById(pollId: string, res: Response) {
    return res.send(await PollRepository.loadPollById(pollId));
  }

  static async loadPollByUser(userId: string, res: Response) {
    return res.send(await PollRepository.loadPollByCreator(userId));
  }
}
