import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  // usuario: Usuario = {
  //   name: 'Lionel',
  //   apellido: 'Tolosa',
  //   email: '',
  // };

  usuario: Usuario = {
    name: null,
    apellido: null,
    email: null,
  };

  constructor() { }

  save( forma: NgForm ) {
    // console.log('Form post');
    console.log('NgForm', forma );
    console.log('Valor forma', forma.value);
    console.log('Usuario', this.usuario);
  }

}

interface Usuario {
  name: string;
  apellido: string;
  email: string;
}
