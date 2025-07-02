import { CommonModule, NgFor } from "@angular/common";
import { Component, inject, Injectable } from "@angular/core";
import { ApiService } from "../api.service"; 
import { UserCardComponent } from "./user-card/user-card.component";
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar'; // ✅ Добавлено

@Injectable()

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
    imports: [CommonModule,NgFor, UserCardComponent, MatListModule, MatIconModule, MatButtonModule]
})

export class UsersListComponent {
    readonly usersApiService = inject(ApiService);
    readonly snackBar = inject(MatSnackBar);
    skeletonArray = Array(6);
    loading = true;
    users: any = [];

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.users = response;
                this.loading = false;
            }
        );
    }

      onDeleteUser(id: number) {
    const deleted = this.users.find((u: any) => u.id === id);
    this.users = this.users.filter((user: { id: number; }) => user.id !== id);
    this.snackBar.open('Пользователь удалён', 'Отмена', { duration: 3000 })
      .onAction().subscribe(() => deleted && this.users.unshift(deleted));
  }
}