import {Response} from 'express';
import VoteRepository from '../../data/vote.repository';

/**
 * Business logic for Load Vote Use Case
 */
export default class LoadVotesUseCase {
  /**
   * Load all votes of a poll
   * @param { string } pollId Poll that will have the votes loaded
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async loadVotesByPoll(pollId: string, res: Response): Promise<Response> {
    return res.send(await VoteRepository.loadVotesByPoll(pollId));
  }

  /**
   * Load votes by it's id
   * @param { string } voteId id of vote that will be loaded
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async loadById(voteId: string, res: Response): Promise<Response> {
    return res.send(await VoteRepository.loadById(voteId));
  }

  /**
   * Load votes by it's id
   * @param { unknown } filters Object with key-value used to filter votes
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async loadVotes(filters: unknown, res: Response): Promise<Response> {
    return res.send(await VoteRepository.loadVotesByFilter(filters));
  }
}
