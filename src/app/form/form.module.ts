import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { CountriesComponent } from './components/countries/countries.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { InputGenericComponent } from './shared/input-generic/input-generic.component';

@NgModule({
    declarations: [
        ReactiveFormsComponent,
        ProfileEditorComponent,
        CountriesComponent,
        PersonalDataComponent,
        InputGenericComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [
        ReactiveFormsComponent,
        ProfileEditorComponent,
        CountriesComponent,
        PersonalDataComponent,
        InputGenericComponent
    ]
})
export class FormModule { }
