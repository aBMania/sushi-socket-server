import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Sauce } from '../../model/sauce/sauce';
import { IngredientService } from './ingredient.service';
import { Cucumber } from '../../model/garnish/cucumber';
import { Avocado } from '../../model/garnish/avocado';
import { Cheese } from '../../model/garnish/cheese';
@Injectable()

export class GarnishService {
  public garnish$: Observable<Sauce>;

  public avocado$: Observable<Avocado>;
  public cucumber$: Observable<Cucumber>;
  public cheese$: Observable<Cheese>;

  constructor(public ingredientService: IngredientService) {

    this.avocado$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'avocado');

    this.cucumber$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'cucumber');

    this.cheese$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'cheese');

    this.garnish$ = Observable.merge(this.avocado$, this.cucumber$, this.cheese$);
  }
}
