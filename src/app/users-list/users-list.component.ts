import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./todo-card/user-card.component";


@Injectable()

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [NgFor, UserCardComponent]
})

export class UsersListComponent {
    readonly userApiServiec = inject(UsersApiService)
    users: any = []

    constructor() {
        this.userApiServiec.getUsers().subscribe(
            (response: any) => {
                this.users = response;
                console.log('USERS: ', this.users)

            })

    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            (item: { id: number; }) => item.id !== id
        )
    }

}