import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-profile-editor',
    templateUrl: './profile-editor.component.html',
    styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

    // profileForm = new FormGroup({
    //     firstName: new FormControl(''),
    //     lastName: new FormControl(''),
    //     address: new FormGroup({
    //         street: new FormControl(''),
    //         city: new FormControl(''),
    //         state: new FormControl(''),
    //         zip: new FormControl('')
    //     })
    // });

    profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: this.fb.group({
            street: [''],
            city: [''],
            state: [''],
            zip: ['', Validators.maxLength(5)],
        }),
        aliases: this.fb.array([
            this.fb.control('')
        ])
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

    onSubmit() {
        console.warn(this.profileForm.value);
    }

    updateProfile() {
        this.profileForm.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    }

    get aliases() {
        return this.profileForm.get('aliases') as FormArray;
    }

    addAlias() {
        this.aliases.push(this.fb.control(''));
    }

}