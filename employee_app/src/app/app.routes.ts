import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectEmployeesComponent } from './pages/project-employees/project-employees.component';
import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
            { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
            { path: 'project-employees', component: ProjectEmployeesComponent, canActivate: [AuthGuard] }
        ]
    }
];
