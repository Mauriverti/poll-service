import {validate} from 'uuid';
import {Poll} from '../../models/poll';
import CreatePollUseCase from '../create-poll.use-case';

describe('CreatePollUseCase', () => {
  const defaultPoll: Poll = {
    id: '12',
    title: 'pollTitle',
    description: 'poll description',
    publicPoll: true,
    createdBy: '1234',
    options: ['op1', 'op2'],
  };
  const creatorId = 'creatorId';

  let poll: Poll;
  beforeEach(() => {
    poll = CreatePollUseCase.preparePoll(defaultPoll, creatorId);
  });

  it('should create a Poll with id typed as uuid', () => {
    expect(validate(poll.id)).toBe(true);
  });

  it('should set correctly userId as voter', () => {
    expect(poll.createdBy).toBe(creatorId);
  });
});
