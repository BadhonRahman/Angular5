import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals = new BehaviorSubject<any>(['Sky Diving','Sea Diving']);
  goal = this.goals.asObservable();

  constructor() { }
  changeGoal(goal)
  {
    //this.goal.next(goal);
  }
}
