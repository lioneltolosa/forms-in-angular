import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { REGEX_NAME, REGEX_AGE, REGEX_EMAIL, REGEX_PHONE } from '../constants';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  forma: FormGroup;

  // usuario: Object = {
  //   nombreCompleto: {
  //     nombre: 'Lionel',
  //     apellido: 'Tolosa'
  //   },
  //   correo: 'lionel@gmail.com'
  // };

  usuario: User = {
    name: null,
    lastName: null,
    age: null,
  };

  constructor() {
    // this.forma = new FormGroup({
    //   'nombreCompleto': new FormGroup({
    //     'nombre': new FormControl('', [
    //       Validators.required,
    //       Validators.minLength(3)
    //     ]),
    //     'apellido': new FormControl('', Validators.required),
    //   }),
    //   'correo': new FormControl('', [
    //     Validators.required,
    //     Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    //   ])
    // });

    this.forma = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(REGEX_NAME)
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(REGEX_NAME)
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.pattern(REGEX_AGE)
      ])
    });
  }

  saveChanges() {
    console.log(this.forma.value);
    console.log(this.forma);
  }
}

interface User {
  name: string;
  lastName: string;
  age: number;
}

