import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLogin: boolean;
  constructor( private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.AuthCheck();
  }

  AuthCheck() {
    this.isLogin = this.cookieService.check('useridfromlogin');
  }

  Logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
    this.ngOnInit();
  }
}
