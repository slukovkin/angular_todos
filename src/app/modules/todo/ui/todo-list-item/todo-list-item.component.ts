import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TodoInterface } from '../../types/todo.interface'

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  @Input()
  todo: TodoInterface

  @Output()
  delete = new EventEmitter<number>()
  @Output()
  update = new EventEmitter<number>()

  constructor() {}

  ngOnInit() {}

  onDelete() {
    this.delete.emit()
  }

  onUpdate() {
    this.update.emit()
  }
}
