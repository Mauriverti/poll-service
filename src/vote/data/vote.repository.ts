import { deleteDoc, getDocs, query, QueryConstraint, setDoc, updateDoc, where } from 'firebase/firestore';
import { Vote } from '../domain/models/vote';
import { getCollection, getRef } from '../../shared/domain/utils/firestore.utils';
import { createFilter } from '../../shared/domain/utils/create-filters';

export default class VoteRepository {
  private static readonly collection = 'vote';
  private static _collection = getCollection<Vote>(this.collection);
  private static getValues = (id: string) => getRef(this.collection, id);

  static async loadVotes(filters: QueryConstraint[] = []) {
    const q = query(this._collection, ...filters);
    const querySnapshot = await getDocs(q);
    const votes: Vote[] = [];
    querySnapshot.forEach(doc => votes.push(doc.data()));
    return votes;
  }

  static async loadVotesByPoll(pollId: string) {
    const filter = where('pollId', '==', pollId);
    return this.loadVotes([filter]);
  }

  static async loadVotesByFilter(filter: unknown) {
    const filters = createFilter(filter);
    return this.loadVotes(filters);
  }

  static async loadVotesByVoter(userId: string) {
    const filter = where('voter', '==', userId);
    return this.loadVotes([filter]);
  }

  static async migrateVote(oldUserId: string, newUserId: string) {
    let votes = await this.loadVotesByVoter(oldUserId);
    votes = votes.map((vote) => {
      vote.voter = newUserId;
      return vote;
    });
    await Promise.all(votes.map((vote) => this.updateVote(vote)));
    return votes;
  }

  static async loadById(voteId: string) {
    const filter = where('id', '==', voteId);
    const votes: Vote[] = await this.loadVotes([filter]);
    return votes[0];
  }

  static async createVote(vote: Vote) {
    await setDoc(this.getValues(vote.id), vote);
  }

  static async updateVote(vote: Vote) {
    await updateDoc(this.getValues(vote.id), { ...vote });
  }

  static async deleteVote(voteId: string) {
    await deleteDoc(this.getValues(voteId));
  }

  static async deleteByPollId(pollId: string) {
    const votes = await this.loadVotesByPoll(pollId);
    await Promise.all(votes.map((vote) => this.deleteVote(vote.id)));
  }
}
