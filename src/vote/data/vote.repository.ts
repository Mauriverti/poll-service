import {deleteDoc, getDocs, query, QueryConstraint, setDoc, updateDoc, where} from 'firebase/firestore';
import {Vote} from '../domain/models/vote';
import {getCollection, getRef} from '../../shared/domain/utils/firestore.utils';
import {createFilter} from '../../shared/domain/utils/create-filters';

/**
 * Vote's Persistence layer
 */
export default class VoteRepository {
  /** table name */
  private static readonly collection = 'vote';

  /** collection of values */
  private static _collection = getCollection<Vote>(this.collection);

  /**
   * Values to modify votes
   * @param { string } id Vote's identifier
   * @return { DocumentReference<DocumentData> }
  */
  private static getValues = (id: string) => getRef(this.collection, id);

  /**
   * Load all votes that matches with given filters
   * @param { QueryConstraint[] } filters vote's filters
   * @return { Promise<Vote[]> }
   */
  static async loadVotes(filters: QueryConstraint[] = []): Promise<Vote[]> {
    const q = query(this._collection, ...filters);
    const querySnapshot = await getDocs(q);
    const votes: Vote[] = [];
    querySnapshot.forEach((doc) => votes.push(doc.data()));
    return votes;
  }

  /**
   * Load all votes by a given poll
   * @param { string } pollId poll id to load votes
   * @return { Promise<Vote[]> }
   */
  static async loadVotesByPoll(pollId: string): Promise<Vote[]> {
    const filter = where('pollId', '==', pollId);
    return this.loadVotes([filter]);
  }

  /**
   * Load all votes by given filters
   * @param { unknown } filter Object with key-value used to filter votes
   * @return { Promise<Vote[]> }
   */
  static async loadVotesByFilter(filter: unknown): Promise<Vote[]> {
    const filters = createFilter(filter);
    return this.loadVotes(filters);
  }

  /**
   * Load all votes by given voter
   * @param { string } userId voter id
   * @return { Promise<Vote[]> }
   */
  static async loadVotesByVoter(userId: string): Promise<Vote[]> {
    const filter = where('voter', '==', userId);
    return this.loadVotes([filter]);
  }

  /**
   * Migrates all votes from a user to another
   * @param { string } oldUserId User's id that will have the votes changed
   * @param { string } newUserId User's id that will receive the votes
   * @return { Promise<Vote[]> }
   */
  static async migrateVote(oldUserId: string, newUserId: string): Promise<Vote[]> {
    let votes = await this.loadVotesByVoter(oldUserId);
    votes = votes.map((vote) => {
      vote.voter = newUserId;
      return vote;
    });
    await Promise.all(votes.map((vote) => this.updateVote(vote)));
    return votes;
  }

  /**
   * Load a vote by given id
   * @param { string } voteId vote id
   * @return { Promise<Vote> }
   */
  static async loadById(voteId: string): Promise<Vote> {
    const filter = where('id', '==', voteId);
    const votes: Vote[] = await this.loadVotes([filter]);
    return votes[0];
  }

  /**
   * Saves a new Vote
   * @param { Vote } vote Vote values
   */
  static async createVote(vote: Vote): Promise<void> {
    await setDoc(this.getValues(vote.id), vote);
  }

  /**
   * Update vote values
   * @param { Vote } vote new vote values
   */
  static async updateVote(vote: Vote) {
    await updateDoc(this.getValues(vote.id), {...vote});
  }

  /**
   * Delete a vote
   * @param { Vote } voteId vote's id
   */
  static async deleteVote(voteId: string) {
    await deleteDoc(this.getValues(voteId));
  }

  /**
   * Delete all votes of a given poll
   * @param { string } pollId Poll's id
   */
  static async deleteByPollId(pollId: string) {
    const votes = await this.loadVotesByPoll(pollId);
    await Promise.all(votes.map((vote) => this.deleteVote(vote.id)));
  }
}
