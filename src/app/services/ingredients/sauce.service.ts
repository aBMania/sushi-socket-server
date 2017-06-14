import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Sauce } from '../../model/sauce/sauce';
import { IngredientService } from './ingredient.service';
import { Wasabi } from '../../model/sauce/wasabi';
import { Soja } from '../../model/sauce/soja';
@Injectable()

export class SauceService {
  public sauce$: Observable<Sauce>;

  public wasabi$: Observable<Wasabi>;
  public soja$: Observable<Soja>;

  constructor(public ingredientService: IngredientService) {

    this.wasabi$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'wasabi');

    this.soja$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'soja');

    this.sauce$ = Observable.merge(this.wasabi$, this.soja$);
  }
}
