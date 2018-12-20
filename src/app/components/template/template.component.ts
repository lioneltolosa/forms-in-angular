import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario: Usuario = {
    nombre: 'Lionel',
    apellido: 'Tolosa',
    email: '',
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
  nombre: string;
  apellido: string;
  email: string;
}