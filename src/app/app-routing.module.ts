import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [{
  path: 'login', component: LoginComponent
},
{
  path: 'dashboard', component: DashboardComponent
},
{
path: 'task-list', component: TaskListComponent
},
{
path: 'task-details', component: TaskDetailsComponent
},
{
  path: 'nav', component: NavComponent
},
{
  path: '', redirectTo: 'task-list',  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
