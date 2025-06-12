import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { Project } from './project';
import { Projectemployee } from './projectemployee';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getemployees(): Observable<Employee[]> {
    const url = "http://localhost:3000/employee"
    return this.http.get<Employee[]>(url)
  }

  saveEmp(employee: Employee): Observable<Employee> {
    const url = "http://localhost:3000/employee"
    return this.http.post<Employee>(url, employee)
  }

  updateEmp(employee: Employee): Observable<Employee> {
    const url = "http://localhost:3000/employee"
    return this.http.put<Employee>(url + "/" + employee.id, employee)
  }

  deleteEmp(id: string): Observable<Employee> {
    const url = "http://localhost:3000/employee"
    return this.http.delete<Employee>(url + "/" + id)
  }
  
  findEmp(id: string): Observable<Employee> {
    const url = "http://localhost:3000/employee"
    return this.http.get<Employee>(url + "/" + id)
  }

  getprojects(): Observable<Project[]> {
    const url = "http://localhost:3000/project"
    return this.http.get<Project[]>(url)
  }

  updateProject(project: Project): Observable<Project> {
    const url = "http://localhost:3000/project"
    return this.http.put<Project>(url + "/" + project.id, project)
  }

  deleteProject(id: string): Observable<Project> {
    const url = "http://localhost:3000/project"
    return this.http.delete<Project>(url + "/" + id)
  }

  saveProject(project: Project): Observable<Project> {
    const url = "http://localhost:3000/project"
    return this.http.post<Project>(url, project)
  }

  findProject(id: string): Observable<Project> {
    const url = "http://localhost:3000/project"
    return this.http.get<Project>(url + "/" + id)
  }

  saveProjectEmployee(projectemployee: Projectemployee): Observable<Projectemployee> {
    const url = "http://localhost:3000/projectemployee"
    return this.http.post<Projectemployee>(url, projectemployee)
  }

  getprojectemployees(): Observable<Projectemployee[]> {
    const url = "http://localhost:3000/projectemployee"
    return this.http.get<Projectemployee[]>(url)
  }

  deleteProjectEmp(id: string): Observable<Projectemployee> {
    const url = "http://localhost:3000/projectemployee"
    return this.http.delete<Projectemployee>(url + "/" + id)
  }

  getdepartments(): Observable<Department[]> {
    const url = "http://localhost:3000/department"
    return this.http.get<Department[]>(url)
  }

  findDept(id: string): Observable<Department> {
    const url = "http://localhost:3000/department"
    return this.http.get<Department>(url + "/" + id)
  }

}