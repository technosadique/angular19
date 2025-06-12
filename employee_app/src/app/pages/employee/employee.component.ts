import { Component, signal } from '@angular/core';
import { Employee } from '../../employee';
import { MasterService } from '../../master.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../../department';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [FormsModule, AsyncPipe, NgFor],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})



export class EmployeeComponent {
  empdata: Employee[] = []
  selectedemp: Employee | undefined;
  isSidePanelOpen = signal<boolean>(false)
  isAuthenticated: boolean = false
  deptNameMap: { [id: string]: string } = {};

  // get department list for dropdown
  departmentData$: Observable<Department[]> = new Observable<Department[]>();

  constructor(private masterservice: MasterService, private router: Router) {

    this.departmentData$ = this.masterservice.getdepartments()
  }

  // Initialize and Load Employee List from Service
  ngOnInit() {
    this.masterservice.getemployees().subscribe((data: Employee[]) => {
      this.empdata = data
      this.isSidePanelOpen.set(false);
      console.log(data);
    })
  }

  // Fetch and Cache Department Name by ID
  getDeptName(id: string) {
    if (!this.deptNameMap[id]) {
      this.masterservice.findDept(id).subscribe((data: Department) => {
        this.deptNameMap[id] = data?.name || id;
      });
      return 'Loading...'; // temporary text
    }
    return this.deptNameMap[id];
  }


  // adding and updating employee records
  addEmp(employee: Employee) {

    if (!this.selectedemp) {
      this.masterservice.saveEmp(employee).subscribe((data: Employee) => {
        console.log(data);
        this.ngOnInit()
        //this.successMessage="Added successfully"
      })
    }
    else {
      const prodData = { ...employee, id: this.selectedemp.id }
      this.masterservice.updateEmp(prodData).subscribe((data) => {
        if (data) {
          this.ngOnInit()
          //this.successMessage="Updated successfully"
        }
      })
    }
  }

  // Fetch Employee by ID and Open Side Panel
  selectEmp(id: string) {
    this.masterservice.findEmp(id).subscribe((data: Employee) => {
      this.isSidePanelOpen.set(true);
      this.selectedemp = data
    })
  }

  // Delete employee
  deleteEmp(id: string) {
    const confirmed = window.confirm("Are you sure to delete this record?");

    if (confirmed) {
      this.masterservice.deleteEmp(id).subscribe((data: Employee) => {
        if (data) {
          this.ngOnInit()
          //this.successMessage="Deleted successfully"
        }
      })
    }

  }

  // Open Side Panel for Adding New Record
  addNew() {
    this.isSidePanelOpen.set(true);
  }

  // Close Side Panel
  close() {
    this.isSidePanelOpen.set(false);
  }

  // Logout
  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
