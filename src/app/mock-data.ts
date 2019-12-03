import { User } from './user';
import { Task } from './task';

export class Data{
users: User[] = [
  { id: 1, username: 'test', password: 'test', fname: 'test', lname: 'test' },
  { id: 2, username: 'test2', password: 'test2', fname: 'test2', lname: 'test2' }
];
tasks: Task[] = [
  { id: 1, user: 1,  category: 2, title: 'task1', desc: 'desc1', street: 'street1', city: 'city1', state: 'state1', price: 2, hours: 2 },
  { id: 2, user: 2, category: 2, title: 'task2', desc: 'desc2', street: 'street2', city: 'city2', state: 'state2', price: 3, hours: 3 }
];
}




