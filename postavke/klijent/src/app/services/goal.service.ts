import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Goal } from '../models/goal.model';
import { Step } from '../models/step.model';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private readonly goalsUrl = 'http://localhost:3000/goals/';
  private readonly stepsUrl = 'http://localhost:3000/steps/';

  constructor(private http: HttpClient, router: Router) { }

  public getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.goalsUrl);

  }
  public getGoalById(id: String): Observable<Goal> {
    return this.http.get<Goal>(this.goalsUrl + id);
  }
  public getStepsByGoal(id: String): Observable<Step[]> {
    return this.http.get<Step[]>(this.stepsUrl + id);
  }
  public addGoal(data) {
    return this.http.post<Goal>(this.goalsUrl, data);
  }
  public addStep(data) {
    return this.http.post<Step>(this.stepsUrl, data);
  }
}
