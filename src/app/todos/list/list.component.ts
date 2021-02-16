import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filterAllow } from '../filter/filter.actions';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Todo[] = [];
  actualFilter: filterAllow;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('todos').subscribe( todos => this.todos = todos)
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.actualFilter = state.filter;
    });

  }

}
