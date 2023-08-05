import { Action } from '@ngrx/store'

export enum todoActionsType {
  create = '[TODO] create todo item',
  update = '[TODO] update todo item',
  delete = '[TODO] delete todo item',
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create
  constructor(public payload: { title: string }) {}
}

export class TodoUpdateAction implements Action {
  readonly type = todoActionsType.update
  constructor(public payload: { id: number }) {}
}
export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete
  constructor(public payload: { id: number }) {}
}

export type todoActions = TodoCreateAction | TodoUpdateAction | TodoDeleteAction
