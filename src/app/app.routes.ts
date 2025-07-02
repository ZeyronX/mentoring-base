import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { MainComponent } from './main/main.component';
import { ApiService } from './api.service'; 
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full',
    },
    {  path: 'home',
         component: MainComponent,
         pathMatch: 'full',
    },
    {
        path: 'users',
        component: UsersListComponent,
        pathMatch: 'full',
    },
    {
        path: 'todos',
        component: TodoListComponent,
        pathMatch: 'full',
    },
];
