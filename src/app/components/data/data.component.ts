import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { REGEX_NAME, REGEX_AGE } from '../constants';
import { Observable } from 'rxjs';

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
        name: '',
        lastName: '',
        age: 31,
        password1: '',
        password2: '',
        username: ''
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
            username: new FormControl ('', [
                Validators.required,
                this.existeUsuario.bind(this)
            ]),
            password1: new FormControl('', [
                Validators.required
            ]),
            password2: new FormControl()
        });

        this.forma.setValue(this.usuario);

        this.forma.controls['password2'].setValidators([
            Validators.required,
            this.noIgual.bind(this.forma)
        ]);
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

    noIgual(control: FormControl): { [s: string]: boolean } {

        const forma: any = this;

        if ( control.value !== forma.controls['password1'].value) {
            return {
                noiguales: true
            };
        }
        return null;
    }

    existeUsuario( control: FormControl ): Promise<any>|Observable<any> {
        const promise = new Promise ((resolve, reject) => {
            setTimeout( () => {
                if ( control.value === 'strider') {
                    resolve ( { existe: true } );
                } else {
                    resolve ( null );
                }
            }, 3000);
        });
        return promise;
    }
}

interface User {
    name: string;
    lastName: string;
    age: number;
    password1: any;
    password2: any;
    username: any;
}

