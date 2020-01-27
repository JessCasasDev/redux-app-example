import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { MultiplyAction, DivideAction } from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {
  counter: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }


  multiply() {
    const action = new MultiplyAction(5);
    this.store.dispatch(action);
  }

  divide() {
    const action = new DivideAction(5);
    this.store.dispatch(action);
  }
}
