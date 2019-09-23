import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';

import { User } from '../user.model';
import { UsersService } from '../users.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  isLoading = false;
  totalUsers = 0;
  usersPerPage = 20;
  currentPage = 1;
  pageSizeOptions = [10, 50, 100];
  userIsAuthenticated = false;
  currentUserId: string;

  displayedColumns: string[] = ['fullname', 'login', 'type'];

  private usersSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    public usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.usersService.getUsers(this.usersPerPage, this.currentPage);
    this.currentUserId = this.authService.getUserId();
    this.usersSub = this.usersService
      .getUserUpdateListener()
      .subscribe((userData: { users: User[]; userCount: number }) => {
        this.users = userData.users;
        this.totalUsers = userData.userCount;
        this.isLoading = false;
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.currentUserId = this.authService.getUserId();
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.usersPerPage = pageData.pageSize;
    this.usersService.getUsers(this.usersPerPage, this.currentPage);
  }

  onEditUser(userLogin: string) {
    this.router.navigate(['/users/edit/', userLogin]);
  }

  onAddUser() {
    this.router.navigate(['/users/create/']);
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
