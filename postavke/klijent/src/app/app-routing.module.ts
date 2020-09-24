import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { AddGoalComponent } from './add-goal/add-goal.component';


const routes: Routes = [
  { path: '', component: GoalsListComponent },
  { path: 'add-goal', component: AddGoalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
