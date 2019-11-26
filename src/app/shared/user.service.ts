import { Injectable , Inject } from '@angular/core';
import {User} from '../shared/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: User = {
    fullName: '',
    email: '',
    password: ''
  };


  // tslint:disable-next-line: object-literal-key-quotes
  noAuthHeader = {headers: new HttpHeaders({ 'NoAuth': 'True'}) };

  constructor(@Inject(DOCUMENT) document , private http: HttpClient , private router: Router ) { }

  // http methods
 registerUser(user: User) {
   return this.http.post(environment.apiBaseUrl + '/register', user,  this.noAuthHeader );

 }

 loginUser(authCredentials) {
   return this.http.post(environment.apiBaseUrl + '/auth' , authCredentials , this.noAuthHeader);

 }

 getuserProfile() {
   return this.http.get(environment.apiBaseUrl + '/profile');
 }

 // helper methods

 setToken(token: string) {
   localStorage.setItem('token' , token );
 }

 getToken() {
   localStorage.getItem('token');

 }

 deleteToken() {
   localStorage.removeItem('token');
 }
 getPayload() {
  const token = localStorage.getItem('token');
  if (token) {
    const  userpayload = atob(token.split('.')[1]);
    return JSON.parse(userpayload);
  } else {
    return null;
  }
 }

 isLoggedIn() {
   const userPayload = this.getPayload();
   if (userPayload) {
     return  userPayload.exp > Date.now() / 1000;
   }
 }


 // hide and show DomElements
 DomElemnt() {
   this.router.events.subscribe(
     (event) => {
       if (event instanceof NavigationEnd) {
         const showElement = true;

         if (this.isLoggedIn) {
           
          
        }

       }
     }

   );

 }





}
