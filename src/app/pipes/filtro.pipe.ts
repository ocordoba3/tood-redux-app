import { Pipe, PipeTransform } from '@angular/core';
import { filterAllow } from '../todos/filter/filter.actions';
import { Todo } from '../todos/models/todo';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filterAllow): Todo[] {

    switch (filtro) {

      case 'finished':
        return todos.filter(x => x.completado);

      case 'unfinished':
        return todos.filter(x => !x.completado);

      default:
        return todos;

    }
  }

}
