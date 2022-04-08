import { Request, Response } from 'express';
import getUserFromHeader from '../../../shared/domain/utils/get-user-from-header';
import CreateVoteUseCase from '../../domain/use-cases/create-vote.use-case';
import DeleteVoteUseCase from '../../domain/use-cases/delete-vote.use-case';
import LoadVotesUseCase from '../../domain/use-cases/load-votes.use-case';
import UpdateVoteUseCase from '../../domain/use-cases/update-vote.use-case';

export default class VoteController {
  static async list(req: Request, res: Response) {
    return await LoadVotesUseCase.loadVotes(req.query, res);
  }

  static async loadById(req: Request, res: Response) {
    const voteId = req.params.id;
    return await LoadVotesUseCase.loadById(voteId, res);
  }

  static async vote(req: Request, res: Response) {
    const userId = getUserFromHeader(req);
    return await CreateVoteUseCase.createVote(req.body, userId, res);
  }

  static async update(req: Request, res: Response) {
    return await UpdateVoteUseCase.updateVote(req.body, res);
  }

  static async delete(req: Request, res: Response) {
    const voteId = req.params.id;
    return await DeleteVoteUseCase.deleteVote(voteId, res);
  }
}
