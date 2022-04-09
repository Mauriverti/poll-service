import { Request } from 'express';
import getUserFromHeader from '../get-user-from-header';

describe('getUserFromHeader', () => {

  const createFakeRequest = (authorization: string = '') => {
    const fakeReq= {
      headers: {
        authorization: `Bearer ${authorization}`
      }
    } as Request
    return fakeReq;
  }


  describe('with authorization', () => {
    let fakeReq: Request;
    const authCode = 'authorizationCode';
    beforeEach(() => {
      fakeReq = createFakeRequest(authCode);
    });

    it('should extract auth value', () => {
      const auth = getUserFromHeader(fakeReq);
      expect(auth).toBe(authCode);
    })
  });

  describe('without authorization', () => {
    let fakeReq: Request;

    beforeEach(() => {
      fakeReq = createFakeRequest('');
    });

    it('should extract auth value', () => {
      const auth = getUserFromHeader(fakeReq);
      expect(auth).toBe('');
    })
  });
});
