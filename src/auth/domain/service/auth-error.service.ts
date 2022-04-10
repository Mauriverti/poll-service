import {AuthErrorCodes} from 'firebase/auth';
import ErrorResponse from '../../../shared/domain/model/error-message';

/**
 * Service to handle error messages
 */
export default class AuthErrorService {
  /**
   * Convert errors into default Error type know by frontend
   * @param { any } error error catched
   * @return { ErrorResponse }
   */
  static parseCreateUserError(error: any): ErrorResponse {
    if (error && error.code) {
      switch (error.code) {
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
