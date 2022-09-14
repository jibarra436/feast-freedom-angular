import { Component, OnInit } from '@angular/core';
import { Kitchen } from './models/kitchen';
import { ApiService } from './services/api.service';
import {MatCardModule} from '@angular/material/card'; 
import { NodeWithI18n } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-feastfreedom';
  kitchenList: any[];

  days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  now = new Date();

  constructor(private service:ApiService, public router: Router) {};

  ngOnInit(): void {
    this.service.getKitchens().subscribe(response => {
      this.kitchenList = response;
    })
  }

  logout(){
    console.log("Logging out: "+this.getUserName());
    localStorage.clear();

    this.router.navigate([''])
  }

  loggedIn() {
    if(localStorage.getItem('loggedIn') == "true")
      return true;
    else
      return false;
  }

  getUserName() {
    return localStorage.getItem("userFirst") + " " + localStorage.getItem("userLast")
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
