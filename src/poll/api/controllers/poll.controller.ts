import {Request, Response} from 'express';
import getUserFromHeader from '../../../shared/domain/utils/get-user-from-header';
import LoadVotesUseCase from '../../../vote/domain/use-cases/load-votes.use-case';
import CreatePollUseCase from '../../domain/use-cases/create-poll.use-case';
import DeletePollUseCase from '../../domain/use-cases/delete-poll.use-case';
import LoadPollUseCase from '../../domain/use-cases/load-poll.use-case';
import UpdatePollUseCase from '../../domain/use-cases/update-poll.use-case';

/**
 * Entry point of Poll API
 */
export default class PollController {
  /**
   * List All the polls from a specific user
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Poll[]> }
   */
  static async list(req: Request, res: Response) {
    const userId = getUserFromHeader(req);
    return await LoadPollUseCase.loadPollByUser(userId, res);
  }

  /**
   * Load poll by given Id
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async loadById(req: Request, res: Response): Promise<Response> {
    const pollId = req.params.id;
    return await LoadPollUseCase.loadPollById(pollId, res);
  }

  /**
   * Create a new Poll
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async create(req: Request, res: Response): Promise<Response> {
    const userId = getUserFromHeader(req);
    return await CreatePollUseCase.createPoll(req.body, userId, res);
  }

  /**
   * Update Poll values
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async update(req: Request, res: Response): Promise<Response> {
    return await UpdatePollUseCase.updatePoll(req.body, res);
  }

  /**
   * Deletes a given poll
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async delete(req: Request, res: Response): Promise<Response> {
    const pollId = req.params.id;
    return await DeletePollUseCase.deletePoll(pollId, res);
  }

  /**
   * Loads all votes for a given poll
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async loadVotesByPoll(req: Request, res: Response): Promise<Response> {
    const pollId = req.params.id;
    return await LoadVotesUseCase.loadVotesByPoll(pollId, res);
  }
}
