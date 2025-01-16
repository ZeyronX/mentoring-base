import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";

export interface User {
    id: number
    name: string
    surname: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
        phone: string
        website: string
        company: {
            name: string
            catchPhrase: string
            bs: string
        }
    };

}

@Injectable()

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [NgFor]
})

export class UsersListComponent {

    readonly apiService = inject(HttpClient)
    users: any = []

    constructor() {
        this.apiService.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(
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