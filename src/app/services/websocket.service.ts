import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Ingredient } from '../model/ingredient';

@Injectable()
export class DataService {

  public ingredientSource$: Observable<Ingredient>;

  private _ingredientSource$: Subject<Ingredient> = new Subject();
  private url: String = 'ws://localhost:3000/';
  private socket;

  constructor() {
    this.ingredientSource$ = this._ingredientSource$.asObservable();
    this.socket = io(this.url);

    this.socket.on('ingredient', (ingredient: Ingredient) => {
      this._ingredientSource$.next(ingredient)
    })
  }
}
