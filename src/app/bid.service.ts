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
  url = `http://localhost:8080`;

  add(bid: Bid): Observable<any> {
    return this.http.post(this.url + '/bids/add', bid);
  }
}

