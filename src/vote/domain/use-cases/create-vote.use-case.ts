import {Response} from 'express';
import {v4 as uuidv4} from 'uuid';
import {Vote} from '../models/vote';
import VoteRepository from '../../data/vote.repository';

/**
 * Business logic for Create Vote Use Case
 */
export default class CreateVoteUseCase {
  /**
   * Saves a new Vote
   * @param { Vote } vote Vote values
   * @param { string } userId Voter ID
   * @param { Response } res Request response
   * @return { Promise<Response> }
   */
  static async createVote(vote: Vote, userId: string, res: Response) {
    vote = this.prepareVote(vote, userId);
    return res.send(await VoteRepository.createVote(vote));
  }

  /**
   * Creates a new id and sets voter ID to vote
   * @param { Vote } vote Vote values
   * @param { string } userId Voter ID
   * @return { Promise<Response> }
   */
  static prepareVote(vote: Vote, userId: string): Vote {
    vote.voter = userId,
    vote.id = uuidv4();
    return vote;
  }
}
