import {Injector ,  Injectable} from '@angular/core';
import {HttpInterceptor , HttpHandler , HttpRequest , HttpEvent} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {UserService} from './shared/user.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

constructor( private userService: UserService , private router: Router , private injector: Injector ) {}
/*
intercept(req: HttpRequest<any> , next: HttpHandler) {
    const myToken = localStorage.getItem('token');
    if (req.headers.get('noauth')) {
        return next.handle(req.clone());
    } else {
       // const userService =this.injector.get(UserService);
        const clonedreq = req.clone({
   // headers: req.headers.set('Authorization' , 'Bearer ' + myToken)
   setHeaders: { Authorization: 'Bearer ' + myToken}


        });

        return next.handle(clonedreq).pipe(
            tap(
                event => {},
                err => {
                    if (err.error.auth === false) {
                        this.router.navigateByUrl('/login');

                    }
                }
            )
        );

    }
}
*/

intercept(req: HttpRequest<any> , next: HttpHandler) {
    console.log('auth interceptor is working ');
    console.log(req.url);
    const token = 'my token';
    const authReq = req.clone({
        setHeaders: {Authorization: token}
    });
    return next.handle(authReq);

}

}

