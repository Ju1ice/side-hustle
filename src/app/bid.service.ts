import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bid } from 'src/Bid';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BidService {



  constructor(private http: HttpClient) {}
  url = `http://ec2-3-132-52-40.us-east-2.compute.amazonaws.com:8080/`;

  add(bid: Bid, uid: number, tid: number): Observable<any> {
    return this.http.post(this.url + '/bids/add/' + uid + '/' + tid, bid
      );
  }

    removeBid(id: number): Observable <any> {
    return this.http.delete(this.url + '/bids/remove/' + id);
  }
}

