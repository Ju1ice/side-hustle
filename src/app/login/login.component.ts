import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../user';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 tempUser: User = new User ();
 foundUser: User = new User ();
  cookieUserId: string;

  constructor(private service: AppService, private cookieService: CookieService,  private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.tempUser).subscribe(rep => {
      this.foundUser = rep;
      if (this.foundUser) {
      this.cookieService.set('useridfromlogin', rep.uid );
      console.log(rep);
      this.goToDashBoard();
      }
    });
  }

  goToDashBoard() {
    this.router.navigate(['/dashboard']);
  }
}
