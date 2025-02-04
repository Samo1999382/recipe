import { MealComponent } from './meals/meal/meal/meal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: 'all', component: MealComponent},
  {path: 'category/:id', component: MealComponent},
];
