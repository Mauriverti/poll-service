import {Router} from 'express';
import VoteController from '../controller/vote.controller';

/**
 * routes for Vote
 * @return { Router }
 */
export default function VoteRouting() {
  // eslint-disable-next-line new-cap
  const route = Router();
  route.get('/api/vote', VoteController.list);
  route.get('/api/vote/:id', VoteController.loadById);
  route.post('/api/vote', VoteController.vote);
  route.put('/api/vote', VoteController.update);
  route.delete('/api/vote/:id', VoteController.delete);
  return route;
}
