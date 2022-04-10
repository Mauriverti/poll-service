import {Request, Response} from 'express';
import getUserFromHeader from '../../../shared/domain/utils/get-user-from-header';
import CreateVoteUseCase from '../../domain/use-cases/create-vote.use-case';
import DeleteVoteUseCase from '../../domain/use-cases/delete-vote.use-case';
import LoadVotesUseCase from '../../domain/use-cases/load-votes.use-case';
import UpdateVoteUseCase from '../../domain/use-cases/update-vote.use-case';

/**
 * Entry point of Vote API
 */
export default class VoteController {
  /**
   * Entry point to list polls
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async list(req: Request, res: Response): Promise<Response> {
    return await LoadVotesUseCase.loadVotes(req.query, res);
  }

  /**
   * Entry point to load votes by id
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async loadById(req: Request, res: Response): Promise<Response> {
    const voteId = req.params.id;
    return await LoadVotesUseCase.loadById(voteId, res);
  }

  /**
   * Entry point to insert votes
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async vote(req: Request, res: Response): Promise<Response> {
    const userId = getUserFromHeader(req);
    return await CreateVoteUseCase.createVote(req.body, userId, res);
  }

  /**
   * Entry point to update a vote
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async update(req: Request, res: Response): Promise<Response> {
    return await UpdateVoteUseCase.updateVote(req.body, res);
  }

  /**
   * Entry point to delete a poll
   * @param { Request } req Request params
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async delete(req: Request, res: Response): Promise<Response> {
    const voteId = req.params.id;
    return await DeleteVoteUseCase.deleteVote(voteId, res);
  }
}
