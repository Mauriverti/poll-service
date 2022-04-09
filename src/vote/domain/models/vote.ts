export interface Vote {
  /** Vote's identifier */
  id: string,
  /** It references the user that voted */
  voter: string,
  /** It references which poll belongs this vote  */
  pollId: string,
  /** It references the option that user selected on poll */
  option: string, // this should be the index, but it's like this to easily show the option on voted list component
  /** poll's title */
  pollTitle: string, // this is duplicated here to easily show the title on voted list component
}
