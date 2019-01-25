import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { InputComponent } from './components/input/input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    InputComponent,
    NavbarComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
