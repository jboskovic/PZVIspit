import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { SortPipe } from './goals-list/sort.pipe';
import { AddGoalComponent } from './add-goal/add-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsListComponent,
    SortPipe,
    AddGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
