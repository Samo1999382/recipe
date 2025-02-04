import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
private baseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

  constructor(private http: HttpClient) { }

  getMeals(category: any): Observable<any> {
    if (category == ''){
      return this.http.get<any>('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    }else{
      return this.http.get<any>(`${this.baseURL}${category}`);
    }
  }
}
