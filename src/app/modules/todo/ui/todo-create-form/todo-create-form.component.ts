import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.css'],
})
export class TodoCreateFormComponent {
  @Output()
  createTitle = new EventEmitter<string>()

  title = ''
  constructor() {}

  onSubmit() {
    if (this.title) {
      this.createTitle.emit(this.title)
      this.title = ''
    }
  }
}
