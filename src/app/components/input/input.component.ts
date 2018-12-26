import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() field: string;
  @Input() inputType: string;
  @Input() placeHolder: string;
  @Input() nameField: string;

  constructor() { }

  ngOnInit() {
  }

}
