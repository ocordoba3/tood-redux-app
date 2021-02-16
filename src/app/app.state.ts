import { ActionReducerMap } from "@ngrx/store";
import { filterAllow } from "./todos/filter/filter.actions";
import { filterReducer } from "./todos/filter/filter.reducer";
import { Todo } from "./todos/models/todo";
import { todoReducer } from "./todos/todo.reducer";


export interface AppState {
    todos: Todo[],
    filter: filterAllow
}

export const appReducers: ActionReducerMap<AppState> = {

    todos: todoReducer,
    filter: filterReducer
    
}