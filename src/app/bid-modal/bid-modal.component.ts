import { Component, OnInit } from '@angular/core';
import { BidService } from '../bid.service';
import { Bid } from 'src/Bid';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-bid-modal',
  templateUrl: './bid-modal.component.html',
  styleUrls: ['./bid-modal.component.scss']
})
export class BidModalComponent implements OnInit {

  constructor( private service: BidService) { }

  temp: Bid = new Bid();
  error: string;

  ngOnInit() {
    console.log('Hello from Modal');
  }

    // call service addBid()
   addBid(): void {

this.service.add(this.temp).pipe(
  catchError((err, caught) => {
    console.log(err);
    this.error = err.message;
    console.log(caught);
    return [];
  })
  ).subscribe(
  response => { console.log(response);
                // create a new object to clear form only when there is a successfull response
                this.temp = new Bid(); }
);
   }

}