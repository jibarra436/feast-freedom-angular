import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kitchen } from '../models/kitchen';
import { FeastUser } from '../models/feastuser';


@Injectable()
export class ApiService{
  private kUrl: string;

  constructor(private http: HttpClient) {
    this.kUrl = '/api'
    //this.kUrl = 'http://3.22.137.155:8081/FeastFreedom-0.0.1-SNAPSHOT/api';
  }

  public getKitchens() {
    return this.http.get<Kitchen[]>(this.kUrl+'/kitchen');
  }

  public saveKitchen(kit: Kitchen) {
    console.log('Saving '+kit.kitchenName);
    return this.http.post<Kitchen>(this.kUrl+'/createkitchen', kit);
  }

  public uploadImage(data: FormData, email: String) {
    console.log('Uploading '+data);
    return this.http.post(this.kUrl+'/kitchen/'+email+'/uploadFile', data, {responseType: 'text'});
  }

  public saveuser(us: FeastUser) {
    console.log('Saving '+us.firstName);
    return this.http.post<Kitchen>(this.kUrl+'/createuser', us);
  }
}
