import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['../app.component.css']
})
export class TvComponent implements OnInit {

  channel: string;

  constructor(private route: ActivatedRoute) {
      // The route object contains { channel:4 }
      this.route.params.subscribe(r => this.setChannel(r))
  }

  ngOnInit() { }

  setChannel(r) {
      this.channel = r.channel ? r.channel : "";
  }
}
