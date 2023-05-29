import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {path : 'login', component :LoginComponent},
  {path :'login-details', component :StepperComponent},
  {path : '', component :LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
