import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kitchen } from '../models/kitchen';


@Injectable()
export class KitchenService {

  private kUrl: string;

  constructor(private http: HttpClient) {
    this.kUrl = '/api/kitchen/';
  }

  public getKitchens() {
    return this.http.get<Kitchen[]>(this.kUrl);
  }

  public save(kit: Kitchen) {
    return this.http.post<Kitchen>(this.kUrl, kit);
  }
}
