import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IngredientService } from './ingredient.service';
import { Wrapper } from '../../model/wrapper/wrapper';
import { Algua } from '../../model/wrapper/algua';
import { Egg } from '../../model/wrapper/egg';


@Injectable()
export class WrapperService {
  public stash: WrapperStash;

  constructor(public ingredientService: IngredientService) {
    const alguaStream$ = this.ingredientService.getIngredientStream<Algua>(Algua, 'algua');
    const eggStream$ = this.ingredientService.getIngredientStream<Egg>(Egg, 'egg');

    this.stash = {
      algua$: IngredientService.stashFromStream(alguaStream$),
      egg$: IngredientService.stashFromStream(eggStream$),
      all$: null,
    };

    this.stash.all$ = IngredientService.combineStashes(
      this.stash.algua$,
      this.stash.egg$,
    );

  }
}

export interface WrapperStash {
  all$: Observable<Wrapper[]>
  algua$: Observable<Algua[]>;
  egg$: Observable<Egg[]>;
}

