import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { FeastUser } from '../models/feastuser';
import { UserloginComponent } from '../userlogin/userlogin.component';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  us: FeastUser

  constructor(private uservice: ApiService, private router: Router) {
    this.us = new FeastUser();
  }

  ngOnInit(): void {

  }

  submitted = false;

  questions1 = [
    { id: 0, name: "What was the name of your favourite Teacher?" },
    { id: 1, name: "What was your first job?" },
    { id: 2, name: "What was the name of your first pet?" },
    { id: 3, name: "What is your favourite food?" }
  ];

  questions2 = [
    { id: 0, name: "What was the name of your favourite Teacher?" },
    { id: 1, name: "What was your first job?" },
    { id: 2, name: "What was the name of your first pet?" },
    { id: 3, name: "What is your favourite food?" }
  ];

  login(user: FeastUser, apiService: ApiService, router: Router){
    console.log("Logging in: "+user.email);
    var credentials: any =
    {
      "username": user.email,
      "password": user.password
    }
    var loginfo = <JSON>credentials;
        
    apiService.auth(loginfo, credentials.username).subscribe(response => {
      localStorage.setItem('loggedIn', "true");
      localStorage.setItem('token', response['token']);

      apiService.getUser(credentials.username).subscribe(response => {
        localStorage.setItem('userId', response.id.toString());
        localStorage.setItem('userEmail', response.email);
        localStorage.setItem('userFirst', response.firstName);
        localStorage.setItem('userLast', response.lastName);
      });
    });

    router.navigate([''])
  }

  createuser(){
    console.log("Creating: "+this.us);
    this.submitted = true;
    this.uservice.saveuser(this.us).subscribe(response => {
      console.log(response);
    });
    
    setTimeout(this.login, 1000, this.us, this.uservice, this.router);
  }

}
