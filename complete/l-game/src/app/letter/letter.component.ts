import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['../app.component.css']
})
export class LetterComponent implements OnInit {

    @Input() letter:string;
    @Output() choose = new EventEmitter();

    selected:boolean = false;

    ngOnInit() {}

    select() {
        this.selected = true;
        this.choose.emit(this.letter);
    }
}
