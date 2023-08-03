import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateInterface } from '../../store/todo/todo.reducer';
import { TodoCreateAction } from '../../store/todo/todo.actions';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent {

  constructor(private store: Store<StateInterface>) { }

  onCreate(title: string){
    this.store.dispatch(new TodoCreateAction({title}))   
  }
}
