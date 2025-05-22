import { Routes } from '@angular/router';
import { EditComponent } from './post/edit/edit.component';
import { CreateComponent } from './post/create/create.component';
import { ViewComponent } from './post/view/view.component';
import { IndexComponent } from './post/index/index.component';

export const routes: Routes = [
      { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
      { path: 'post/index', component: IndexComponent },
       { path: '', component: IndexComponent },
      { path: 'post/:postId/view', component: ViewComponent },
      { path: 'post/create', component: CreateComponent },
      { path: 'post/:postId/edit', component: EditComponent } 
];
