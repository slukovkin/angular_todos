import { Component, Input, OnInit } from '@angular/core'
import { TodoInterface } from '../../types/todo.interface'

@Component({
  selector: 'app-todo-list-item-edit',
  templateUrl: './todo-list-item-edit.component.html',
  styleUrls: ['./todo-list-item-edit.component.css'],
})
export class TodoListItemEditComponent implements OnInit {
  title = ''

  @Input()
  todo: TodoInterface

  constructor() {}

  ngOnInit() {
    this.title = this.todo.title
  }
}
