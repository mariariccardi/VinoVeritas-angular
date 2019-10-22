import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import { ArticlesComponent } from './admin/articles/articles.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminMenuComponent } from './layout/admin-layout/admin-menu/admin-menu.component';
import { HeaderComponent } from './layout/admin-layout/header/header.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    AdminDashboardComponent,
    CompaniesComponent,
    ArticlesComponent,
    UsersComponent,
    AdminMenuComponent,
    HeaderComponent,
    AdminLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
