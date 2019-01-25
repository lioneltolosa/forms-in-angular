import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';

@NgModule({
    declarations: [
        ReactiveFormsComponent,
        ProfileEditorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ReactiveFormsComponent,
        ProfileEditorComponent
    ]
})
export class FormModule { }
