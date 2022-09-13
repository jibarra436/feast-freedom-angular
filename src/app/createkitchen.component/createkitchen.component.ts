import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { Kitchen } from '../models/kitchen';



@Component({
  selector: 'app-createkitchen',
  templateUrl: 'createkitchen.component.html',
  styleUrls: ['./createkitchen.component.css'] 
})

export class CreatekitchenComponent implements OnInit{
  kit: Kitchen

  constructor(private kservice: ApiService){
    this.kit = new Kitchen();
  }

  ngOnInit(): void {
  }

  submitted = false;

  createkitchen(){
    console.log("Creating: "+this.kit);
    this.submitted = true;
    this.kservice.savekitchen(this.kit).subscribe(response => {
      console.log(response);
    });
  }
}
