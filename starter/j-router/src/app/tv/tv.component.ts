import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['../app.component.css']
})
export class TvComponent implements OnInit {

  channel: string;

  constructor() {}

  ngOnInit() { }

}
