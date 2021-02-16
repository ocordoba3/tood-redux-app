import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { markAll } from '../todo.actions';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  chkAll = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  markAll() {
    this.chkAll = !this.chkAll;

    this.store.dispatch(markAll({completado: this.chkAll}));
  }

}
