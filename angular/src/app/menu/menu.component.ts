import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  userId: string;
  userFullname: string;
  userLogin: string;

  private authStatusSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
        this.userFullname = this.authService.getUserFullname();
        this.userLogin = this.authService.getUserLogin();
      }));
  }

  onLogout() {
    this.authService.logout();
  }

  onListUsers() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
