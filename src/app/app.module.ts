import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule, MAT_DATE_LOCALE} from '@angular/material';
import { AuthGuard } from '../app/auth/auth.guard'


import { AppComponent, DialogContentExampleDialog } from './app.component';
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
import { AlertComponent } from './dynamic/alert/alert.component';


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'today',component:TodayComponent,canActivate:[AuthGuard]},
  {path:'work',children:[
    {path:'add',component:AddComponent},
    {path:'remove',component:RemoveComponent},
    {path:'complete',component:CompetedComponent}
  ],canActivate:[AuthGuard]},
  {path:'contact',component:ContactComponent},
  {path:'user',children:[
    {path:'login',component:LoginComponent},
    {path:'signin',component:SigninComponent},
    {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]}
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
    ProfileComponent,
    AlertComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthGuard,NavbarService,{provide:MAT_DATE_LOCALE, useValue:"en-GB"}],
  bootstrap: [AppComponent],
  entryComponents:[AlertComponent,DialogContentExampleDialog]
})
export class AppModule {
}
