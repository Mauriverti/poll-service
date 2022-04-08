import { deleteDoc, getDocs, query, QueryConstraint, setDoc, updateDoc, where } from 'firebase/firestore';
import { getCollection, getRef } from '../../shared/domain/utils/firestore.utils';
import { Poll } from '../domain/models/poll';

export default class PollRepository {
  private static readonly collection = 'poll';
  private static getValues = (id: string) => getRef(this.collection, id);

  static async loadPoll(filters: QueryConstraint[]) {
    const q = query(getCollection<Poll>(this.collection), ...filters);
    const querySnapshot = await getDocs(q);
    const polls: Poll[] = [];
    querySnapshot.forEach(doc => polls.push(doc.data()));
    return polls;
  }

  static async loadPollByCreator(creatorId: string) {
    const filter = where('createdBy', '==', creatorId);
    return this.loadPoll([filter]);
  }

  static async loadPollById(pollId: string): Promise<Poll> {
    const filter = where('id', '==', pollId);
    const poll = await this.loadPoll([filter]);
    return poll[0];
  }

  static async migratePoll(oldUserId: string, newUserId: string) {
    let polls = await this.loadPollByCreator(oldUserId);
    polls = polls.map((poll) => {
      poll.createdBy = newUserId;
      return poll;
    });
    await Promise.all(polls.map((poll) => this.updatePoll(poll)));
    return polls;
  }

  static async createPoll(poll: Poll) {
    await setDoc(this.getValues(poll.id), poll);
  }

  static async updatePoll(poll: Poll) {
    await updateDoc(this.getValues(poll.id), { ...poll });
  }

  static async deletePoll(pollId: string) {
    await deleteDoc(this.getValues(pollId));
  }
}
