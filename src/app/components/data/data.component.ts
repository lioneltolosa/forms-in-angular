import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { REGEX_NAME, REGEX_AGE } from '../constants';

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
    name: 'Lionel',
    lastName: 'Tolosa',
    age: 31,
    // pasatiempos: ['Correr', 'Estudiar', 'Dormir']
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
      ]),
      //   pasatiempos: new FormArray([
      //     new FormControl('Correr', Validators.required)
      // ])
    });

    this.forma.setValue( this.usuario );
  }

  saveChanges() {
    console.log(this.forma.value);
    console.log(this.forma);

    this.forma.reset({
      name: '',
      lastName: '',
      age: '',
    });

  }
}

interface User {
  name: string;
  lastName: string;
  age: number;
  // pasatiempos: any;
}

