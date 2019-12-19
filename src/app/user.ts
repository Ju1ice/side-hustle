import { Task } from './task';
import { Bid } from './bid';

export class User {
  uid: number;
  uusername: string;
  upassword: string;
  ufn: string;
  uln: string;
  tasks: Task[];
  bids: Bid[];
  constructor() {}
}
