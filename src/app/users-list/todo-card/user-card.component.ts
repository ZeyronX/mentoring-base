import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-users-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true
})


export class UserCardComponent {
    @Input()
    users: any;
}