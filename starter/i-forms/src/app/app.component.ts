import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  AbstractControl,
  Validators
} from '@angular/forms';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  film: FormGroup;
  fd: AbstractControl;
  ft: AbstractControl;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    let config = {
      title: ["", this.validateTitle],
      director: ["", this.validateDirector]
    };
    console.log(this.fb);
    this.film = this.fb.group(config);
    this.fd = this.film.controls.director;
    this.ft = this.film.controls.title

    this.monitorForm();
  }

  private monitorForm = () => {
    this.fd.valueChanges
      .pipe(filter(data => this.fd.valid))
      .subscribe(data => console.log(data));

    this.film.valueChanges
      .subscribe(data => console.log(data));
  }

  private validateTitle = (ft: FormControl): any => {
    let valid = ft.value.trim().split(" ").length >= 2;
    if (!valid) {
      return { shortName: "Minimum of 2 words required." }
    }
    return valid;
  };

  private validateDirector = (fd: FormControl) => {
    let regex = /^(?:[A-Z][^\s]*\s?)+$/;
    let valid = regex.test(fd.value);
    if (!valid) {
      return { shortName: "Title case" }
    }
    return valid;
  };

  addFilm = () => {
    if (this.film.valid) {
      let empty = { title: "", director: "" };
      this.film.reset(empty);
    }
  };

  isFieldInValid = (field: FormControl) => {
    return field.touched && !field.valid
  };

}
