import { Component, OnInit } from '@angular/core';
import { GoalService } from '../services/goal.service';
import { Goal } from '../models/goal.model';
import { Step } from '../models/step.model';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {
  public goals: Goal[] = [];
  public selectedImportance: string = '0';
  public selectedComplexitiy: string = '0';
  constructor(private goalService: GoalService) {
    this.goalService.getGoals().subscribe((gs: Goal[]) => {
      this.goals = gs;
      this.goals.forEach((g: Goal) => {
        this.goalService.getStepsByGoal(g._id).subscribe((ss => g.koraci = ss));
      })
    });

  }
  public getStyle(goal: Goal) {
    let pozadina = '';
    if (goal.vaznost == 1) {
      pozadina = 'yellow';
    } else if (goal.vaznost == 2) {
      pozadina = 'orange';
    } else {
      pozadina = 'red';
    }
    return { 'background-color': pozadina };
  }
  public showGoal(goal: Goal) {
    document.getElementById(goal._id).style.display = 'block';
  }
  public filteredGoals() {
    let importance = Number.parseInt(this.selectedImportance);
    /* let complexity = 0;
     switch (this.selectedComplexitiy) {
       case 'simple': complexity = 1; break;
       case 'medium': complexity = 2; break;
       case 'hard': complexity = 3; break;
       default: complexity = 0; break;
     }*/
    if (this.goals != []) {
      return this.goals.filter((g: Goal) => { return (g.vaznost === importance || importance === 0); });
      /*.filter((g: Goal) => {
        let numebrOfSteps = this.maxNumberOfSteps(g._id);
        if (complexity == 1 && numebrOfSteps <= 1) {
          return true;
        } else if (complexity == 2 && numebrOfSteps > 1 && numebrOfSteps < 4) {
          return true;
        } else if (complexity == 3 && numebrOfSteps >= 4) {
          return true;
        } else if (complexity == 0) {
          return true;
        } else {
          return false;
        }
      });*/
    } else {
      return [];
    }
  }

  public onSelectedImportance(event: Event) {
    this.selectedImportance = (<HTMLSelectElement>event.target).value;
  }
  public onSelectedComplexity(event: Event) {
    this.selectedComplexitiy = (<HTMLSelectElement>event.target).value;
  }


  ngOnInit(): void {
    this.goals = [];
    this.goals.forEach(g => g.koraci = []);
  }

}
