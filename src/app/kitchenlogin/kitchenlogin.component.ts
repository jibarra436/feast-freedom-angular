import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-kitchenlogin',
  templateUrl: './kitchenlogin.component.html',
  styleUrls: ['./kitchenlogin.component.css']
})
export class KitchenloginComponent implements OnInit {
  ngOnInit(): void {
  }
    constructor(private logservice: ApiService) {
  }

  loginfo: JSON;
  submitted = false;
  credarray: any =[
    {
      em: "default",
      psw: "default"
    }
    ]

  login(){
    console.log("Logging in: "+this.credarray.em);
    this.submitted = true;
    this.loginfo = <JSON>this.credarray;
    this.logservice.auth(this.loginfo,this.credarray.em);
  }
}
