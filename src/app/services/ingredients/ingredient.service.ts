import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Ingredient } from '../../model/ingredient';
import { DataService } from '../websocket.service';
@Injectable()

export class IngredientService {
  public ingredient$: Observable<Ingredient>;

  constructor(public dataService: DataService) {
    this.ingredient$ = this.dataService.ingredientSource$
      .do(console.log)
      .share();
  }
}
