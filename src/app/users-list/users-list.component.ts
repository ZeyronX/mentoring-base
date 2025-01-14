import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

const ConsoleResponse = (response: unknown) => console.log(response);

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss'
})

export class UsersListComponent {
    readonly apiServiece = inject(HttpClient);
    
    constructor() {
        this.apiServiece.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(ConsoleResponse);
    }
}