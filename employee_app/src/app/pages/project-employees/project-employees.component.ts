import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projectemployee } from '../../projectemployee';
import { MasterService } from '../../master.service';
import { Project } from '../../project';
import { Employee } from '../../employee';
@Component({
  selector: 'app-project-employees',
  imports: [],
  templateUrl: './project-employees.component.html',
  styleUrl: './project-employees.component.css'
})
export class ProjectEmployeesComponent {

  isAuthenticated: boolean = false;
  projectemployeedata: Projectemployee[] = []
  employeeNameMap: { [id: string]: string } = {};
  projectNameMap: { [id: string]: string } = {};
  
  constructor(private masterservice: MasterService, private router: Router) { }

  // Initialize and Load Project Employee List
  ngOnInit() {
    this.masterservice.getallprojectemployees().subscribe((data: Projectemployee[]) => {
      this.projectemployeedata = data
      console.log(data);
    })
  }

  // Retrieve and Cache Employee Name by ID
  getEmployeeName(id: string) {
    if (!this.employeeNameMap[id]) {
      this.masterservice.find(id).subscribe((data: Employee) => {
        this.employeeNameMap[id] = data?.employeeName || id;
      });
      return 'Loading...'; // temporary text
    }
    return this.employeeNameMap[id];
  }

  //Retrieve and Cache Project Name by ID
  getProjectName(id: string) {
    if (!this.projectNameMap[id]) {
      this.masterservice.findproject(id).subscribe((data: Project) => {
        this.projectNameMap[id] = data?.projectName || id;
      });
      return 'Loading...'; // temporary text
    }
    return this.projectNameMap[id];
  }


  // Delete employee
  delete(id: string) {
    const confirmed = window.confirm("Are you sure to delete this record?");

    if (confirmed) {
      this.masterservice.deleteProjectEmp(id).subscribe((data: Projectemployee) => {
        if (data) {
          this.ngOnInit()
          //this.successMessage="Deleted successfully"
        }
      })
    }

  }


  // Logout
  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


}
