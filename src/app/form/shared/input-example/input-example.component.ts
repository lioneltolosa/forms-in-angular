import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.css']
})
export class InputExampleComponent implements OnInit {

  @Input() bankName: string;
  // tslint:disable-next-line:no-input-rename
  @Input('account-id') id: string;

  constructor() { }

  ngOnInit() {
  }

}
