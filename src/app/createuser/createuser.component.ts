import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { FeastUser } from '../models/feastuser';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  us: FeastUser

  constructor(private uservice: ApiService) {
    this.us = new FeastUser();
  }

  ngOnInit(): void {
  }

  submitted = false;

  createuser(){
    console.log("Creating: "+this.us);
    this.submitted = true;
    this.uservice.saveuser(this.us).subscribe(response => {
      console.log(response);
    });
  }

}
