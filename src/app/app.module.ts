import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component'; 
import { LoginComponent} from'./Login/login.component';
import {Routes, RouterModule} from '@angular/router';
import { CustomPipe } from './CustomPipe/custompipe.component';
import { CustomDire} from './CustomDire/customdire.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '../../node_modules/@angular/http';
 const appRoot: Routes= [
  {path:'login', component:LoginComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomPipe, 
    CustomDire, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {} 

