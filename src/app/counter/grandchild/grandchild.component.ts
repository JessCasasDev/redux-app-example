import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent implements OnInit {
  counter: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  reset() {
    const action = new ResetAction();
    this.store.dispatch(action);
  }
}
