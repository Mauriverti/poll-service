import { Response } from 'express';
import VoteRepository from '../../../vote/data/vote.repository';
import PollRepository from '../../data/poll.repository';

export default class DeletePollUseCase {
  static async deletePoll(pollId: string, res: Response) {
    VoteRepository.deleteByPollId(pollId);
    return res.send(await PollRepository.deletePoll(pollId));
  }
}
