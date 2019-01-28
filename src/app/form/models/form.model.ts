import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { REGEX_NAME } from '../../components/constants/index';

@Injectable()

export class FormModel {
    get model() {
        return new FormGroup({
            person: new FormGroup(this.personalData())
        });
    }

    private personalData() {
        return {
            firstName: new FormControl ('', [ Validators.required,
                                              Validators.minLength(3),
                                              Validators.pattern(REGEX_NAME)
                                            ]),
            lastName: new FormControl  ('', [ Validators.required,
                                              Validators.minLength(3),
                                              Validators.pattern(REGEX_NAME)
                                            ])
        };
      }

    // constructor(private formBuilder: FormBuilder) { }
}
