import { MealService } from './meal.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-meal',
  imports: [RouterLink],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.scss'
})
export class MealComponent implements OnChanges {
  @Input() category: string = '';
  meals: any[] = [];

    constructor(private http: HttpClient, private MealService: MealService) {}

    ngOnChanges() {
      if (this.category) {
        this.MealService.getMeals(this.category).subscribe(
          (response) => {
            this.meals = response.meals;
          }
        );
      }else{
        this.MealService.getMeals(this.category).subscribe(
          (response) => {
            this.meals = response.meals;
          }
        );
      }
    }
}
