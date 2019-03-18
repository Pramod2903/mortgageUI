import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRouteModule } from './app-route/app-route.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { AppRouteRoutingModule } from './app-route/app-route-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  exports:[AppRouteModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
