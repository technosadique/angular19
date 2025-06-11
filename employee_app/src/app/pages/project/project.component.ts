import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Project } from '../../project';
import { MasterService } from '../../master.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Employee } from '../../employee';
import { Projectemployee } from '../../projectemployee';

@Component({
  selector: 'app-project',
  imports: [NgIf, FormsModule, AsyncPipe, NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @ViewChild('myModel') employeeModel: ElementRef | undefined
  projectdata: Project[] = []
  projectemployeedata: Projectemployee[] = []
  employeeNameMap: { [id: string]: string } = {};
  projectNameMap: { [id: string]: string } = {};
  selectedProjectId: string | null = null;
  selectedisActive: any;
  role: string = '';
  assignedDate: string = '';
  empId: string = '';
  isAuthenticated: boolean = false;

  // get employeelist for dropdown
  employeeData$: Observable<Employee[]> = new Observable<Employee[]>();

  selectedproject: Project | undefined;
  selectedprojectemployee: Projectemployee | undefined;
  projectId: any;

  constructor(private masterservice: MasterService, private router: Router) {
    this.employeeData$ = this.masterservice.getemployees()
  }
  currentView: string = "List"

  // on page load
  ngOnInit() {
    this.masterservice.getprojects().subscribe((data: Project[]) => {
      this.projectdata = data
      console.log(data);
    })
  }


  // get all project employee list
  getallprojectemployees(id: string) {
    this.masterservice.getallprojectemployees().subscribe((data: Projectemployee[]) => {
      const record = data.filter(m => m.projectId == id)
      this.projectemployeedata = record;
      console.log(record);
    })

  }

  // get employee name by empid
  getEmployeeName(id: string) {
    if (!this.employeeNameMap[id]) {
      this.masterservice.find(id).subscribe((data: Employee) => {
        this.employeeNameMap[id] = data?.employeeName || id;
      });
      return 'Loading...'; // temporary text
    }
    return this.employeeNameMap[id];
  }

  // get project name by projectid
  getProjectName(id: string) {
    if (!this.projectNameMap[id]) {
      this.masterservice.findproject(id).subscribe((data: Project) => {
        this.projectNameMap[id] = data?.projectName || id;
      });
      return 'Loading...'; // temporary text
    }
    return this.projectNameMap[id];
  }


  // select single project by id
  selectProject(id: string) {
    this.masterservice.findproject(id).subscribe((data: Project) => {
      console.log(data);
      this.currentView = 'create'
      this.selectedproject = data
    })
  }

  // delete project by id
  deleteProject(id: string) {
    const confirmed = window.confirm("Are you sure to delete this record?");

    if (confirmed) {
      this.masterservice.deleteProject(id).subscribe((data: Project) => {
        if (data) {
          alert('project deleted successfully!');
          this.ngOnInit();
          //this.router.navigate(['/project']);
          //this.successMessage="Deleted successfully"
        }
      })
    }

  }


  // add new project
  addProject(project: Project) {

    if (!this.selectedproject) {
      this.masterservice.saveProject(project).subscribe((data: Project) => {
        alert('project created successfully!');
        this.currentView = 'List'
        console.log(data);
        //this.router.navigate(['/project']);
        this.ngOnInit();
        //this.successMessage="Added successfully"
      })
    }
    // update project
    else {
      const prodData = { ...project, id: this.selectedproject.id }
      this.masterservice.updateProject(prodData).subscribe((data) => {
        if (data) {
          alert('project updated successfully!');
          this.currentView = 'List'
          this.ngOnInit();
          //this.router.navigate(['/project']);
          //this.successMessage="Updated successfully"
        }
      })
    }
  }


  // open modal popup
  onAddEmployees(id: string) {
    this.getallprojectemployees(id)
    if (this.employeeModel) {
      this.empId = '';
      this.role = '';
      this.assignedDate = ''; // clear after add
      this.selectedProjectId = id;
      this.selectedisActive = true;
      this.employeeModel.nativeElement.style.display = 'block';
    }
  }

  // close modal popup
  closeModel() {
    if (this.employeeModel) {
      this.selectedProjectId = '';
      this.selectedisActive = '';
      this.employeeModel.nativeElement.style.display = 'none';
    }

  }


  // add project employee
  addNewProjectEmployee(projectemployee: Projectemployee) {
    this.masterservice.saveProjectEmployee(projectemployee).subscribe((data: Projectemployee) => {
      alert('project employee created successfully!');
      //this.router.navigate(['/project']);
      //this.successMessage="Added successfully"
    })

  }

  // Logout 
  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
