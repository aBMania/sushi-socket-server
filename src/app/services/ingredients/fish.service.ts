import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Fish } from '../../model/fish/fish';
import { Salmon } from '../../model/fish/salmon';
import { IngredientService } from './ingredient.service';
import { Tuna } from '../../model/fish/tuna';
import { Crab } from '../../model/fish/crab';
import { Surimi } from '../../model/fish/surimi';


@Injectable()
export class FishService {
  public stash: FishStash;

  constructor(public ingredientService: IngredientService) {
    const salmonStream$ = this.ingredientService.getIngredientStream<Salmon>(Salmon, 'salmon');
    const tunaStream$ = this.ingredientService.getIngredientStream<Tuna>(Tuna, 'tuna');
    const crabStream$ = this.ingredientService.getIngredientStream<Crab>(Crab, 'crab');
    const surimiStream$ = this.ingredientService.getIngredientStream<Surimi>(Surimi, 'surimi');

    this.stash = {
      salmon$: IngredientService.stashFromStream(salmonStream$),
      tuna$: IngredientService.stashFromStream(tunaStream$),
      crab$: IngredientService.stashFromStream(crabStream$),
      surimi$: IngredientService.stashFromStream(surimiStream$),
      all$: null,
    };

    this.stash.all$ = IngredientService.combineStashes(
      this.stash.salmon$,
      this.stash.tuna$,
      this.stash.crab$,
      this.stash.surimi$,
    );
  }
}

export interface FishStash {
  all$: Observable<Fish[]>;
  salmon$: Observable<Salmon[]>;
  tuna$: Observable<Salmon[]>;
  crab$: Observable<Salmon[]>;
  surimi$: Observable<Salmon[]>;
}
