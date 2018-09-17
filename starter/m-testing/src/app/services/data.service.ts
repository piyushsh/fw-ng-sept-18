import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getName = () => {
    return "Robert DeNiro";
  };
}

//==============================================

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor() { }

  getName = () => {
    return "Fake Service Name";
  };
}