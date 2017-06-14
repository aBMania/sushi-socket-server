import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IngredientService } from './ingredient.service';
import { Wrapper } from '../../model/wrapper/wrapper';
import { Algua } from '../../model/wrapper/algua';
import { Egg } from '../../model/wrapper/egg';
@Injectable()

export class WrapperService {
  public wrapper$: Observable<Wrapper>;

  public algua$: Observable<Algua>;
  public egg$: Observable<Egg>;

  constructor(public ingredientService: IngredientService) {
    this.algua$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'algua');

    this.egg$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'egg');

    this.wrapper$ = Observable.merge(this.algua$, this.egg$);
  }
}
