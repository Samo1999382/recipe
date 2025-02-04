import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealCatsService {
  private baseURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  constructor(private http: HttpClient) { }

  getCats(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }
}
