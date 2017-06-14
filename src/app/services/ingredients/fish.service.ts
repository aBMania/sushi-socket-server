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
  public fish$: Observable<Fish>;

  public salmon$: Observable<Salmon>;
  public tuna$: Observable<Tuna>;
  public crab$: Observable<Crab>;
  public surimi$: Observable<Surimi>;

  constructor(public ingredientService: IngredientService) {

    this.salmon$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'salmon');

    this.tuna$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'tuna');

    this.crab$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'crab');

    this.surimi$ = this.ingredientService.ingredient$
      .filter(ingredient => ingredient.name === 'surimi');

    this.fish$ = Observable.merge(this.salmon$, this.tuna$, this.crab$, this.surimi$);
  }
}
