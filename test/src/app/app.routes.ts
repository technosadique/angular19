import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: HeaderComponent,
        children: [
            { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
            { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
           
        ]
    }
]
