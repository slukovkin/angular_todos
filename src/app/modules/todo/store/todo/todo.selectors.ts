import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StateInterface, TODO_REDUCER_NODE } from "./todo.reducer";

export const todoFeatureSelector = createFeatureSelector<StateInterface>(TODO_REDUCER_NODE)

export const todoListSelector = createSelector(
    todoFeatureSelector,
    state => state.todolist
)