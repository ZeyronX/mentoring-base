import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { MainComponent } from './main/main.component';
import { ApiService } from './api.service'; 

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
      {  path: 'home',
         component: MainComponent
    },
    {
        path: 'users',
        component: UsersListComponent,
        pathMatch: 'full',
    },
];
