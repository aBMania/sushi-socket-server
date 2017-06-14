import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Fish } from '../../model/fishes/fish';
import { Salmon } from '../../model/fishes/salmon';
import { IngredientService } from './ingredient.service';
import { Tuna } from '../../model/fishes/tuna';
@Injectable()

export class FishService {
  public fish$: Observable<Fish>;

  public salmon$: Observable<Salmon>;
  public tuna$: Observable<Tuna>;

  constructor(public ingredientService: IngredientService) {

    this.salmon$ = this.ingredientService.ingredient$
      .filter(food => food.name === 'salmon');

    this.tuna$ = this.ingredientService.ingredient$
      .filter(food => food.name === 'tuna');

    this.fish$ = Observable.merge(this.salmon$, this.tuna$);
  }
}
