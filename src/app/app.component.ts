import { Component, OnInit } from '@angular/core';
import { Kitchen } from './models/kitchen';
import { ApiService } from './services/api.service';
import {MatCardModule} from '@angular/material/card'; 
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-feastfreedom';
  kitchenList: any[];

  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  now = new Date();

  constructor(private service:ApiService) {};

  ngOnInit(): void {
    this.service.getKitchens().subscribe(response => {
      this.kitchenList = response;
    })
  }

  isOpen(kitchen: Kitchen) {
    const status = document.getElementById(kitchen.id.toString());

    if(kitchen.workingDays.includes(this.days[this.now.getDay()])) {

      if(status)
        status.style.color = 'green';

      return "OPEN";
    } else {

      if(status)
        status.style.color = 'red';

      return "CLOSED";
    }
    
  }
  
}
