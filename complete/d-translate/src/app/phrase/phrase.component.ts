import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['../app.component.css']
})
export class PhraseComponent implements OnInit {

    @Input() phrase;

    show:boolean=false;

    constructor() {}

    ngOnInit() {}

    toggle() {
        this.show = !this.show;
    }

}
