import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatekitchenComponent } from './createkitchen.component';
import { ApiService } from './services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { KitchenloginComponent } from './kitchenlogin/kitchenlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CreateuserComponent } from './createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatekitchenComponent,
    KitchenloginComponent,
    UserloginComponent,
    CreateuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,                               
    ReactiveFormsModule, BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
