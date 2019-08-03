import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees: string[] = ['Serge', 'Lucas', 'Chris', 'Thomas'];

  addEmployee(name: string) {
    this.employees.push(name);
  }
}
