import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; 

// const menuItems= ["Каталог","Строймаетриалы","Интсрументы","Электрика","Интерьер и одежда"];

function menuItemsIndex(aboutCompany: string) {
  return (aboutCompany);
};




const headerUpperItem1 = 'Главная';
const headerUpperItem2 = 'О компании';
const headerUpperItem3 = 'Каталог';

const aboutCompanyFN = (text:string) => text;
const aboutCompany = aboutCompanyFN('О компании');

const oldPages = [1,2,3,4,5];
const newPages:number[] = [5, 4, 3, 2, 1];

const menuItems :string[] = ['Каталог','Стройматериалы','Инструменты','Электрика','Интерьер и одежда']
const upperCaseMenuItems :string[] = menuItems.map (
  (item:string) => {
    return item.toUpperCase();
  }
)



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title = 'mentoring-first-project';
  
  isShowCatalog = true;
  
  readonly header_Upper_Item1 = 'ГЛАВНАЯ';
  
  readonly header_Upper_Item2 = 'О КОМПАНИИ';
  
  readonly header_Upper_Item3 = 'КАТАЛОГ';
  
  aboutCompany = aboutCompany;
  
  isShowBackgroundLarge = true;
  
  readonly newPages:number[] = newPages;
  
  isShowActiveButton = true;
  
  menuItems:string[] = upperCaseMenuItems;
  
  isUpperCase: boolean = true;
  
  
  ChangeMenuText():void {
    this.menuItems = upperCaseMenuItems.map(
    (item:string) => this.isUpperCase ? item.toLowerCase() :item.toUpperCase()
    )
    
    this.isUpperCase = !this.isUpperCase;
  }
  
  
}
