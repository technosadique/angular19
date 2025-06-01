import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: '', pathMatch:'full',component: LoginComponent },
    { path: 'index', component: IndexComponent,canActivate: [AuthGuard] },
    { path: 'create', component: CreateComponent,canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: ':postId/edit', component: EditComponent,canActivate: [AuthGuard] }

];
