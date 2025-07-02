import { animate, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: 'app-users-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'], // ← исправлено: styleUrl → styleUrls
  standalone: true,
  imports: [
    MatCard, MatCardActions, MatCardContent,
    MatCardTitle, MatCardHeader, MatCardSubtitle, MatIcon
  ],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})

export class UserCardComponent {
    @Input()
    user: any;

    @Output()
    deleteUser = new EventEmitter<number>();

    onDeleteUser(userId: number) {
        this.deleteUser.emit(userId);
    }
}