import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { ReactiveFormsComponent } from './form/components/reactive-forms/reactive-forms.component';
import { ProfileEditorComponent } from './form/components/profile-editor/profile-editor.component';
import { CountriesComponent } from './form/components/countries/countries.component';

const routes: Routes = [
  { path: 'data', component: DataComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'profile-editor', component: ProfileEditorComponent },
  { path: 'countries', component: CountriesComponent },
  { path: '**', component: DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
