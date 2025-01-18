import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { MainComponent } from './main/main.component';
import { UsersApiService } from './users-api.service';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent
    },
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'todos',
        component: UsersApiService
    }
];
