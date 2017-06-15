import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IngredientService } from './ingredient.service';
import { Rice } from '../../model/rice/rice';

@Injectable()
export class RiceService {
  public stash: RiceStash;

  constructor(public ingredientService: IngredientService) {
    const riceStream$ = this.ingredientService.getIngredientStream<Rice>(Rice, 'rice');

    this.stash = {
      rice$: IngredientService.stashFromStream(riceStream$).do(console.log),
    }
    ;
  }
}

export interface RiceStash {
  rice$: Observable<Rice[]>
}
