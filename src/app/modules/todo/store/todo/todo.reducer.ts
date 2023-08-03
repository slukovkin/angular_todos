import { TodoInterface } from '../../types/todo.interface'
import { todoActions, todoActionsType } from './todo.actions'

export const TODO_REDUCER_NODE = 'todo'

export interface StateInterface {
  idIncrement: number
  todolist: TodoInterface[]
}

const initialState: StateInterface = {
  idIncrement: 1,
  todolist: [],
}

export const todoReducer = (state = initialState, action: todoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todolist: [
          ...state.todolist,
          {
            id: state.idIncrement,
            title: action.payload.title,
            isCompleted: false,
          },
        ],
      }
    default:
      return state
  }
}
