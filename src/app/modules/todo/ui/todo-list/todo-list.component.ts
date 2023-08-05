import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  todolist: TodoInterface[]

  @Output()
  delete = new EventEmitter<number>()
  @Output()
  update = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }
  onDelete(id: number){
    this.delete.emit(id)
  }

  onUpdate(id: number) {
    this.update.emit(id)
  }
  
}
