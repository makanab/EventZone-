import { Component, OnInit, HostListener, Inject } from '@angular/core';
import {Router , NavigationStart, NavigationEnd} from '@angular/router';
import {trigger, state, style , transition , animate} from '@angular/animations';
import { inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade',
    [
      state('void', style({ opacity : 0})),
      transition(':enter', [ animate(300)]),
      transition(':leave', [ animate(500)]),
    ]
)]
})
export class AppComponent implements OnInit {
  title = 'eventapp';

  showHeaderFooter: boolean;

 constructor(@Inject(DOCUMENT) document, private router: Router) { }

 ngOnInit() {

   this.router.events.subscribe(
     (event) => {
       if (event instanceof NavigationEnd) {
         if (event.url === '/special') {
          this.showHeaderFooter = false;
         } else {
           this.showHeaderFooter = true;

         }

       }

     }

   );

 }

 @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       const element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      const  element = document.getElementById('navbar');
      element.classList.remove('sticky');
     }
  }





}
