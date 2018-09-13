import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output
} from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['../app.component.scss']
})

export class FruitComponent implements OnInit {

      @Input() fruit;
      @Output() select = new EventEmitter();

      constructor() {}

      ngOnInit() {
          console.log(this.fruit);
      }

}
