import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isShowCatalog = true;

  isUpperCase: boolean = true;

  aboutComponent: string[] = ['ГЛАВНАЯ', 'О КОМПАНИИ', 'КАТАЛОГ'];

  menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

  isShowBackgroundLarge = true;

  isShowActiveButton = true;

  showCatalog: string = this.aboutComponent[0]

  toogleCatalog = () => {
    if (this.isShowCatalog) {
      this.aboutComponent.pop()
    }
    else {
      this.aboutComponent.push('КАТАЛОГ')
    }

    this.isShowCatalog = !this.isShowCatalog

  }

  ChangeMenuText(): void {
    this.menuItems = this.menuItems.map(
      (item: string) => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )

    this.isUpperCase = !this.isUpperCase;
  }

}
