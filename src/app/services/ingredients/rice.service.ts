import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IngredientService } from './ingredient.service';
import { Rice } from '../../model/rice';
@Injectable()

export class RiceService {
  public rice$: Observable<Rice>;

  constructor(public ingredientService: IngredientService) {

    this.rice$ = this.ingredientService.ingredient$
      .filter(food => food.name === 'rice');
  }
}
