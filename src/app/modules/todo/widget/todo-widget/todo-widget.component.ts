import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { StateInterface } from '../../store/todo/todo.reducer'
import {
  TodoCreateAction,
  TodoDeleteAction,
  TodoUpdateAction,
} from '../../store/todo/todo.actions'
import { TodoInterface } from '../../types/todo.interface'
import { Observable } from 'rxjs'
import { todoListSelector } from '../../store/todo/todo.selectors'

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css'],
})
export class TodoWidgetComponent {
  todolist$: Observable<TodoInterface[]> = this.store$.pipe(
    select(todoListSelector)
  )

  constructor(private store$: Store<StateInterface>) {}

  onCreate(title: string) {
    this.store$.dispatch(new TodoCreateAction({ title }))
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({ id }))
  }

  onUpdate(id: number) {
    this.store$.dispatch(new TodoUpdateAction({ id }))
  }
}
