import { User } from './user';
import { Task } from './task';

export class Data {
users: User[] = [
  { id: 1, username: 'test', password: 'test', fname: 'test', lname: 'test' },
  { id: 2, username: 'test2', password: 'test2', fname: 'test2', lname: 'test2' }
];

tasks: Task[] = [
  { id: 1, userid: 1, category: 1, title: 'house cleaning', desc: 'est congue elementum in hacs',
    street: 'Florence', city: 'Columbus', state: 'Ohio', price: 284.30, hours: 34},
  { id: 2, userid: 6, category: 2, title: 'mover', desc: 'a odio in hac habitasse platea dictumst maecenas',
    street: 'West', city: 'Van Nuys', state: 'California', price: 481.43, hours: 41}
, { id: 3, userid: 3, category: 3, title: 'babysitting', desc: 'mauris viverra diam vitae',
    street: 'Hoepker', city: 'New York City', state: 'New York', price: 315.40, hours: 6}
, { id: 4, userid: 1, category: 4, title: 'babysitting', desc: 'phasellus sit amet erat nulla tempus vivam',
    street: 'Old Gate', city: 'Birmingham', state: 'Alabama', price: 8.67,hours: 41}
, { id: 5, userid: 10, category: 5, title: 'mover', desc: 'nulla neque libero convallis eget ',
  street: 'Welch', city: 'Saint Louis', state: 'Missouri', price: 166.75, hours: 38}
, { id: 6, userid: 7, category: 6, title: 'mover', desc: 'nascetur ridiculus mus vivamus vestibulum ',
  street: 'School', city: 'Wichita', state: 'Kansas', price: 97.58, hours: 3}
, { id: 7, userid: 7, category: 7, title: 'house cleaning', desc: 'pretium quis lectus suspendisse potenti in eleifend quam',
  street: '5th', city: 'Burbank', state: 'California', price: 217.29, hours: 63}
, { id: 8, userid: 10, category: 8, title: 'mover', desc: 'vestibulum ac est lacinia ',
  street: 'Farmco', city: 'San Antonio', state: 'Texas', price: 117.15, hours: 99}
, { id: 9, userid: 1, category: 9, title: 'babysitting', desc: 'maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum ',
  street: 'Becker', city: 'Midland', state: 'Michigan', price: 220.56, hours: 87}
, { id: 10, userid: 2, category: 10, title: 'babysitting', desc: 'vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc ',
  street: 'Laurel', city: 'Plano', state: 'Texas', price: 337.91, hours: 30}
, { id: 11, userid: 9, category: 11, title: 'gardening', desc: 'purus phasellus in felis donec semper sapien a libero nam dui ',
  street: 'Blackbird', city: 'Pensacola', state: 'Florida', price: 273.51, hours: 8}
, { id: 12, userid: 5, category: 12, title: 'babysitting', desc: 'nibh in hac habitasse platea dictumst aliquam augue ',
  street: 'Hudson', city: 'Akron', state: 'Ohio', price: 360.08, hours: 62}
, { id: 13, userid: 2, category: 13, title: 'house cleaning', desc: 'tincidunt eget tempus vel pede morbi portt',
  street: 'Warbler', city: 'Memphis', state: 'Tennessee', price: 426.79, hours: 75}
, { id: 14, userid: 10, category: 14, title: 'gardening', desc: 'nisi at nibh in hac habitasse platea dictumst aliquam augue quam ',
  street: 'Linden', city: 'Topeka', state: 'Kansas', price: 171.84, hours: 93}
, { id: 15, userid: 10, category: 15, title: 'babysitting', desc: 'vivamus vel nulla eget eros elementum pellentesque quisque ',
  street: 'Browning', city: 'Harrisburg', state: 'Pennsylvania', price: 23.70, hours: 19}
, { id: 16, userid: 3, category: 16, title: 'mover', desc: 'eros suspendisse accumsan tortor quis turpis sed a',
  street: 'American Ash', city: 'Dallas', state: 'Texas', price: 286.76, hours: 47}
, { id: 17, userid: 7, category: 17, title: 'mover', desc: 'ac est lacinia nisi venenatis tristique fusce ',
  street: 'Loftsgordon', city: 'San Diego', state: 'California', price: 447.29, hours: 2}
, { id: 18, userid: 10, category: 18, title: 'babysitting', desc: 'placerat praesent blandit nam nulla integer pede jus',
  street: 'Knutson', city: 'Portland', state: 'Oregon', price: 9.80, hours: 83}
, { id: 19, userid: 5, category: 19, title: 'gardening', desc: 'pede venenatis non sodales sed tincidunt ',
  street: 'Emmet', city: 'Lincoln', state: 'Nebraska', price: 149.55, hours: 77}
, { id: 20, userid: 2, category: 20, title: 'gardening', desc: 'suspendisse accumsan tortor quis turpis sed ante vivamus torto',
  street: 'Mariners Cove', city: 'Stockton', state: 'California', price: 398.87, hours: 97}
];
}




