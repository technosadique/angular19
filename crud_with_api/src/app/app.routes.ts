import { Routes } from '@angular/router';
import { EditComponent } from './post/edit/edit.component';
import { CreateComponent } from './post/create/create.component';
import { ViewComponent } from './post/view/view.component';
import { IndexComponent } from './post/index/index.component';
import { LoginComponent } from './post/login/login.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
      { path: 'post', redirectTo: 'post/index', pathMatch: 'full' },
      { path: 'post/index', component: IndexComponent, canActivate: [AuthGuard] },
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'post/:postId/view', component: ViewComponent, canActivate: [AuthGuard] },
      { path: 'post/create', component: CreateComponent, canActivate: [AuthGuard] },
      { path: 'post/:postId/edit', component: EditComponent, canActivate: [AuthGuard] }
];
