import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule, HttpEvent, HttpRequest } from '@angular/common/http';
import { Kitchen } from '../models/kitchen';
import { delay, Observable } from 'rxjs';
import { async, waitForAsync } from '@angular/core/testing';
import { ApiService } from '../services/api.service';
import {FormBuilder} from '@angular/forms';



@Component({ 
  templateUrl: 'createkitchen.component.html',
  styleUrls: ['./createkitchen.component.css'] 
})

export class CreatekitchenComponent {
  kit: Kitchen
  selectedFiles?: FileList;
  currentFileUpload: File | null | undefined; 
  progress: { percentage: number } = { percentage: 0 };  
  selectedFile = null;  
  changeImage = false;  
  file:string;
  submitted = false;
  selectedDays = this._formBuilder.group({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  constructor(private apiservice: ApiService, private https: HttpClient, private _formBuilder: FormBuilder){
    this.kit = new Kitchen();
  }

  change(event: any) {
    this.changeImage = true;
  }
  
  changedImage(event: { target: { files: null[]; }; }) {
    this.selectedFile = event.target.files[0];
  }  
  
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles?.item(0);
    
    if(this.currentFileUpload !== null && this.currentFileUpload !== undefined)
    {
      this.kit.imageURL = this.pushFileToStorage(this.currentFileUpload);
      this.selectedFiles = undefined;
    }
        
  }  
  
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  createkitchen() {
    console.log("Creating: "+this.kit);

    // Handle working days
    Object.keys(this.selectedDays.controls).forEach(key => {
      if(this.selectedDays.get(key)?.value == true)
        this.kit.workingDays += key+";"
    });

    this.submitted = true;
    
    this.upload();

    this.apiservice.saveKitchen(this.kit).subscribe(response => {
      console.log(response);
    });
  }

  pushFileToStorage(file: File): String {    
    const data: FormData = new FormData();
    data.append('file', file);
        
    this.apiservice.uploadImage(data, this.kit.email).subscribe(response => {
      return response;
    });

    return '';

    /*
    const newRequest = new HttpRequest('POST', 'http://localhost:8081/api/kitchen/uploadFile', data, {      reportProgress: true, responseType: 'text'    });
    newRequest.headers.append("Access-Control-Allow-Origin", "*");
    return this.https.request(newRequest);
    */
  }
}
