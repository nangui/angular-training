import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeeInputComponent } from './employees/employee-input.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'input', component: EmployeeInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
