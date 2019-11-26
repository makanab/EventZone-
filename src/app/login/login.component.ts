import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model = {
   email: '',
   password: ''
 };

 emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

 showMessage: string;
 serverErrorMessage: string;

  constructor(private userServices: UserService , private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.userServices.loginUser(form.value).subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
        this.userServices.setToken(res['token']);
        this.router.navigateByUrl('/profile');
      },
      err => {
        this.showMessage =  err.error.message;
      }
    );

  }


}
