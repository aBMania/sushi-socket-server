import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Ingredient } from '../../model/ingredient';
import { DataService } from '../data.service';
import * as _ from 'lodash';
@Injectable()

export class IngredientService {
  public ingredientData$: Observable<Ingredient>;

  static stashFromStream<T extends Ingredient>(stream: Observable<T>): Observable<T[]> {
    let stashArray: Ingredient[] = [];

    const trashSuppresions$ = stream
      .flatMap(
        ingredient => ingredient.expiration$,
        (ingredient) => ingredient,
      )
      .do(ingredient => {
        stashArray = _.filter(stashArray,
          (stashIngredient) => ingredient.tweetId !== stashIngredient.tweetId,
        )
      })
    ;

    const usedSuppression$ = stream
      .flatMap(
        ingredient => ingredient.used$.filter(used => !used),
        (ingredient) => ingredient,
      );

    const streamAdditions$ = stream.do((ingredient) => stashArray.push(ingredient));

    const reUseAdditions$ = stream.flatMap(ingredient => ingredient.used$.filter(used => used));

    const stash$ = Observable.merge(
      streamAdditions$,
      reUseAdditions$,
      trashSuppresions$,
      usedSuppression$,
      )
        .map(() => stashArray)
        .startWith(stashArray)
        .publishReplay()
    ;
    stash$.connect();
    return stash$.shareReplay();
  }

  static combineStashes(...stashes$) {
    return Observable.combineLatest(...stashes$, (...stashes) => {
      return _.flatten(stashes);
    })
  }

  constructor(public dataService: DataService) {
    this.ingredientData$ = this.dataService.ingredientDataSource$;
  }

  public getIngredientStream<T extends Ingredient>(ingredientType: { new(): T }, name: String): Observable<T> {
    return this.ingredientData$
      .filter(ingredient => ingredient.name === name)
      .map(ingredientData => {
        const ingredient = new ingredientType();

        ingredient.name = ingredientData.name;
        ingredient.tweetId = ingredientData.tweetId;
        ingredient.text = ingredientData.text;

        return ingredient;
      })
      .share()
      ;
  }
}
