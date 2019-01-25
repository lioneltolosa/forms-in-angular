import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: 'data', component: DataComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: '**', component: DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
