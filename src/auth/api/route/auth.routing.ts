import {Router} from 'express';
import AuthController from '../controllers/auth.controller';

/**
 * routes for Authentication
 * @return { Router }
 */
export default function AuthRouting() {
  // eslint-disable-next-line new-cap
  const route = Router();
  route.post('/api/auth/signIn', AuthController.signIn);
  route.post('/api/auth/signUp', AuthController.signUp);
  route.post('/api/auth/signOut', AuthController.signOut);
  return route;
}
