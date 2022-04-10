import {AuthError, AuthErrorCodes} from 'firebase/auth';
import AuthErrorService from '../auth-error.service';

describe('AuthErrorService', () => {
  describe('with firebase error', () => {
    const createError = (errorCode: string) => {
      const error = {
        code: errorCode,
      } as AuthError;
      return error;
    };
    let error;

    it('should return a custom message to email already in use error', () => {
      error = createError(AuthErrorCodes.EMAIL_EXISTS);
      const message = AuthErrorService.parseCreateUserError(error);
      expect(message.message).toBe('Email already in use');
    });

    it('should return a custom message to email already in use error', () => {
      error = createError(AuthErrorCodes.INVALID_PASSWORD);
      const message = AuthErrorService.parseCreateUserError(error);
      expect(message.message).toBe('Wrong password');
    });

    it('should return the error message to an unknown error', () => {
      error = createError(AuthErrorCodes.INTERNAL_ERROR);
      const message = AuthErrorService.parseCreateUserError(error);
      expect(message.message).toBe(AuthErrorCodes.INTERNAL_ERROR);
    });
  });

  describe('with unhandled error', () => {
    const error = {
      message: 'oops',
    };

    it('should return the the unhandled error', () => {
      const message = AuthErrorService.parseCreateUserError(error);
      expect(message.message).toBe(JSON.stringify(error));
    });
  });
});
