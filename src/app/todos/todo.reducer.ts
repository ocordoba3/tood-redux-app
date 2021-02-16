import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Recolectar gemas del infinito'),
  new Todo('Matar a Thanos'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.agregar, (state, { texto }) => [...state, new Todo(texto)]),

  on(actions.completado, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),

  on(actions.editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        }
      } else {
        return todo;
      }
    });
  }),

  on(actions.eliminar, (state, { id }) => state.filter(x => x.id !== id)),

  on(actions.markAll, (state, { completado }) => state.map(todo => {
    return {
      ...todo,
      completado: completado
    }
  })
  ),

  on(actions.eliminarCompletadas, (state) => state.filter(x => !x.completado)),
)

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}