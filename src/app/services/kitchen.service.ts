import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kitchen } from '../models/kitchen';


@Injectable()
export class KitchenService {

  private kUrl: string;

  constructor(private http: HttpClient) {
    this.kUrl = '/api';
  }

  public getKitchens() {
    return this.http.get<Kitchen[]>(this.kUrl+'/kitchen');
  }

  public save(kit: Kitchen) {
    console.log('Saving '+kit.kitchenName);
    return this.http.post<Kitchen>(this.kUrl+'/createkitchen', kit);
  }
}
