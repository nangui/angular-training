import { EmployeesService } from './employees.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit, OnDestroy {

  employeeList: string[];
  private employeesListSubs: Subscription;

  constructor(private empService: EmployeesService) {}


  ngOnInit(): void {
    this.loadEmployees();
  }

  onRemoveEmployee(name: string) {
    this.empService.removeEmployee(name);
  }

  loadEmployees() {
    this.employeeList = [...this.empService.employees];
    this.employeesListSubs = this.empService.employeesChanged.subscribe(employees => {
      this.employeeList = employees;
    });
    this.empService.fetchEmployees();
  }

  ngOnDestroy(): void {
    this.employeesListSubs.unsubscribe();
  }
}
