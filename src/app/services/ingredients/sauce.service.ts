import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Sauce } from '../../model/sauce/sauce';
import { IngredientService } from './ingredient.service';
import { Wasabi } from '../../model/sauce/wasabi';
import { Soja } from '../../model/sauce/soja';

@Injectable()
export class SauceService {
  public stash: SauceStash;

  constructor(public ingredientService: IngredientService) {
    const sojaStream$ = this.ingredientService.getIngredientStream<Soja>(Soja, 'soja');
    const wasabiStream$ = this.ingredientService.getIngredientStream<Wasabi>(Wasabi, 'wasabi');

    this.stash = {
      soja$: IngredientService.stashFromStream(sojaStream$),
      wasabi$: IngredientService.stashFromStream(wasabiStream$),
      all$: null
    };

    this.stash.all$ = IngredientService.combineStashes(
      this.stash.soja$,
      this.stash.wasabi$,
    )

  }
}

export interface SauceStash {
  all$: Observable<Sauce[]>
  soja$: Observable<Soja[]>;
  wasabi$: Observable<Wasabi[]>;
}
