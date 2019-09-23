import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Response } from '../response.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/users/';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<{ users: User[]; userCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getUsers(usersPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${usersPerPage}&page=${currentPage}`;
    this.http
      .get<Response<User>>(BACKEND_URL + queryParams)
      .pipe(
        map(userData => {
          return {
            data: userData.data.map(user => {
              return {
                id: user.id,
                fullname: user.fullname,
                login: user.login,
                type: user.type,
                password: null,
                confirmation: null
              };
            }),
            maxUsers: userData.data.length
          };
        })
      )
      .subscribe(mappedUsersData => {
        this.users = mappedUsersData.data;
        this.usersUpdated.next({
          users: [...this.users],
          userCount: mappedUsersData.maxUsers
        });
      });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getUser(id: string) {
    return this.http.get<Response<User>>(BACKEND_URL + id);
  }

  getUserByLogin(login: string) {
    return this.http.get<User>(BACKEND_URL + login);
  }

  addUser(fullname: string, login: string, password: string, type: string) {
    const userData = new HttpParams()
      .set('fullname', fullname)
      .set('login', login)
      .set('password', password)
      .set('type', type);

    this.http
      .post<{ message: string; user: User }>(BACKEND_URL, userData)
      .subscribe(responseData => {
        this.router.navigate(['/']);
      });
  }

  updateUser(
    id: number,
    fullname: string,
    login: string,
    type: string,
    password: string
  ) {
    let userData: User | HttpParams;

    userData = new HttpParams()
      .set('id', id.toString())
      .set('fullname', fullname)
      .set('login', login)
      .set('type', type)
      .set('password', password);

    this.http.put(BACKEND_URL + id, userData).subscribe(response => {
      this.router.navigate(['/']);
    });
  }

  deleteUser(id: number) {
    return this.http.delete(BACKEND_URL + id).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
