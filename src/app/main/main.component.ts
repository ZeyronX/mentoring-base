import { Component } from "@angular/core";
import { NgFor } from "@angular/common";



@Component({
    selector: "app-main-component",
    standalone: true,
    imports: [NgFor],
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss"
})

export class MainComponent {
    
     isShowBackroundLarge:boolean = true;
     
     oldPages = [1,2,3,4,5];
     readonly newPages:number[] = [5, 4, 3, 2, 1];
}