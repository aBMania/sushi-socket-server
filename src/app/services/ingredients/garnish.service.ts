import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IngredientService } from './ingredient.service';
import { Avocado } from '../../model/garnish/avocado';
import { Garnish } from '../../model/garnish/garnish';
import { Cheese } from '../../model/garnish/cheese';
import { Cucumber } from '../../model/garnish/cucumber';
import { Strawberry } from '../../model/garnish/strawberry';

@Injectable()
export class GarnishService {
  public stash: GarnishStash;

  constructor(public ingredientService: IngredientService) {
    const avocadoStream$ = this.ingredientService.getIngredientStream<Avocado>(Avocado, 'avocado');
    const cheeseStream$ = this.ingredientService.getIngredientStream<Cheese>(Cheese, 'cheese');
    const cucumberStream$ = this.ingredientService.getIngredientStream<Cucumber>(Cucumber, 'cucumber');
    const strawberryStream$ = this.ingredientService.getIngredientStream<Strawberry>(Strawberry, 'strawberry');

    this.stash = {
      avocado$: IngredientService.stashFromStream(avocadoStream$),
      cheese$: IngredientService.stashFromStream(cheeseStream$),
      cucumber$: IngredientService.stashFromStream(cucumberStream$),
      strawberry$: IngredientService.stashFromStream(strawberryStream$),
      all$: null
    };

    this.stash.all$ = IngredientService.combineStashes(
      this.stash.avocado$,
      this.stash.cheese$,
      this.stash.cucumber$,
      this.stash.strawberry$
    );
  }
}

export interface GarnishStash {
  all$: Observable<Garnish[]>
  avocado$: Observable<Avocado[]>;
  cheese$: Observable<Cheese[]>;
  cucumber$: Observable<Cucumber[]>;
  strawberry$: Observable<Strawberry[]>;
}

