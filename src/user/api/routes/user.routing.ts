import { Router } from 'express';
import UserController from "../controllers/user.controller";

export default function UserRouting() {
  const route = Router();
  route.post('/api/user/merge', UserController.mergeUsers);
  return route;
}
