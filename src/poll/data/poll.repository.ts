import {deleteDoc, getDocs, query, QueryConstraint, setDoc, updateDoc, where} from 'firebase/firestore';
import {getCollection, getRef} from '../../shared/domain/utils/firestore.utils';
import {Poll} from '../domain/models/poll';

/**
 * Poll's Persistence layer
 */
export default class PollRepository {
  /** table name */
  private static readonly collection = 'poll';

  /**
   * Values to modify polls
   * @param { string } id Poll's identifier
   * @return { DocumentReference<DocumentData> }
  */
  private static getValues = (id: string) => getRef(this.collection, id);

  /**
   * Load all polls that matches with given filters
   * @param { QueryConstraint[] } filters poll's filters
   * @return { Promise<Poll[]> }
   */
  static async loadPoll(filters: QueryConstraint[]): Promise<Poll[]> {
    const q = query(getCollection<Poll>(this.collection), ...filters);
    const querySnapshot = await getDocs(q);
    const polls: Poll[] = [];
    querySnapshot.forEach((doc) => polls.push(doc.data()));
    return polls;
  }

  /**
   * Load all polls by given creator
   * @param { string } creatorId creator id
   * @return { Promise<Vote[]> }
   */
  static async loadPollByCreator(creatorId: string) {
    const filter = where('createdBy', '==', creatorId);
    return this.loadPoll([filter]);
  }

  /**
   * Load a poll by given id
   * @param { string } pollId poll id
   * @return { Promise<Poll> }
   */
  static async loadPollById(pollId: string): Promise<Poll> {
    const filter = where('id', '==', pollId);
    const poll = await this.loadPoll([filter]);
    return poll[0];
  }

  /**
   * Migrates all polls from a user to another
   * @param { string } oldUserId User's id that will have the polls changed
   * @param { string } newUserId User's id that will receive the polls
   * @return { Promise<Poll[]> }
   */
  static async migratePoll(oldUserId: string, newUserId: string): Promise<Poll[]> {
    let polls = await this.loadPollByCreator(oldUserId);
    polls = polls.map((poll) => {
      poll.createdBy = newUserId;
      return poll;
    });
    await Promise.all(polls.map((poll) => this.updatePoll(poll)));
    return polls;
  }

  /**
   * Saves a new Poll
   * @param { Poll } poll Poll values
   */
  static async createPoll(poll: Poll) {
    await setDoc(this.getValues(poll.id), poll);
  }

  /**
   * Update poll values
   * @param { Poll } poll new poll values
   */
  static async updatePoll(poll: Poll) {
    await updateDoc(this.getValues(poll.id), {...poll});
  }

  /**
   * Delete a poll
   * @param { Poll } pollId poll's id
   */
  static async deletePoll(pollId: string) {
    await deleteDoc(this.getValues(pollId));
  }
}
