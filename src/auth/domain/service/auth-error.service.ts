import { AuthErrorCodes } from 'firebase/auth';
import ErrorResponse from '../../../shared/domain/model/error-message';

export default class AuthErrorService {
  static parseCreateUserError(error: any): ErrorResponse {
    if (error && error.code) {
      switch(error.code) {
        case AuthErrorCodes.EMAIL_EXISTS: {
          return new ErrorResponse('Email already in use');
        }
        case AuthErrorCodes.INVALID_PASSWORD: {
          return new ErrorResponse('Wrong password');
        }
        default: {
          return new ErrorResponse(error.code);
        }
      }
    } else return new ErrorResponse(JSON.stringify(error));
  }
}
