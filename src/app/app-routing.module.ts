import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSampleComponent } from './form-sample/form-sample.component';

const routes: Routes = [
  {path:'forms',component:FormSampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
