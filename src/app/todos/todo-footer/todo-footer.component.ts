import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filterAllow, setFilter } from '../filter/filter.actions';
import { eliminarCompletadas } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: filterAllow = 'all';
  filters: filterAllow[] = ['all', 'finished', 'unfinished'];
  unfinishedCounter = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('filter').subscribe(filtro => this.actualFilter = filtro);
    this.store.subscribe(store => {

      this.actualFilter = store.filter;
      this.unfinishedCounter = store.todos.filter(todos => !todos.completado).length;

    })
  }

  changeFilter(filter: filterAllow) {
    this.store.dispatch(setFilter({ filter: filter }))
  }

  deleteCompletToDos() {
    this.store.dispatch(eliminarCompletadas());
  }
}
