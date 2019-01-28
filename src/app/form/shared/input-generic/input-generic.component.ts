import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-generic',
  templateUrl: './input-generic.component.html',
  styleUrls: ['./input-generic.component.css']
})
export class InputGenericComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() field: string;
  @Input() nameField: string;

  constructor() { }

  ngOnInit() {
  }

}
