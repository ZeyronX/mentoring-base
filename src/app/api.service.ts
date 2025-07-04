import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'  // ✅ Обязательно!
})


export class ApiService {
   readonly apiService = inject(HttpClient);
   getUsers() {
        return this.apiService.get('https://jsonplaceholder.typicode.com/users')
    }
    
    getTodos() {
       return this.apiService.get('https://jsonplaceholder.typicode.com/todos')
    }
}