import { Component, OnInit } from '@angular/core';
import { MealCatsService } from './meal-cats.service';
import { MealComponent } from './meal/meal/meal.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [MealComponent, RouterLink, RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent implements OnInit {
  cats: any[] = [];
  selected = "";

  constructor(private MealCatsService: MealCatsService, private router: Router) {}

  ngOnInit() {
    this.MealCatsService.getCats().subscribe(
      (response) => {
        this.cats = response.meals;
      }
    );
  }

  selectCategory(category: string) {
    if (category == ''){
      this.selected = '';
    }else{
      this.selected = category;
    }
  }
}
