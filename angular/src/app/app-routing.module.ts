import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './users/users-list/users-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { AuthGuard } from './auth/auth.guard';

// { path: 'edit/:userId', component: UserEditComponent, canActivate: [AuthGuard] },

const routes: Routes = [
  { path: '', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: 'users/create', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'users/edit/:login', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
