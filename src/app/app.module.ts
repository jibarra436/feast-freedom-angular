import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatekitchenComponent } from './createkitchen.component';
import { KitchenService } from './services/kitchen.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CreatekitchenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,                               
    ReactiveFormsModule, BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [KitchenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
