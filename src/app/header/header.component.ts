import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly router = inject(Router);

  isHomePage = false;
  isBackgroundVisible = true;

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.url === '/home' || event.url === '/';
      });
  }

   toggleBackgroundManually(): void {
    this.isBackgroundVisible = !this.isBackgroundVisible;
  }

  isShowCatalog = true;
  isUpperCase: boolean = true;

  aboutComponent: string[] = ['ГЛАВНАЯ', 'О КОМПАНИИ', 'КАТАЛОГ'];
  menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

  toogleCatalog = () => {
    this.aboutComponent = this.isShowCatalog
      ? this.aboutComponent.filter(item => item !== 'КАТАЛОГ')
      : [...this.aboutComponent, 'КАТАЛОГ'];
    this.isShowCatalog = !this.isShowCatalog;
  };

  ChangeMenuText(): void {
    this.menuItems = this.menuItems.map(item =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }

  getRoute(item: string): string {
    const routesMap: { [key: string]: string } = {
      'ГЛАВНАЯ': '/home',
      'О КОМПАНИИ': '/about',
      'КАТАЛОГ': '/catalog'
    };
    return routesMap[item] || '/';
  }
}