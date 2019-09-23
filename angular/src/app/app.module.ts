import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { InterceptService} from './utils/intercept.service';
import { AngularMaterialModule } from './angular-material.module';
import { UsersModule } from './users/users.module';
import { AppUtilsModule } from './app-utils.module';
import { MatSnackBarModule } from '@angular/material';
import { MessageWindowComponent } from './utils/message-window/message-window.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, MessageWindowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    AppUtilsModule,
    UsersModule,
    MatSnackBarModule
  ],
  providers: [InterceptService, AuthInterceptor, MessageWindowComponent,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
