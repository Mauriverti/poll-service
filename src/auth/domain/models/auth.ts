/**
 * Authentication values
 */
export default class Auth {
  /**
   * @constructor
   * @param { string } id Session identifier
   * @param { boolean } anonymous identifies if a session is for a known or an anonymous user
   */
  constructor(
    /** user identifier */
    public id: string,
    /** identify if a user is logged in or not */
    public anonymous = true,
  ) { }
}
