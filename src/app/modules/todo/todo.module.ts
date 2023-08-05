import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { TODO_REDUCER_NODE, todoReducer } from './store/todo/todo.reducer'
import { RouterModule } from '@angular/router'
import { routes } from './todo-routes'
import { TodoPageComponent } from './pages/todo-page/todo-page.component'
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component'
import { TodoCreateFormComponent } from './ui/todo-create-form/todo-create-form.component'
import { FormsModule } from '@angular/forms'
import { TodoListComponent } from './ui/todo-list/todo-list.component'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(routes),
  ],
  declarations: [TodoPageComponent, TodoWidgetComponent, TodoCreateFormComponent, TodoListComponent]
})
export class TodoModule {}
