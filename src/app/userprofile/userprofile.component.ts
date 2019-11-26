import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userData;

  constructor(private userService: UserService , private router: Router) { }

  ngOnInit() {
  }
  userProfile() {
    this.userService.getuserProfile().subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
        this.userData = res['user'];
      },
      err => {}
    );
  }
  onLogOut() {
    this.userService.deleteToken();
    this.router.navigateByUrl('/events');

  }

}
