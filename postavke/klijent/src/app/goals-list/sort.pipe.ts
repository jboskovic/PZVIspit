import { Pipe, PipeTransform } from '@angular/core';
import { Goal } from '../models/goal.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(goals: Goal[]): Goal[] {
    if (goals == null) {
      return [];
    }
    return goals.sort((a, b) => (b.vaznost - a.vaznost));
  }

}
