import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../user';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() nav: NavComponent;

 tempUser: User = new User ();
 foundUser: User = new User ();
  cookieUserId: string;

  constructor(private service: AppService, private cookieService: CookieService,  private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.tempUser).subscribe(rep => {
      console.log(rep);
      this.foundUser = rep;
      console.log(this.foundUser);
      if (this.foundUser != null) {
      this.cookieService.set('useridfromlogin', rep.uid );
      console.log(rep);

      // this.router.navigateByUrl('/nav', { skipLocationChange: true }).then(() => {
      //   this.router.navigate(['/dashboard']);
      //   });
      this.goToDashBoard();
      }
    });
  }

  goToDashBoard() {
    this.router.navigate(['/dashboard']);
  }
  reloadNavBar() {
    this.router.navigate(['/nav']);
  }
}
