import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data.model';

import { environment } from '../../environments/environment';
const BACKEND_URL = environment.apiUrl + '/users/';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private fullname: string;
  private login: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUserId() {
    return this.userId;
  }

  getUserFullname() {
    return this.fullname;
  }

  getUserLogin() {
    return this.login;
  }

  execLogin(login: string, password: string) {
    const authData: AuthData = {
      login,
      password
    };
    this.http
      .post<{ token: string, expiresIn: number, id: string, fullname: string, login: string }>(
        BACKEND_URL + 'login',
        authData
      )
      .subscribe(response => {
        console.log('inicio');
        const token = response.token;
        this.token = token;
        console.log(token);
        if ( token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response.id;
          this.login = response.login;
          this.fullname = response.fullname;
          this.authStatusListener.next(true);
          this.saveAuthData(token, new Date(new Date().getTime() + expiresInDuration * 1000), this.userId, this.fullname, this.login);
          console.log('teste' + token);
          this.router.navigate(['/']);
        }
      }, error => {
        console.log('deu erro' + error);
        this.authStatusListener.next(false);
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if ( !authInformation) {
      return;
    }
    const expiresIn = authInformation.expirationDate.getTime() - new Date().getTime();
    if ( expiresIn > 0 ) {
      this.token = authInformation.token;
      this.userId = authInformation.userId;
      this.fullname = authInformation.fullname;
      this.login = authInformation.login;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next();
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
    this.userId = null;
    this.router.navigate(['/auth/login']);
    console.log('logged out');
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, fullname, login) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('login', login);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('fullname');
    localStorage.removeItem('login');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    const fullname = localStorage.getItem('fullname');
    const login = localStorage.getItem('login');
    if ( token && expirationDate) {
      return {
        token,
        expirationDate: new Date(expirationDate),
        userId,
        fullname,
        login
      };
    }
  }
}
