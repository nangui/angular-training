import { EmployeesService } from './employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {
  employeeList: string[];

  constructor(private empService: EmployeesService) {}


  ngOnInit(): void {
    this.employeeList = [...this.empService.employees];
  }
}
