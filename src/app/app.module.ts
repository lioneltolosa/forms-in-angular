import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { InputComponent } from './components/input/input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsComponent } from './form/components/reactive-forms/reactive-forms.component';
import { ProfileEditorComponent } from './form/components/profile-editor/profile-editor.component';
import { CountriesComponent } from './form/components/countries/countries.component';
import { PersonalDataComponent } from './form/components/personal-data/personal-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    InputComponent,
    NavbarComponent,
    ReactiveFormsComponent,
    ProfileEditorComponent,
    CountriesComponent,
    PersonalDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
