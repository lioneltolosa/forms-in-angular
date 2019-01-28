import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { REGEX_NAME } from '../../../components/constants/index';

@Component({
    selector: 'app-personal-data',
    templateUrl: './personal-data.component.html',
    styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

    personalData = this.formBuilder.group({
        firstName: [null, Validators.compose([Validators.required,
                          Validators.minLength(5),
                          Validators.pattern(REGEX_NAME)])],
        lastName:  [null, Validators.compose([Validators.required,
                          Validators.minLength(5),
                          Validators.pattern(REGEX_NAME)])]
    });

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
    }

    onSubmit() {
        console.warn(this.personalData.value);
    }

}
