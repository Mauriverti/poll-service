export enum ErrorType {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

/**
 * Error message default object
 */
export default class ErrorResponse {
  /**
   * @constructor
   * @param { string } message error message
   * @param { ErrorType } type type of error
   */
  constructor(
    public message: string,
    public type = ErrorType.ERROR,
  ) { }
}
