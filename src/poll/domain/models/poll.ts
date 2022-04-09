export interface Poll {
  /** Poll's identifier */
  id: string,
  /** Poll's title */
  title: string,
  /** Poll's description */
  description: string,
  /** Controls if a poll can be voted by a anonymous user */
  publicPoll: boolean,
  /** It references the user that created the poll  */
  createdBy: string,
  /** list of options that a user can vote */
  options: string[]
}
