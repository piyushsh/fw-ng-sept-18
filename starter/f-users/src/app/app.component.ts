import { Component, OnInit } from '@angular/core';
import { Person, IPerson } from './Person/person.interface';
import { PersonDataService } from './Person/person-data-service.service';
import { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'f-users';

  persons: IPerson[] = [];

  constructor(private personDataService: PersonDataService) {

  }

  ngOnInit() {
    this.personDataService.getPersons(AppConfig.users.url)
      .then((response: any) => {
        response.results.forEach(personJson => {
          var person = new Person(
            personJson.name.first,
            personJson.name.last,
            personJson.location.city,
            personJson.email,
            personJson.picture.thumbnail);

          this.persons.push(person);
        });
      })
  }

}
