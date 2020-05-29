import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { AuthGuard } from '../app/auth/auth.guard'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './work/add/add.component';
import { RemoveComponent } from './work/remove/remove.component';
import { CompetedComponent } from './work/competed/competed.component';
import { ContactComponent } from './contact/contact.component';
import { TodayComponent } from './today/today.component';
import { LoginComponent } from './user/login/login.component';
import { SigninComponent } from './user/signin/signin.component';
import { ProfileComponent } from './user/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarService } from './navbar/navbar.service';


const routes:Routes=[
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'today',component:TodayComponent},
  {path:'work',children:[
    {path:'add',component:AddComponent},
    {path:'remove',component:RemoveComponent},
    {path:'complete',component:CompetedComponent}
  ]},
  {path:'contact',component:ContactComponent},
  {path:'user',children:[
    {path:'login',component:LoginComponent},
    {path:'signin',component:SigninComponent},
    {path:'profile',component:ProfileComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    RemoveComponent,
    CompetedComponent,
    ContactComponent,
    TodayComponent,
    LoginComponent,
    SigninComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthGuard,NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
