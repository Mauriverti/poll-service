import {Request} from 'express';

/**
 * Extract user id by header params
 * @param { Request } req Request params
 * @return { string }
 */
export default function getUserFromHeader(req: Request): string {
  return req.headers.authorization?.split(' ')[1] || '';
}
