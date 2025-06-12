import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../master.service';
import { Employee } from '../../employee';
import { Project } from '../../project';
import { Projectemployee } from '../../projectemployee';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isAuthenticated: boolean = false;
  empcount: any = ''
  projectcount: any = ''
  projectemployeecount: any = ''
  constructor(private router: Router, private masterservice: MasterService) { }


  ngOnInit() {
    // Count Employees
    this.masterservice.getemployees().subscribe((data: Employee[]) => {
      this.empcount = data.length
      console.log(data.length);
    })

    // Count Projects
    this.masterservice.getprojects().subscribe((data: Project[]) => {
      this.projectcount = data.length
      console.log(data);
    })

    // Count Project Employees
    this.masterservice.getprojectemployees().subscribe((data: Projectemployee[]) => {
      this.projectemployeecount = data.length
      console.log(data);
    })

  }


  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
