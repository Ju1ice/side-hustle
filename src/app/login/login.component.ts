import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 tempUser: User = new User ();

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.tempUser).subscribe(rep => {
      console.log(rep);
    });
  }
}
