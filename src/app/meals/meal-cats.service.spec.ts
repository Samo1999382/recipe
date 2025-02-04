import { TestBed } from '@angular/core/testing';

import { MealCatsService } from './meal-cats.service';

describe('MealCatsService', () => {
  let service: MealCatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealCatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
