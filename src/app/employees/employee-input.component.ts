import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.css']
})
export class EmployeeInputComponent {
  enteredEmployeeName: string;

  constructor(private empService: EmployeesService) {}

  onCreateEmployee() {
    this.empService.addEmployee(this.enteredEmployeeName);
    this.enteredEmployeeName = '';
  }
}
