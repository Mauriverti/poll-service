import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

export default function AuthRouting() {
  const route = Router();
  route.post('/api/auth/signIn', AuthController.signIn);
  route.post('/api/auth/signUp', AuthController.signUp);
  route.post('/api/auth/signOut', AuthController.signOut);
  return route;
}
