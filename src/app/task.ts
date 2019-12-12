import { Bid } from './bid';


export class Task {
  tid: number;
  tuserid: number;
  ttitle: string;
  tdesc: string;
  tstreet: string;
  tcity: string;
  tstate: string;
  tprice: number;
  tduration: number;
  bids: Bid[];
  uid: number;
  constructor() {}
}

