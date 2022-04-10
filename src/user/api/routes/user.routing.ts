import {Router} from 'express';
import UserController from '../controllers/user.controller';

/**
 * routes for User
 * @return { Router }
 */
export default function UserRouting() {
  // eslint-disable-next-line new-cap
  const route = Router();
  route.post('/api/user/merge', UserController.mergeUsers);
  return route;
}
