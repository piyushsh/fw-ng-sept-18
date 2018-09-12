import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Phrase } from '../phrase.interface';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.css']
})
export class PhraseComponent implements OnInit {

  @Input() phrase: Phrase;
  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleTranslation = () => {
    this.toggle = !this.toggle;
  }

}
