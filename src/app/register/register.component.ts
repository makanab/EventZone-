import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
   showMessage: boolean;
   serverErrorMessage: string;


  constructor(private userService: UserService ) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.userService.registerUser(form.value).subscribe(
      res => {
        this.showMessage = true;
        setTimeout(() => this.showMessage = false , 4000);
      },
      err => {
        this.showMessage = false;
        if (err.status === 422) {
          this.serverErrorMessage = err.error.join('<br/>');

        } else {
          this.serverErrorMessage = '!An error occured please contact the Admin';
        }
      }
    );

  }



}
