import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Ingredient } from '../model/ingredient';

@Injectable()
export class DataService {

  public ingredientDataSource$: Observable<Ingredient>;

  private _ingredientDataSource$: Subject<Ingredient> = new Subject();
  private url: String = 'ws://localhost:3000/';
  private socket;

  constructor() {
    this.ingredientDataSource$ = this._ingredientDataSource$.asObservable();
    this.socket = io(this.url);

    this.socket.on('ingredient', (data: any) => {
      this._ingredientDataSource$.next(data);
    })
  }
}
