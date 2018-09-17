import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  constructor(private httpClient: HttpClient) {

  }

  getPersons = (url) => {
    return this.httpClient.get(url).toPromise();
  }
}
