import { Component, OnInit, ViewChild, ElementRef , AfterViewInit, HostListener } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router, NavigationEnd } from '@angular/router';


enum Direction {
  Up = 'Up',
  Down = 'Down'
}

enum VisibilityState {
  Visibel = 'visible',
  Hidden = 'hidden'
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [  ]
})
export class HeaderComponent implements OnInit {
 // logginData: boolean;
  hideElement: boolean;
  showElement: boolean;

 constructor( private userService: UserService , private router: Router) {}

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
     // this.logginData = true;
      this.hideElement = false;
      this.showElement = true;

    } else {
     // this.logginData = false;
      this.hideElement = true;
      this.showElement = false;



    }


    /* DomElemnt() {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {

          if (this.userService.isLoggedIn()) {
         }

        }
      }

    );}
    */

  }
}

