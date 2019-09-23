import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageWindowComponent } from './message-window/message-window.component';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {
  constructor(private authService: AuthService, private messageWindow: MessageWindowComponent) {}

  // intercept request and add token
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // modify request
    request = request.clone({
      setHeaders: {
//        Authorization: `Bearer ${localStorage.getItem('MY_TOKEN')}`
        Authorization: `Bearer PONTONET`
      }
    });

    console.log('----request----');

    console.log(request);

    console.log('--- end of request---');

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log(' all looks good');
            // http response status code
            console.log(event.status);
          }
        },
        error => {
          // http response status code
          console.log('----response----');
          console.error('status code:');
          console.error(error.status);
          console.error(error.message);
          console.log('--- end of response---');
          this.messageWindow.openSnackBar(error.error.message, 'Fechar', 'error-window');
        }
      )
    );
  }
}
