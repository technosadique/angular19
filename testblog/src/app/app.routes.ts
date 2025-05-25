import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
{path:'index',component:IndexComponent},
{path:'create',component:CreateComponent},
{ path: ':postId/edit', component: EditComponent }

];
