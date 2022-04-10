import {Router} from 'express';
import PollController from '../controllers/poll.controller';

/**
 * routes for Poll
 * @return { Router }
 */
export default function PollRouting() {
  // eslint-disable-next-line new-cap
  const route = Router();
  route.get('/api/poll', PollController.list);
  route.get('/api/poll/:id', PollController.loadById);
  route.get('/api/poll/:id/votes', PollController.loadVotesByPoll);
  route.post('/api/poll', PollController.create);
  route.put('/api/poll', PollController.update);
  route.delete('/api/poll/:id', PollController.delete);
  return route;
}
