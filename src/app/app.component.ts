import { Component, OnInit } from '@angular/core';
import { Kitchen } from './models/kitchen';
import { ApiService } from './services/api.service';
import {MatCardModule} from '@angular/material/card'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-feastfreedom';
  kitchenList: any[];

  constructor(private service:ApiService) {};

  ngOnInit(): void {
    this.service.getKitchens().subscribe(response => {
      this.kitchenList = response;
    })
  }
  
}
