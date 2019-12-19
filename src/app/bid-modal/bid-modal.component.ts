import { Component, OnInit} from '@angular/core';
import { BidService } from '../bid.service';
import { Bid } from 'src/Bid';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bid-modal',
  templateUrl: './bid-modal.component.html',
  styleUrls: ['./bid-modal.component.scss']
})
export class BidModalComponent implements OnInit {
  constructor( private service: BidService, private cookieService: CookieService, private route: ActivatedRoute, private router: Router) { }

  temp: Bid = new Bid();
  error: string;
  isLogin: boolean;

  ngOnInit() {
    console.log('Hello from Modal');
    this.isLogin = this.cookieService.check('useridfromlogin');
  }

    // call service addBid()
   addBid(): void {
     console.log(this.cookieService.get('useridfromlogin'));
     this.temp.uid = +this.cookieService.get('useridfromlogin');
     this.temp.tid = +this.route.snapshot.queryParamMap.get('taskId');
     console.log('This is bid: ' + JSON.stringify(this.temp));
     this.service.add(this.temp, this.temp.uid, this.temp.tid).pipe(
  catchError((err, caught) => {
    console.log(err);
    this.error = err.message;
    console.log(caught);
    return [];
  })
  ).subscribe(
  response => { console.log(response);
                // create a new object to clear form only when there is a successfull response
                this.temp = new Bid();
                document.getElementById('close-btn').click();
                this.router.navigate(['/dashboard']);
 }
);
   }

}
