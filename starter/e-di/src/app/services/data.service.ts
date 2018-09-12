import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item.interface';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) {

  }

  getData = (path) => {
    return this.httpClient.get(path);
  };

  getDataUsingPromise = (path) => {
    return this.httpClient.get(path).toPromise();
  };
}
