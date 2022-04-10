import {validate} from 'uuid';
import {Vote} from '../../models/vote';
import CreateVoteUseCase from '../create-vote.use-case';

describe('CreateVoteUseCase', () => {
  const defaultVote: Vote = {
    id: '12',
    voter: '12',
    pollId: '12',
    option: 'op1',
    pollTitle: 'question',
  };

  it('should create a Vote with id typed as uuid', () => {
    const vote = CreateVoteUseCase.prepareVote(defaultVote, 'voterID');
    expect(validate(vote.id)).toBe(true);
  });

  it('should set correctly userId as voter', () => {
    const voterId = 'voterID';
    const vote = CreateVoteUseCase.prepareVote(defaultVote, voterId);
    expect(vote.voter).toBe(voterId);
  });
});
