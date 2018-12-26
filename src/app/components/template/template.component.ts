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
    pais: '',
    sexo: null,
    acepta: 'false'
  };

  paises = [
    {
      codigo: 'VZL',
      nombre: 'Venezuela'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    },
    {
      codigo: 'CTL',
      nombre: 'Catalunya'
    },
    {
      codigo: 'ITL',
      nombre: 'Italia'
    }
  ];

  sexos: string[] = ['Hombre', 'Mujer', 'Sin definir'];

  constructor() { }

  save( forma: NgForm ) {
    // console.log('Form post');
    console.log('NgForm', forma );
    console.log('Valor forma', forma.value);
    console.log('Usuario', this.usuario);

    console.log('Pais', this.paises );
  }

}

interface Usuario {
  name: string;
  apellido: string;
  email: string;
  pais: String;
  sexo: boolean;
  acepta: string;
}
