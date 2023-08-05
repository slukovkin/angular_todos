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
    case todoActionsType.update:
      return {
        ...state,
        todolist: [
          ...state.todolist.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                isCompleted: !item.isCompleted,
              }
            }
            return item
          }),
        ],
      }

    case todoActionsType.delete:
      return {
        ...state,
        todolist: [
          ...state.todolist.filter((item) => item.id !== action.payload.id),
        ],
      }
    default:
      return state
  }
}
