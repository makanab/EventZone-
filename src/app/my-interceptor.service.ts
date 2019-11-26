import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor , HttpHandler , HttpRequest , HttpEvent} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {UserService} from './shared/user.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {


constructor( private userService: UserService , private router: Router  ) {}

intercept(req: HttpRequest<any> , next: HttpHandler) {
     const token = 'my token is here';
     const authReq = req.clone({
       setHeaders: {
         Authorization: token
       }

     });
     return next.handle(authReq);
}




}



