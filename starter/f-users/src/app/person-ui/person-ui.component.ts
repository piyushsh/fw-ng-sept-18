import { Component, OnInit, Input } from '@angular/core';
import { IPerson, Person } from '../Person/person.interface';

@Component({
  selector: 'app-person-ui',
  templateUrl: './person-ui.component.html',
  styleUrls: ['./person-ui.component.css']
})
export class PersonUiComponent implements OnInit {

  @Input() person: IPerson;

  constructor() { }

  ngOnInit() {
  }

}
