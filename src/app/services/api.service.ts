import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kitchen } from '../models/kitchen';
import { FeastUser } from '../models/feastuser';


@Injectable()
export class ApiService{
  private kUrl: string;

  constructor(private http: HttpClient) {
    this.kUrl = '/api';
  }

  public getKitchens() {
    return this.http.get<Kitchen[]>(this.kUrl+'/kitchen');
  }

  public savekitchen(kit: Kitchen) {
    console.log('Saving '+kit.kitchenName);
    return this.http.post<Kitchen>(this.kUrl+'/createkitchen', kit);
  }

  public saveuser(us: FeastUser) {
    console.log('Saving '+us.firstName);
    return this.http.post<Kitchen>(this.kUrl+'/createuser', us);
  }
}
