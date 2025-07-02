import { Component, inject, TemplateRef } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule, NgFor, NgIfContext } from '@angular/common';
import { TodoCardComponent } from "./todo-card/todo-card.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, NgFor, TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  readonly apiService = inject(ApiService);
  skeletonArray = Array(6);
  todos: any = [];
  todoList: TemplateRef<NgIfContext<boolean>> | null | undefined;
  loading = true;

  constructor() {
    this.apiService.getTodos().subscribe(
      (response: any) => {
        this.todos = response;
        this.loading = false;
      }
    )
  }

  onDeleteTodo(id: number) {
  this.todos = this.todos.filter(
    (item: { id: number }) => item.id !== id
    );
  }
}
