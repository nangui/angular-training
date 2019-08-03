import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employeesChanged = new Subject<string[]>();
  employees: string[] = [];

  constructor(private http: HttpClient) {}

  fetchEmployees() {
    this.http.get<any>('https://swapi.co/api/people')
      .pipe(map( resData  => {
        return resData.results.map(character => character.name);
      }))
      .subscribe(transformedData => {
        this.employeesChanged.next(transformedData);
      });
  }

  addEmployee(name: string) {
    this.employees.push(name);
    this.employeesChanged.next(this.employees);
  }

  removeEmployee(name: string) {
    this.employees = this.employees.filter(emp => {
      return emp !== name;
    });
    this.employeesChanged.next(this.employees);
  }
}
