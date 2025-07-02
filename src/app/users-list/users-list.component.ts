import { NgFor } from "@angular/common";
import { Component, inject, Injectable } from "@angular/core";
import { ApiService } from "../api.service"; 
import { UserCardComponent } from "./user-card/user-card.component";

@Injectable()

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [NgFor, UserCardComponent]
})

export class UsersListComponent {
    readonly usersApiService = inject(ApiService)
    users: any = []

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.users = response;
                console.log('USERS', this.users);
            }
        )
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            (item: { id: number; }) => item.id !== id
        )
    }

}