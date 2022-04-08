import { Request, Response } from 'express';
import getUserFromHeader from '../../../shared/domain/utils/get-user-from-header';
import LoadVotesUseCase from '../../../vote/domain/use-cases/load-votes.use-case';
import CreatePollUseCase from '../../domain/use-cases/create-poll.use-case';
import DeletePollUseCase from '../../domain/use-cases/delete-poll.use-case';
import LoadPollUseCase from '../../domain/use-cases/load-poll.use-case';
import UpdatePollUseCase from '../../domain/use-cases/update-poll.use-case';

export default class PollController {
  static async list(req: Request, res: Response) {
    const userId = getUserFromHeader(req);
    return await LoadPollUseCase.loadPollByUser(userId, res);
  }

  static async loadById(req: Request, res: Response) {
    const pollId = req.params.id;
    return await LoadPollUseCase.loadPollById(pollId, res);
  }

  static async create(req: Request, res: Response) {
    const userId = getUserFromHeader(req);
    return await CreatePollUseCase.createPoll(req.body, userId, res);
  }

  static async update(req: Request, res: Response) {
    return await UpdatePollUseCase.updatePoll(req.body, res);
  }

  static async delete(req: Request, res: Response) {
    const pollId = req.params.id;
    return await DeletePollUseCase.deletePoll(pollId, res);
  }

  static async loadVotesByPoll(req: Request, res: Response) {
    const pollId = req.params.id;
    return await LoadVotesUseCase.loadVotesByPoll(pollId, res);
  }
}
