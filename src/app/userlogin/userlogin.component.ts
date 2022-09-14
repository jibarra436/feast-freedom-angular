import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  ngOnInit(): void {
  }
    constructor(private logservice: ApiService, private router: Router) {
  }

  loginfo: JSON;
  submitted = false;
  credentials: any =
    {
      "username": "",
      "password": ""
    }

  login(){
    console.log("Logging in: "+this.credentials.username);
    this.submitted = true;
    this.loginfo = <JSON>this.credentials;
        
    this.logservice.auth(this.loginfo,this.credentials.username).subscribe(response => {
      localStorage.setItem('loggedIn', "true");
      localStorage.setItem('token', response['token']);

      this.logservice.getUser(this.credentials.username).subscribe(response => {
        localStorage.setItem('userId', response.id.toString());
        localStorage.setItem('userEmail', response.email);
        localStorage.setItem('userFirst', response.firstName);
        localStorage.setItem('userLast', response.lastName);
      });
    });

    this.router.navigate([''])
  }
}
