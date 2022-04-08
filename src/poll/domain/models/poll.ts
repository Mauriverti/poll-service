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


// export class Poll {
//   constructor(
//   /** Poll's identifier */
//   public id: string,
//   /** Poll's title */
//   public title: string,
//   /** Poll's description */
//   public description: string,
//   /** Controls if a poll can be voted by a anonymous user */
//   public publicPoll: boolean,
//   /** It references the user that created the poll  */
//   public createdBy: string,
//   /** list of options that a user can vote */
//   public options: string[]
//   ) { }
// }
