export enum ErrorType {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

export default class ErrorResponse {
  constructor(public message: string, public type = ErrorType.ERROR) { }
}
